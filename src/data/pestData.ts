import type { PestService, SuburbArea, Testimonial, FaqItem } from '../types';

export const SERVICES: PestService[] = [
  {
    id: 'general-pest-control',
    name: 'General Pest Treatment',
    category: 'residential',
    shortDesc: 'Comprehensive internal skirting & external perimeter defense against spiders, ants, cockroaches & silverfish.',
    fullDesc: 'Our flagship preventative and curative treatment designed specifically for Australian suburban homes. We target weep holes, roof voids, internal skirting boards, subfloors, and exterior boundaries to form an impenetrable barrier that keeps pests out for months.',
    signsOfInfestation: [
      'Cobwebs along eaves, fences, and window frames',
      'Ant trails marching towards kitchen pantries or along pavers',
      'Cockroaches scurrying when lights turn on at night',
      'Silverfish spotted near wardrobes, bathrooms, and book boxes'
    ],
    treatmentProcess: [
      'Full perimeter liquid barrier applied to exterior walls, eaves, and window surrounds',
      'Precision internal low-odour micro-encapsulated spray along baseboards',
      'Permethrin dust injection into roof voids and wall cavities',
      'Targeted gel placements in hidden moisture areas and weep holes'
    ],
    warranty: '6-Month Free Re-treatment Warranty',
    popular: true,
    iconName: 'ShieldAlert',
    imageHint: 'spiders-ants-perimeter',
    safetyNote: '100% Pet & Child Safe after 1.5–2 hours drying time',
    turnaroundTime: 'Same-Day or Next-Day Service Available'
  },
  {
    id: 'dead-animal-removal',
    name: 'Dead Animal & Carcass Removal',
    category: 'specialist',
    shortDesc: 'Emergency sanitary extraction of dead possums, rodents & birds from roof cavities, subfloors & walls with hospital-grade deodorisation.',
    fullDesc: 'Deceased animals inside roof spaces, wall cavities, or subfloors create unbearable foul odours, attract blowflies, maggots, and harmful airborne bacteria. Our licensed technicians locate the carcass, safely extract it following biohazard disposal protocols, and apply industrial-grade enzymatic deodorisers and antibacterial sanitiser.',
    signsOfInfestation: [
      'Foul, sickening, or rotting smell emanating from ceiling vents or wall cavities',
      'Sudden swarm of large blowflies or flesh flies inside the house',
      'Ceiling plaster discolouration, damp patches, or fluid staining',
      'Pets persistently scratching or sniffing frantically at a specific wall section'
    ],
    treatmentProcess: [
      'Thermal imaging and acoustic localization inside roof void, wall cavities, or subfloor',
      'Safe, sanitary containment and biohazard removal of the carcass',
      'Medical-grade hospital disinfectant spray to eliminate bacteria, maggots, and pathogens',
      'Heavy-duty botanical enzymatic fogging to permanently neutralize biological odours'
    ],
    warranty: '100% Odour Neutralisation & Sanitisation Guarantee',
    popular: true,
    iconName: 'Sparkles',
    imageHint: 'dead-animal-possum-roof',
    safetyNote: 'Biohazard compliant with hospital-grade non-toxic disinfectants',
    turnaroundTime: '⚡ Priority Emergency Dispatch within 1–3 Hours'
  },
  {
    id: 'german-cockroach-eradication',
    name: 'German Cockroach Specialised Eradication',
    category: 'specialist',
    shortDesc: 'Targeted multi-visit eradication designed to break the 21-day egg hatching cycle in kitchens & appliances.',
    fullDesc: 'German cockroaches carry pathogens and breed at an exponential rate inside motor compartments of fridges, dishwashers, and ovens. Over-the-counter sprays scatter them deeper. We deploy professional bait matrix gels, insect growth regulators (IGR), and sticky monitor traps to eradicate the entire colony.',
    signsOfInfestation: [
      'Small tan cockroaches hiding behind fridge seals or microwave motors',
      'Pepper-like droppings inside pantry hinges and under sinks',
      'Egg capsules (ootheca) visible in drawers or dark warm corners',
      'Musty oily odour in kitchen or laundry cabinetry'
    ],
    treatmentProcess: [
      'Inspection of electrical motors, cupboard hinges, and kickboards',
      'Application of high-palatability non-repellent indoxacarb gel bait',
      'Insect Growth Regulators (IGR) to sterilize surviving nymphs',
      'Mandatory secondary follow-up to eliminate newly hatched nymphs'
    ],
    warranty: 'Colony Eradication Guarantee with 2-Stage Protocol',
    popular: false,
    iconName: 'Bug',
    imageHint: 'german-cockroach-kitchen',
    safetyNote: 'No need to empty food cupboards; non-spray gel application',
    turnaroundTime: 'Same-Day Dispatch Available'
  },
  {
    id: 'rodent-rat-mouse-control',
    name: 'Rodent & Mice Control',
    category: 'residential',
    shortDesc: 'Rapid eradication of roof rats & mice with tamper-proof child/pet safe bait stations & entry proofing.',
    fullDesc: 'During cooler Victorian months, rats and mice migrate into roof spaces and wall cavities, chewing through electrical wiring and contaminating insulation. Our rodent program combines targeted roof baiting, tamper-resistant external stations, and thorough entry-point mapping.',
    signsOfInfestation: [
      'Scratching, scurrying, or thumping sounds in the roof at night',
      'Small black droppings found in pantries, garage, or ceiling space',
      'Gnaw marks on skirting boards, food packaging, or electrical cables',
      'Unexplained ammonia smell or pet agitation around floor vents'
    ],
    treatmentProcess: [
      'Thermal and torch inspection of roof void, attic, and subfloor',
      'Installation of tamper-resistant lockable lock-boxes externally',
      'Professional single-feed anticoagulant baiting in ceiling cavities',
      'Entry point identification report with proofing recommendations'
    ],
    warranty: '6-Month Rodent Re-treatment Guarantee',
    popular: true,
    iconName: 'Rat',
    imageHint: 'rodent-control-melbourne',
    safetyNote: 'Lockable tamper-proof stations safe for dogs & cats',
    turnaroundTime: 'Same-Day Dispatch for Roof Noise Emergencies'
  },
  {
    id: 'termite-inspection',
    name: 'Termite Inspection',
    category: 'specialist',
    shortDesc: 'Comprehensive AS 4349.3 Timber Pest Inspection utilizing thermal imaging, moisture meters & sounding probes.',
    fullDesc: '1 in 3 Australian properties will face subterranean termite activity in their lifetime. Our certified inspectors conduct thorough, non-invasive examinations of subfloors, roof voids, internal timber walls, and yard perimeters, generating an Australian Standard AS 4349.3 digital report with high-resolution imagery and prevention advice.',
    signsOfInfestation: [
      'Hollow-sounding timber skirting boards or door jambs',
      'Mud tubes or shelter tracks leading from ground to brick weep holes',
      'Tight-fitting doors or warped timber floorboards',
      'Fine papery wood or discarded translucent wings on window sills'
    ],
    treatmentProcess: [
      'Non-invasive inspection of subfloors, wall framing, roof void, and yard perimeters',
      'FLIR thermal imaging scan to detect internal nest temperature differentials',
      'Tramex moisture meter detection to uncover concealed moisture pockets',
      'Detailed 25+ page AS 4349.3 compliance report delivered same day'
    ],
    warranty: 'Certified AS 4349.3 Compliance Report',
    popular: false,
    iconName: 'Building2',
    imageHint: 'termite-inspection-melbourne',
    safetyNote: '100% non-invasive thermal & acoustic diagnostic technology',
    turnaroundTime: 'Comprehensive Same-Day Digital Reporting'
  },
  {
    id: 'end-of-lease-flea-treatment',
    name: 'End of Lease Flea Treatment',
    category: 'residential',
    shortDesc: 'Certified vacate flea & pest treatments for tenants with pets, including official digital certificate for full bond return.',
    fullDesc: 'Victorian rental agreements mandate a professional pest and flea spray when vacating a property with pets. We treat internal carpets, skirting, and outdoor entertaining areas with rapid-drying insect growth regulators and immediately issue your compliant real estate invoice and certificate.',
    signsOfInfestation: [
      'Mandatory requirement in your residential tenancy vacate agreement',
      'Flea bites around ankles or pets scratching excessively',
      'Small black flea dirt visible in carpet pile or pet bedding'
    ],
    treatmentProcess: [
      'Comprehensive internal carpet and skirting flea eradication spray',
      'Targeted outdoor patio, deck, and kennel misting',
      'Insect growth regulator (IGR) application to eliminate dormant pupae',
      'Instant digital compliance certificate issued for your property manager'
    ],
    warranty: '100% Real Estate Bond Back Guarantee',
    popular: true,
    iconName: 'KeyRound',
    imageHint: 'end-of-lease-pest',
    safetyNote: 'Rapid 1-hour drying time so cleaners or inspectors can enter',
    turnaroundTime: 'Priority Same-Day Real Estate Booking'
  },
  {
    id: 'wasp-bee-removal',
    name: 'Wasp & Bee Nest Removal',
    category: 'residential',
    shortDesc: 'Same-day emergency removal of European wasps, mud daubers & beehives from eaves, roofs, and wall cavities.',
    fullDesc: 'European wasps and bees can be extremely aggressive and dangerous to children and pets if their nest is disturbed. We provide same-day emergency knockdown and safe removal of nests from eaves, weep holes, chimneys, and garden sheds with protective suits and high-impact knockdown formulations.',
    signsOfInfestation: [
      'Constant stream of wasps entering under roof tiles or brick weep holes',
      'Visible paper-like or mud nests on eaves, window sills, or sheds',
      'Loud buzzing vibrating through ceiling plaster or hollow walls'
    ],
    treatmentProcess: [
      'Technician dons full protective bee/wasp containment suit',
      'Direct pressure injection into nest core for instant colony knockdown',
      'Physical removal and sanitary disposal of the hive where accessible',
      'Residual barrier treatment to stop re-nesting in the same cavity'
    ],
    warranty: 'Colony Elimination Guarantee',
    popular: false,
    iconName: 'Flame',
    imageHint: 'wasp-nest-removal',
    safetyNote: 'Immediate threat neutralization for family and pet safety',
    turnaroundTime: '⚡ 1–2 Hour Priority Dispatch Available'
  },
  {
    id: 'commercial-pest-control',
    name: 'Commercial Pest Management',
    category: 'commercial',
    shortDesc: 'HACCP & Council Health compliant pest maintenance programs for cafes, restaurants, warehouses & corporate offices.',
    fullDesc: 'Pest sightings can destroy a commercial hospitality reputation and result in severe council fines. We design tailored Integrated Pest Management (IPM) programs for Victorian businesses with barcoded bait stations, trend analytics, and complete audit documentation.',
    signsOfInfestation: [
      'Cockroach or fly activity near food preparation surfaces',
      'Rodent droppings in dry storage rooms or loading docks',
      'Need for scheduled quarterly pest compliance service for food audits'
    ],
    treatmentProcess: [
      'Full facility hazard and risk assessment',
      'Placement of barcoded tamper-proof rodent stations & fly traps',
      'Discreet after-hours or early morning treatment times',
      'Digital service logbook and compliance certificates for council health officers'
    ],
    warranty: 'HACCP & Council Audit Pass Guarantee',
    popular: false,
    iconName: 'Building',
    imageHint: 'commercial-kitchen-pest',
    safetyNote: 'Food safety grade APVMA formulations with zero residue',
    turnaroundTime: 'Discreet After-Hours Servicing'
  }
];

export const SUBURBS: SuburbArea[] = [
  // Geelong & Surf Coast
  { name: 'Geelong CBD', postcode: '3220', region: 'Geelong & Surf Coast', sameDayAvailable: true },
  { name: 'Belmont', postcode: '3216', region: 'Geelong & Surf Coast', sameDayAvailable: true },
  { name: 'Newtown', postcode: '3220', region: 'Geelong & Surf Coast', sameDayAvailable: true },
  { name: 'Highton', postcode: '3216', region: 'Geelong & Surf Coast', sameDayAvailable: true },
  { name: 'Grovedale', postcode: '3216', region: 'Geelong & Surf Coast', sameDayAvailable: true },
  { name: 'Lara', postcode: '3212', region: 'Geelong & Surf Coast', sameDayAvailable: true },
  { name: 'Corio', postcode: '3214', region: 'Geelong & Surf Coast', sameDayAvailable: true },
  { name: 'Norlane', postcode: '3214', region: 'Geelong & Surf Coast', sameDayAvailable: true },
  { name: 'Waurn Ponds', postcode: '3216', region: 'Geelong & Surf Coast', sameDayAvailable: true },
  { name: 'Ocean Grove', postcode: '3226', region: 'Geelong & Surf Coast', sameDayAvailable: true },
  { name: 'Torquay', postcode: '3228', region: 'Geelong & Surf Coast', sameDayAvailable: true },

  // Melbourne West
  { name: 'Werribee', postcode: '3030', region: 'Melbourne West', sameDayAvailable: true },
  { name: 'Point Cook', postcode: '3030', region: 'Melbourne West', sameDayAvailable: true },
  { name: 'Hoppers Crossing', postcode: '3029', region: 'Melbourne West', sameDayAvailable: true },
  { name: 'Wyndham Vale', postcode: '3024', region: 'Melbourne West', sameDayAvailable: true },
  { name: 'Tarneit', postcode: '3029', region: 'Melbourne West', sameDayAvailable: true },
  { name: 'Truganina', postcode: '3029', region: 'Melbourne West', sameDayAvailable: true },
  { name: 'Williams Landing', postcode: '3027', region: 'Melbourne West', sameDayAvailable: true },
  { name: 'Manor Lakes', postcode: '3024', region: 'Melbourne West', sameDayAvailable: true },

  // Inner West & Metro
  { name: 'Footscray', postcode: '3011', region: 'Inner West & Metro', sameDayAvailable: true },
  { name: 'Altona & Altona North', postcode: '3018', region: 'Inner West & Metro', sameDayAvailable: true },
  { name: 'Williamstown', postcode: '3016', region: 'Inner West & Metro', sameDayAvailable: true },
  { name: 'Yarraville', postcode: '3013', region: 'Inner West & Metro', sameDayAvailable: true },
  { name: 'Sunshine', postcode: '3020', region: 'Inner West & Metro', sameDayAvailable: true },
  { name: 'Melton', postcode: '3337', region: 'Inner West & Metro', sameDayAvailable: true },
  { name: 'Caroline Springs', postcode: '3023', region: 'Inner West & Metro', sameDayAvailable: true }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-dead-animal',
    author: 'Rebecca Thorne',
    suburb: 'Werribee, VIC',
    service: 'Dead Animal & Carcass Removal',
    rating: 5,
    date: '3 days ago',
    text: 'A horrific smell broke out above our hallway ceiling on a warm afternoon. Sahithi arranged a priority technician who arrived within 90 minutes. He located a deceased possum trapped near the eaves, removed it hygienically, disinfected the cavity, and treated the roof space with heavy-duty enzyme deodoriser. The smell was 100% gone that evening. Can’t thank Legend Pest Control enough!',
    verified: true
  },
  {
    id: 't-1',
    author: 'Mark Henderson',
    suburb: 'Werribee, VIC',
    service: 'General Pest & Spider Treatment',
    rating: 5,
    date: '2 weeks ago',
    text: 'Called Sahithi and the team at Legend Pest Control after redbacks and white-tails started appearing in our kids outdoor play area. The technician arrived right on time, explained every chemical used, and did an incredibly thorough job inside, outside and in the roof. Haven\'t seen a single spider since. The $50 voucher made it incredible value!',
    verified: true
  },
  {
    id: 't-2',
    author: 'Jessica Chen',
    suburb: 'Point Cook, VIC',
    service: 'German Cockroach Eradication',
    rating: 5,
    date: '1 month ago',
    text: 'We had persistent German roaches in our kitchen motor cavity that supermarket sprays couldn\'t fix. Legend Pest Control set up targeted baiting and explained their 2-visit cycle. Within 10 days, zero roaches! Polite, professional, and took care around our family dog.',
    verified: true
  },
  {
    id: 't-3',
    author: 'David O\'Connor',
    suburb: 'Lara, Geelong',
    service: 'Rodent & Roof Mice Treatment',
    rating: 5,
    date: '3 weeks ago',
    text: 'Scratching noises in the ceiling were keeping us awake every night. Legend came out to Lara the very next morning. Put locked bait stations in the ceiling and along the perimeter. Quiet nights restored. Fantastic 6-month warranty gives great peace of mind.',
    verified: true
  },
  {
    id: 't-4',
    author: 'Sarah Jenkins',
    suburb: 'Belmont, Geelong',
    service: 'End of Lease Flea Treatment',
    rating: 5,
    date: '1 week ago',
    text: 'Needed urgent end-of-lease flea treatment for our real estate handover in Geelong. They slotted us in same-day, did the job swiftly, and emailed the compliance certificate directly to our property manager. Full bond returned without a hitch!',
    verified: true
  },
  {
    id: 't-5',
    author: 'Anthony Rossi',
    suburb: 'Hoppers Crossing, VIC',
    service: 'Wasp Nest Removal',
    rating: 5,
    date: '4 days ago',
    text: 'A nasty European wasp nest was growing under our porch roof. Legend Pest Control answered the phone immediately on 0416 388 777, quoted upfront with no surprises, and removed it safely within 2 hours. Couldn\'t ask for better service.',
    verified: true
  }
];

export const FAQS: FaqItem[] = [
  {
    category: 'safety',
    question: 'Are your pest control chemicals safe for my children and pets?',
    answer: 'Yes, 100%. We exclusively use APVMA-approved (Australian Pesticides and Veterinary Medicines Authority) synthetic pyrethroids and low-toxicity formulations that mimic natural extracts from chrysanthemums. Once dry (typically 1.5 to 2 hours), the treatment binds tightly to surfaces, leaving no airborne residue or harmful fumes for children, dogs, or cats.'
  },
  {
    category: 'warranty',
    question: 'How does your 6-month treatment warranty work?',
    answer: 'If covered pests return to your treated home within 6 months, simply call us on 0416 388 777. A licensed technician will return to your property and re-treat the affected areas completely free of charge. No quibbles, no hidden fees.'
  },
  {
    category: 'pricing',
    question: 'How do your quotes work without hidden fees?',
    answer: 'We provide completely transparent, upfront fixed quotes over the phone or online based on your property type and pest severity before any work begins. Every quote includes your $50 new customer discount voucher automatically, and we never add surprise callout or travel surcharges.'
  },
  {
    category: 'general',
    question: 'How quickly can you remove a dead animal or deceased possum from my roof?',
    answer: 'Dead animal carcass removal is treated as an urgent priority emergency. In most cases across Geelong, Lara, Werribee, Point Cook, and Melbourne’s West, we can dispatch a licensed technician within 1 to 3 hours to locate the carcass, extract it safely, disinfect the space against bacteria/maggots, and fog with heavy-duty enzymatic odour neutralisers.'
  },
  {
    category: 'general',
    question: 'What is involved in a professional Termite Inspection?',
    answer: 'Our timber pest inspections strictly follow Australian Standard AS 4349.3. We conduct a thorough examination of subfloors, roof cavities, internal timber walls, and yard perimeters using non-invasive FLIR thermal imaging cameras, electronic moisture meters, and sounding probes. You receive a comprehensive photographic digital report delivered the same day.'
  },
  {
    category: 'general',
    question: 'Do I need to leave my home or empty my kitchen cupboards?',
    answer: 'For standard general pest sprays, you only need to step outside for 1.5 to 2 hours while the liquid dries. For German cockroach gel treatments, you do NOT need to empty your pantry or cupboards, because our specialized gel baits are applied with precision droplets behind hinges and appliance voids without messy sprays.'
  },
  {
    category: 'warranty',
    question: 'Are your technicians licensed and insured in Victoria?',
    answer: 'Yes. Every Legend Pest Control technician holds a current Victorian Department of Health Pest Control Licence and is fully insured with $20 Million Public Liability insurance. All treatments strictly comply with Australian Standards.'
  }
];

export const COMPANY_DETAILS = {
  name: 'Legend Pest Control Melbourne & Geelong',
  owner: 'Sahithi',
  tagline: 'Every pest problem, one legendary solution',
  headline: 'Every pest problem, one legendary solution',
  subheadline: "Professional, Same-Day Pest Control Across Melbourne's West & Geelong",
  phone: '0416 388 777',
  phoneDisplay: '0416 388 777',
  email: 'Help@legendpestcontrolmelbourne.com.au',
  abn: '74 819 203 114',
  licence: 'Vic Dept of Health Lic #L012894',
  insurance: '$20M Public & Products Liability',
  hours: 'Mon – Sun: 7:00 AM – 7:00 PM (24/7 Emergency Line)',
  address: "Servicing Greater Melbourne's West, Geelong & Bellarine Peninsula",
  promoDiscount: 50
};
