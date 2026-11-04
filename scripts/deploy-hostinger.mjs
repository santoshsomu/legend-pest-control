import * as ftp from 'basic-ftp';
import * as fs from 'node:fs';
import * as path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

// Load .env.hostinger if present
function loadEnv() {
  const envPath = path.join(rootDir, '.env.hostinger');
  const env = { ...process.env };
  if (fs.existsSync(envPath)) {
    const raw = fs.readFileSync(envPath, 'utf-8');
    raw.split(/\r?\n/).forEach((line) => {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith('#')) return;
      const eqIdx = trimmed.indexOf('=');
      if (eqIdx !== -1) {
        const key = trimmed.slice(0, eqIdx).trim();
        let val = trimmed.slice(eqIdx + 1).trim();
        if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
          val = val.slice(1, -1);
        }
        env[key] = val;
      }
    });
  }
  return env;
}

// Parse CLI flags
function parseArgs() {
  const args = process.argv.slice(2);
  const parsed = {};
  for (let i = 0; i < args.length; i++) {
    if (args[i].startsWith('--')) {
      const key = args[i].slice(2);
      const next = args[i + 1];
      if (next && !next.startsWith('--')) {
        parsed[key] = next;
        i++;
      } else {
        parsed[key] = true;
      }
    }
  }
  return parsed;
}

async function main() {
  const env = loadEnv();
  const cli = parseArgs();

  const host = cli.host || env.HOSTINGER_FTP_HOST || 'ftp.legendpestcontrolmelbourne.com.au';
  const user = cli.user || env.HOSTINGER_FTP_USER || 'u809925908';
  const password = cli.password || env.HOSTINGER_FTP_PASSWORD;
  const port = Number(cli.port || env.HOSTINGER_FTP_PORT || 21);
  const remoteDir = cli.dir || env.HOSTINGER_REMOTE_DIR || 'public_html';

  console.log('----------------------------------------------------');
  console.log('🚀 Legend Pest Control -> Hostinger Direct Deployer');
  console.log('----------------------------------------------------');
  console.log(`📡 Host: ${host}`);
  console.log(`👤 User: ${user}`);
  console.log(`📁 Remote Directory: ${remoteDir}`);
  console.log(`🔌 Port: ${port}`);

  if (!password) {
    console.error('\n❌ ERROR: Hostinger FTP Password is required!');
    console.error('Please provide it in one of the following ways:');
    console.error('1. Create a .env.hostinger file with:');
    console.error('   HOSTINGER_FTP_PASSWORD=your_password_here');
    console.error('2. Run with command line argument:');
    console.error('   node scripts/deploy-hostinger.mjs --password your_password_here');
    console.error('3. Set environment variable HOSTINGER_FTP_PASSWORD');
    process.exit(1);
  }

  // Check dist directory
  const distDir = path.join(rootDir, 'dist');
  if (!fs.existsSync(distDir) || !fs.existsSync(path.join(distDir, 'index.html'))) {
    console.error('\n❌ ERROR: dist/ directory not found or empty! Please run npm run build first.');
    process.exit(1);
  }

  const client = new ftp.Client();
  client.ftp.verbose = true;
  client.timeout = 30000;

  try {
    console.log('\n⏳ Connecting to Hostinger FTP server...');
    await client.access({
      host,
      user,
      password,
      port,
      secure: false, // will negotiate secure TLS if supported, prevents cert mismatches
    });

    console.log('✅ Connected and authenticated successfully!');
    const currentPwd = await client.pwd();
    console.log(`📍 Current working directory: ${currentPwd}`);

    const dirList = await client.list();
    console.log(`📋 Remote root contents (${dirList.length} items):`, dirList.map(item => item.name).slice(0, 10).join(', '));

    // Determine target upload directory
    let targetDir = '.';
    const hasPublicHtmlSubdir = dirList.some(item => item.name === 'public_html' && item.isDirectory);
    const alreadyInPublicHtml = currentPwd.endsWith('public_html') || dirList.some(item => item.name === 'index.html');

    if (hasPublicHtmlSubdir) {
      targetDir = 'public_html';
      console.log('📂 Found "public_html" subdirectory. Uploading into "public_html"...');
      await client.ensureDir(targetDir);
    } else if (alreadyInPublicHtml) {
      targetDir = '.';
      console.log('📂 Already inside web root (found index.html or in public_html). Uploading into current directory...');
    } else {
      targetDir = remoteDir;
      console.log(`📂 Ensuring remote directory "${targetDir}"...`);
      await client.ensureDir(targetDir);
    }

    console.log(`🚀 Uploading dist/ folder directly to Hostinger ${targetDir}...`);
    await client.uploadFromDir(distDir, targetDir);

    console.log('\n🎉 ================================================');
    console.log('✅ DEPLOYMENT SUCCESSFUL!');
    console.log('🌐 Your changes are now live on https://legendpestcontrolmelbourne.com.au');
    console.log('================================================\n');
  } catch (err) {
    console.error('\n❌ Hostinger FTP Deployment Failed:', err.message);
    if (err.code === 'ECONNREFUSED' || err.code === 'ENOTFOUND') {
      console.error('Tip: Check if the FTP host domain is correct or use your Hostinger Server IP from hPanel.');
    } else if (err.code === 530) {
      console.error('Tip: Authentication failed. Please check your Hostinger FTP username and password in hPanel.');
    }
    process.exit(1);
  } finally {
    client.close();
  }
}

main();
