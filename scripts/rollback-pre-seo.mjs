import fs from 'fs';
import path from 'path';

console.log('🔄 Initiating instant rollback to pre-SEO optimization state...');

const backupDir = path.resolve('backups/pre-seo-optimization');
const srcDir = path.resolve('src');

if (!fs.existsSync(backupDir)) {
  console.error('❌ Backup directory not found!');
  process.exit(1);
}

// Restore components
fs.cpSync(path.join(backupDir, 'components'), path.join(srcDir, 'components'), { recursive: true, force: true });
// Restore data
fs.cpSync(path.join(backupDir, 'data'), path.join(srcDir, 'data'), { recursive: true, force: true });
// Restore index.html
fs.copyFileSync(path.join(backupDir, 'index.html'), path.resolve('index.html'));

console.log('✅ Rollback complete! All files restored to exact previous state.');
