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
    priceFrom: 249,
    promoPrice: 199,
    popular: true,
    iconName: 'ShieldAlert',
    imageHint: 'spiders-ants-perimeter',
    keyFeatures: [
      'Covers Spiders, Ants, Cockroaches & Silverfish',
      'Roof cavity & weep hole dusting included',
      '100% Pet & Child Safe after 2 hours drying time',
      'Australian Department of Health compliant'
    ]
  },
  {
    id: 'german-cockroach-eradication',
    name: 'German Cockroach Specialised Eradication',
    category: 'specialist',
    shortDesc: 'Targeted multi-visit eradication designed to break the 21-day egg hatching cycle in kitchens & appliances.',
    fullDesc: 'German cockroaches carry pathogens and breed at an exponential rate inside motor compartments of fridges, dishwashers, and ovens. Over-the-counter sprays scatter them deeper. We deploy professional bait matrix gels, insect growth regulators (IGR), and sticky monitor traps to eradicate the entire colony.',
    signsOfInfestation: [
      'Small tan cockroaches hiding behind fridge seals or microwave',
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
    priceFrom: 299,
    promoPrice: 249,
    popular: false,
    iconName: 'Bug',
    imageHint: 'german-cockroach-kitchen',
    keyFeatures: [
      'Zero need to completely empty your food cupboards',
      'Targets electrical motors where pests nest',
      'Insect Growth Regulators halt reproduction',
      'Includes follow-up booster inspection'
    ]
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
    priceFrom: 269,
    promoPrice: 219,
    popular: true,
    iconName: 'Rat',
    imageHint: 'rodent-control-melbourne',
    keyFeatures: [
      'Lockable tamper-proof stations safe for dogs & cats',
      'Ceiling cavity & crawl space baiting',
      'Rapid colony elimination within 4–7 days',
      'Prevents structural wiring damage'
    ]
  },
  {
    id: 'termite-inspection-barriers',
    name: 'Termite Inspections & Chemical Barriers',
    category: 'specialist',
    shortDesc: 'AS 3660 & AS 4349.3 compliant visual & thermal imaging inspections + Termidor soil barrier installations.',
    fullDesc: '1 in 3 Australian homes face subterranean termite risk. Termites cause millions in undetected structural timber damage. We use FLIR thermal imaging cameras, moisture meters, and acoustic sounding to detect active termites without damaging walls, followed by leading Termidor HE barrier protection.',
    signsOfInfestation: [
      'Mud tubes along foundation walls or subfloor stumps',
      'Hollow sounding timber door frames or springy floorboards',
      'Discarded winged alates (swarmers) near window sills in spring',
      'Tight-fitting doors or hairline cracks in cornices'
    ],
    treatmentProcess: [
      'Comprehensive inspection covering internal timbers, roof void & subfloor',
      'FLIR thermal imaging and Tramex moisture meter scanning',
      'Detailed 20+ page timber pest report with photographic evidence',
      'Trenching and sub-slab injection of Termidor non-repellent chemical barrier'
    ],
    warranty: 'Up to 8-Year Termidor Structural Warranty Available',
    priceFrom: 280,
    promoPrice: 230,
    popular: false,
    iconName: 'Building2',
    imageHint: 'termite-barrier-inspection',
    keyFeatures: [
      'AS 3660.2 & AS 4349.3 certified timber pest report',
      'Thermal imaging inspection equipment used',
      'Same-day digital report for pre-purchase property buyers',
      'Accredited Termidor applicator'
    ]
  },
  {
    id: 'wasp-bee-nest-removal',
    name: 'Wasp & Bee Nest Removal',
    category: 'residential',
    shortDesc: 'Same-day urgent neutralization of European wasps, paper wasps, and bee swarms with safety gear.',
    fullDesc: 'European wasps and paper wasps present a painful sting hazard for children and pets, nesting aggressively under roof eaves, inside wall cavities, and in garden retaining walls. We offer fast same-day response with protective bee gear and fast-acting aerosol and dust knockdowns.',
    signsOfInfestation: [
      'Continuous stream of wasps entering a hole in brickwork or eaves',
      'Grey papery football-shaped nest visible under porch or tree branch',
      'Buzzing sounds inside plasterboard walls or window frames',
      'Aggressive stinging insects hovering around barbecue or pet bowls'
    ],
    treatmentProcess: [
      'Protective bee suit gear deployment',
      'High-pressure pyrethrin knockdown into nest entrance',
      'Insecticidal dust injection for complete cavity saturation',
      'Safe physical nest removal and disposal (where accessible)'
    ],
    warranty: '100% Nest Kill Guarantee',
    priceFrom: 199,
    promoPrice: 149,
    popular: false,
    iconName: 'Flame',
    imageHint: 'wasp-removal-geelong',
    keyFeatures: [
      'Emergency same-day callout available',
      'Safe removal from second-storey rooflines',
      'Guaranteed elimination of entire nest',
      'Child & pet safety isolation advice provided'
    ]
  },
  {
    id: 'end-of-lease-pest-treatment',
    name: 'End-of-Lease Flea & Pest Treatment',
    category: 'residential',
    shortDesc: 'Guaranteed real estate bond release with official compliance certificate issued within 2 hours of completion.',
    fullDesc: 'If you had pets during your tenancy, Victorian residential tenancy agreements require a professional flea spray before hand-over. We perform a thorough internal and external flea spray and email you an official Real Estate Approved Certificate on the spot for full bond refund.',
    signsOfInfestation: [
      'Flea bites on ankles after walking on carpets',
      'Upcoming lease handover with dog or cat clauses',
      'Real estate property manager requires receipt & certificate',
      'Vacated property needing fast, hassle-free spray'
    ],
    treatmentProcess: [
      'Internal carpet and hard floor insecticidal broadcast spray',
      'Skirting board and door frame residual barrier application',
      'Targeted outdoor treatment of patios, dog kennels, and decks',
      'Immediate digital certificate generated and emailed for your agent'
    ],
    warranty: '100% Bond Return Pest Compliance Guarantee',
    priceFrom: 220,
    promoPrice: 170,
    popular: true,
    iconName: 'KeyRound',
    imageHint: 'end-of-lease-bond',
    keyFeatures: [
      '100% Real Estate Agent Approved Certificate',
      'Digital certificate sent directly to you & property manager',
      'Fast turnaround for tight move-out schedules',
      'Non-staining, pet-safe formulations'
    ]
  },
  {
    id: 'commercial-pest-management',
    name: 'Commercial & Hospitality Pest Control',
    category: 'commercial',
    shortDesc: 'HACCP compliant pest management for cafes, restaurants, warehouses & medical clinics with digital logbooks.',
    fullDesc: 'We protect Geelong and Melbourne businesses from health inspector closures and brand damage. From food handling facilities to corporate offices, we establish proactive monthly or quarterly pest defence programs backed by full documentation and compliance logs.',
    signsOfInfestation: [
      'Health inspector audit approaching',
      'Rodent droppings in stock storage or commercial kitchen',
      'Flies or fruit flies around prep counters and beer lines',
      'Need for scheduled quarterly pest compliance service'
    ],
    treatmentProcess: [
      'Full facility hazard and risk assessment',
      'Placement of barcoded tamper-proof rodent stations & fly traps',
      'Discreet after-hours or early morning treatment times',
      'Digital service logbook and compliance certificates for council health officers'
    ],
    warranty: 'HACCP & Council Audit Pass Guarantee',
    priceFrom: 350,
    promoPrice: 299,
    popular: false,
    iconName: 'Building',
    imageHint: 'commercial-kitchen-pest',
    keyFeatures: [
      'HACCP, Food Safety & Council Health compliant',
      'Discreet servicing (unmarked vehicles on request)',
      'Digital reporting & trend analysis',
      'Flexible ongoing maintenance contracts'
    ]
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
  { name: 'Ocean Grove', postcode: '3226', region: 'Geelong & Surf Coast', sameDayAvailable: false },
  { name: 'Torquay', postcode: '3228', region: 'Geelong & Surf Coast', sameDayAvailable: false },

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
    id: 't-1',
    author: 'Mark Henderson',
    suburb: 'Werribee, VIC',
    service: 'General Pest & Spider Treatment',
    rating: 5,
    date: '2 weeks ago',
    text: 'Called Sahithi and the team at Legend Pest Control after redbacks and white-tails started appearing in our kids outdoor play area. The technician arrived right on time, explained every chemical used, and did an incredibly thorough job inside, outside and in the roof. Haven\'t seen a single spider since. The $50 off promo made it the best value in Melbourne\'s west!',
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
    date: 'Yesterday',
    text: 'Needed urgent end-of-lease flea treatment for our real estate handover in Geelong. They slotted us in same-day, did the job swiftly, and emailed the compliance certificate directly to our property manager. Full bond returned without a hitch!',
    verified: true
  },
  {
    id: 't-5',
    author: 'Anthony Rossi',
    suburb: 'Hoppers Crossing, VIC',
    service: 'Wasp Nest Removal',
    rating: 5,
    date: '3 days ago',
    text: 'A nasty European wasp nest was growing under our porch roof. Legend Pest Control answered the phone immediately on 1800 623 252, quoted $149 upfront, and removed it safely within 2 hours. Couldn\'t ask for better service.',
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
    answer: 'If covered pests return to your treated home within 6 months, simply call us on 1800 623 252. A licensed technician will return to your property and re-treat the affected areas completely free of charge. No quibbles, no hidden fees.'
  },
  {
    category: 'pricing',
    question: 'What is included in the $199 new customer special?',
    answer: 'Our $199 new customer package (discounted from $249) covers a comprehensive internal and external general pest barrier for standard residential homes. This includes internal skirting boards, full exterior walls and eaves, subfloor access, weep hole injection, and roof cavity dusting for spiders, common cockroaches, ants, and silverfish.'
  },
  {
    category: 'general',
    question: 'Do I need to leave my home or empty my kitchen cupboards?',
    answer: 'For standard general pest sprays, you only need to step outside for 1.5 to 2 hours while the liquid dries. For German cockroach gel treatments, you do NOT need to empty your pantry or cupboards, because our specialized gel baits are applied with precision droplets behind hinges and appliance voids without messy sprays.'
  },
  {
    category: 'general',
    question: 'How quickly can a technician come out to Geelong or Melbourne West?',
    answer: 'We have mobile technicians stationed daily across Geelong, Lara, Werribee, Point Cook, and surrounding suburbs. In urgent cases (such as aggressive wasp nests or severe rodent invasions), we can frequently offer same-day or next-morning priority appointments.'
  },
  {
    category: 'warranty',
    question: 'Are your technicians licensed and insured in Victoria?',
    answer: 'Yes. Every Legend Pest Control technician holds a current Victorian Department of Health Pest Control Licence and is fully insured with $20 Million Public Liability insurance. All treatments strictly comply with Australian Standards AS 3660 (Termites) and AS 4349.3 (Timber Inspections).'
  }
];

export const COMPANY_DETAILS = {
  name: 'Legend Pest Control Melbourne',
  owner: 'Sahithi',
  tagline: 'Pest Control in Geelong & Melbourne\'s West',
  phone: '1800 623 252',
  phoneDisplay: '1800 623 252',
  email: 'info@legendpestcontrolmelbourne.com.au',
  abn: '74 819 203 114',
  licence: 'Vic Dept of Health Lic #L012894',
  insurance: '$20M Public & Products Liability',
  hours: 'Mon – Sun: 7:00 AM – 7:00 PM (24/7 Emergency Line)',
  address: 'Servicing Greater Melbourne West, Geelong & Bellarine Peninsula',
  baseStartingPrice: 199,
  promoDiscount: 50
};
