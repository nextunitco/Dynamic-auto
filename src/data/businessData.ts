export interface ServiceItem {
  id: string;
  name: string;
  category: 'diagnostics' | 'tyres' | 'mechanical' | 'maintenance';
  summary: string;
  description: string;
  image: string;
  features: string[];
  estimatedDuration: string;
  estimatedPriceNgn: number;
}

export interface TyreProduct {
  id: string;
  brand: 'Michelin' | 'Pirelli' | 'Bridgestone' | 'Continental' | 'Dunlop' | 'Goodyear';
  model: string;
  size: string;
  width: number;
  aspectRatio: number;
  rim: number;
  type: 'All-Terrain' | 'Highway Luxury' | 'Performance Sport' | 'Touring';
  priceNgn: number;
  speedRating: string;
  loadIndex: string;
  warranty: string;
  inStock: boolean;
}

export const DYNAMIC_AUTO_INFO = {
  name: "Dynamic Auto & Tyre Centre",
  shortName: "Dynamic Auto",
  tagline: "Professional Auto Maintenance & Genuine Tyres",
  address: "Plot 12, Isolo Expressway, Isolo Industrial Zone, Lagos, Nigeria",
  phone: "+234 803 555 0192",
  phoneDisplay: "+234 803 555 0192",
  whatsapp: "2348035550192",
  email: "service@dynamicautotyre.ng",
  hours: "Mon – Fri: 8:00 AM – 6:00 PM | Sat: 8:30 AM – 5:00 PM",
  boschCertified: true
};

export const REAL_IMAGES = {
  workshopBay: "/images/workshop_main.jpg",
  mechanicsTeam: "/images/mechanics_tyre.jpg",
};

export interface ServicePackage {
  id: string;
  name: string;
  badge?: string;
  priceNgn: number;
  duration: string;
  recommendedFor: string;
  includes: string[];
}

export const SERVICE_PACKAGES: ServicePackage[] = [
  {
    id: 'minor-service',
    name: 'Routine Oil & Filter Service',
    priceNgn: 45000,
    duration: '45 mins',
    recommendedFor: 'Every 5,000 – 7,500 km',
    includes: [
      'Full synthetic API-certified engine oil',
      'Genuine OEM oil filter replacement',
      'Engine air filter inspection & blow-out',
      'Battery voltage & charging system test',
      'Fluid top-up (coolant, washer, brake fluid)',
      '15-point visual safety check'
    ]
  },
  {
    id: 'major-service',
    name: 'Comprehensive Major Service',
    badge: 'Most Popular',
    priceNgn: 95000,
    duration: '2 – 3 hours',
    recommendedFor: 'Every 20,000 – 30,000 km',
    includes: [
      'Everything in Minor Service',
      'Full computerized OBD diagnostic scan',
      'Spark plugs inspection / replacement check',
      'Brake pads & rotor micrometer inspection',
      'Throttle body & air intake cleaning',
      'Suspension bushings & ball joints inspection',
      'Transmission & differential fluid level check',
      '40-point full vehicle health report'
    ]
  },
  {
    id: 'road-trip-inspection',
    name: 'Lagos Road-Trip Safety Check',
    badge: 'Peace of Mind',
    priceNgn: 30000,
    duration: '1 hour',
    recommendedFor: 'Before long interstate journeys or holiday travel',
    includes: [
      '4-wheel laser alignment & balancing check',
      'Tyre tread depth & sidewall integrity check',
      'Brake pad wear & hydraulic fluid test',
      'Cooling system pressure & hose check',
      'Suspension, shock absorbers & tie rods',
      'Alternator output & auxiliary belts test',
      'Full wiper & exterior lighting check'
    ]
  }
];

export const WORKSHOP_EQUIPMENT = [
  {
    name: "Computerized 3D Laser Alignment Bay",
    category: "Chassis & Steering",
    description: "High-precision digital laser sensors measure toe, camber, and caster down to fractions of a degree. Corrects steering pull, promotes straight tracking, and stops uneven tyre wear.",
    image: REAL_IMAGES.workshopBay,
    keyBenefit: "Prevents premature tyre wear & reduces fuel consumption"
  },
  {
    name: "Leverless Touchless Tyre Mounting Station",
    category: "Wheel & Tyre Service",
    description: "Automatic pneumatic tyre changer engineered specifically for high-end alloy rims, low-profile performance tyres, and heavy SUV rubber without scratching or lever damage.",
    image: REAL_IMAGES.mechanicsTeam,
    keyBenefit: "Zero scratch guarantee on polished & alloy wheels"
  },
  {
    name: "Bi-Directional OBD Diagnostic Scanners",
    category: "Electrical & Powertrain",
    description: "Professional dealer-grade diagnostic computers capable of reading live sensor data, resetting error codes, and executing active actuator tests across European, Japanese, and American vehicles.",
    image: REAL_IMAGES.workshopBay,
    keyBenefit: "Accurate fault detection without roadside guesswork"
  },
  {
    name: "Dynamic Road-Force Wheel Balancer",
    category: "Ride Comfort & Stability",
    description: "Detects both weight imbalance and radial force variation to eliminate highway vibration, steering wheel shake, and cabin droning at speeds above 80 km/h.",
    image: REAL_IMAGES.mechanicsTeam,
    keyBenefit: "Glass-smooth ride on the highway"
  }
];

export const TESTIMONIALS = [
  {
    quote: "Finding an auto workshop in Lagos that doesn't guess faults is rare. Their diagnostic scan pinpointed a sensor fault my previous mechanic couldn't solve in 3 months. Transparent pricing too.",
    author: "Engr. Tunde Adeleke",
    vehicle: "Toyota Prado TXL 2021",
    location: "Ajao Estate, Lagos",
    rating: 5
  },
  {
    quote: "Bought four Continental tyres here. The touchless mounting was smooth and they balanced all wheels with zero rim scratch. My car drives straight without any vibration.",
    author: "Mrs. Chioma Okonkwo",
    vehicle: "Lexus RX 350",
    location: "Festac Town, Lagos",
    rating: 5
  },
  {
    quote: "Professionalism at its best. They gave me an itemized quote before touching my Mercedes, finished on time, and showed me the old parts they replaced. Highly recommended.",
    author: "Babatunde Fashina",
    vehicle: "Mercedes-Benz C300",
    location: "Ikeja GRA, Lagos",
    rating: 5
  }
];

export const WORKSHOP_FAQS = [
  {
    question: "Do I need to book an appointment before bringing my car?",
    answer: "While we welcome walk-ins for quick tyre fittings, puncture repairs, and emergency diagnostics, booking online or via WhatsApp guarantees immediate workshop bay reservation with zero waiting time."
  },
  {
    question: "Are your tyres 100% genuine and fresh date-coded?",
    answer: "Yes, 100%. We source directly from authorized Nigerian distributors of Michelin, Pirelli, Bridgestone, Continental, Dunlop, and Goodyear. Every tyre features verifiable DOT manufacturing codes from the current or previous year."
  },
  {
    question: "What is included in the free tyre fitting package?",
    answer: "Every tyre purchased from Dynamic Auto includes complimentary touchless mounting, dynamic computerized wheel balancing, brand new tubeless rubber valves, and nitrogen inflation."
  },
  {
    question: "Can your technicians service German and luxury vehicles?",
    answer: "Yes. Our senior technicians are trained on Mercedes-Benz, BMW, Audi, Land Rover, and Lexus platforms using dealer-grade diagnostic software and OEM-specified synthetic oils."
  },
  {
    question: "Do you offer emergency roadside assistance?",
    answer: "We provide mobile tyre change, battery jumpstart, and flat-bed towing assistance within the Isolo, Oshodi, Ajao Estate, Festac, and Airport Road axis during our operational hours."
  }
];

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'diagnostics',
    name: 'Computer Diagnostics',
    category: 'diagnostics',
    summary: 'Electronic scan of engine, transmission, ABS, and electrical control modules.',
    description: 'Pinpoint dashboard warning lights, engine misfires, and transmission codes using dealer-level OBD diagnostic scanners.',
    image: REAL_IMAGES.workshopBay,
    features: [
      'Full vehicle health computer scan',
      'Live ECU sensor readings & error resets',
      'ABS, airbag & powertrain checks'
    ],
    estimatedDuration: '45 mins',
    estimatedPriceNgn: 25000
  },
  {
    id: 'wheel-alignment',
    name: '3D Wheel Alignment & Balancing',
    category: 'tyres',
    summary: 'Laser computerized alignment to fix steering pull and uneven tyre wear.',
    description: 'Precision computerized 3D laser alignment corrects toe, camber, and caster angles for straight tracking and extended tyre lifespan.',
    image: REAL_IMAGES.mechanicsTeam,
    features: [
      'Four-wheel optical laser measurement',
      'High-speed dynamic road-force wheel balancing',
      'Eliminates steering wheel vibration'
    ],
    estimatedDuration: '40 mins',
    estimatedPriceNgn: 18000
  },
  {
    id: 'brake-overhaul',
    name: 'Brake System Service',
    category: 'mechanical',
    summary: 'Inspection and replacement of brake pads, vented rotors, and fluid flushing.',
    description: 'Ensure dependable stopping power with premium ceramic brake pads, rotor resurfacing, and high-temperature brake fluid flushes.',
    image: REAL_IMAGES.workshopBay,
    features: [
      'OEM-spec low-dust ceramic brake pads',
      'Disc rotor micrometer thickness check',
      'DOT4 brake hydraulic fluid flush'
    ],
    estimatedDuration: '1 hour',
    estimatedPriceNgn: 35000
  },
  {
    id: 'tyre-fitting',
    name: 'Touchless Tyre Fitting & Nitrogen',
    category: 'tyres',
    summary: 'Scratch-free pneumatic mounting with pure dry nitrogen inflation.',
    description: 'Our automatic tyre changing machine securely mounts run-flat and low-profile tyres without scratching delicate alloy rims.',
    image: REAL_IMAGES.mechanicsTeam,
    features: [
      'Leverless automatic alloy mounting',
      'Pure dry nitrogen gas inflation',
      'TPMS tyre pressure sensor calibration'
    ],
    estimatedDuration: '30 mins',
    estimatedPriceNgn: 12000
  },
  {
    id: 'suspension-steering',
    name: 'Suspension & Undercarriage',
    category: 'mechanical',
    summary: 'Shock absorbers, control arm bushings, ball joints, and steering racks.',
    description: 'Tough, reinforced suspension repairs engineered specifically for Lagos road conditions to restore comfort and control.',
    image: REAL_IMAGES.workshopBay,
    features: [
      'Heavy-duty gas strut replacement',
      'Hydraulic power steering inspection',
      'Tie rods & stabilizer link replacement'
    ],
    estimatedDuration: '2 hours',
    estimatedPriceNgn: 45000
  },
  {
    id: 'scheduled-maintenance',
    name: 'Oil Change & Full Service',
    category: 'maintenance',
    summary: 'Full synthetic oil renewal, genuine OEM filters, and 40-point safety check.',
    description: 'Complete scheduled maintenance using premium synthetic lubricants (Mobil 1, Liqui Moly, Shell) with genuine filters.',
    image: REAL_IMAGES.workshopBay,
    features: [
      'Full synthetic API-certified engine oil',
      'New OEM oil and engine air filter',
      '40-point vehicle safety inspection report'
    ],
    estimatedDuration: '45 mins',
    estimatedPriceNgn: 48000
  }
];

export const TYRES_CATALOG: TyreProduct[] = [
  {
    id: 'michelin-pilot-sport',
    brand: 'Michelin',
    model: 'Pilot Sport 4',
    size: '225/45 R17',
    width: 225,
    aspectRatio: 45,
    rim: 17,
    type: 'Performance Sport',
    priceNgn: 165000,
    speedRating: 'Y (300 km/h)',
    loadIndex: '94 XL',
    warranty: '50,000 km Warranty',
    inStock: true
  },
  {
    id: 'michelin-primacy',
    brand: 'Michelin',
    model: 'Primacy 4 ST',
    size: '215/55 R16',
    width: 215,
    aspectRatio: 55,
    rim: 16,
    type: 'Highway Luxury',
    priceNgn: 135000,
    speedRating: 'V (240 km/h)',
    loadIndex: '97 W',
    warranty: '60,000 km Warranty',
    inStock: true
  },
  {
    id: 'pirelli-scorpion',
    brand: 'Pirelli',
    model: 'Scorpion All-Terrain Plus',
    size: '265/65 R17',
    width: 265,
    aspectRatio: 65,
    rim: 17,
    type: 'All-Terrain',
    priceNgn: 210000,
    speedRating: 'T (190 km/h)',
    loadIndex: '112 T',
    warranty: '55,000 km Warranty',
    inStock: true
  },
  {
    id: 'bridgestone-dueler',
    brand: 'Bridgestone',
    model: 'Dueler A/T 001',
    size: '265/70 R16',
    width: 265,
    aspectRatio: 70,
    rim: 16,
    type: 'All-Terrain',
    priceNgn: 185000,
    speedRating: 'S (180 km/h)',
    loadIndex: '115 S',
    warranty: '50,000 km Warranty',
    inStock: true
  },
  {
    id: 'bridgestone-turanza',
    brand: 'Bridgestone',
    model: 'Turanza T005',
    size: '205/55 R16',
    width: 205,
    aspectRatio: 55,
    rim: 16,
    type: 'Touring',
    priceNgn: 115000,
    speedRating: 'V (240 km/h)',
    loadIndex: '91 V',
    warranty: '50,000 km Warranty',
    inStock: true
  },
  {
    id: 'continental-crosscontact',
    brand: 'Continental',
    model: 'CrossContact LX Sport',
    size: '235/60 R18',
    width: 235,
    aspectRatio: 60,
    rim: 18,
    type: 'Highway Luxury',
    priceNgn: 175000,
    speedRating: 'V (240 km/h)',
    loadIndex: '107 V',
    warranty: '55,000 km Warranty',
    inStock: true
  },
  {
    id: 'dunlop-grandtrek',
    brand: 'Dunlop',
    model: 'Grandtrek AT5 Heavy Duty',
    size: '275/65 R18',
    width: 275,
    aspectRatio: 65,
    rim: 18,
    type: 'All-Terrain',
    priceNgn: 195000,
    speedRating: 'H (210 km/h)',
    loadIndex: '116 H',
    warranty: '60,000 km Warranty',
    inStock: true
  },
  {
    id: 'goodyear-efficientgrip',
    brand: 'Goodyear',
    model: 'EfficientGrip Performance',
    size: '195/65 R15',
    width: 195,
    aspectRatio: 65,
    rim: 15,
    type: 'Touring',
    priceNgn: 92000,
    speedRating: 'H (210 km/h)',
    loadIndex: '91 H',
    warranty: '65,000 km Warranty',
    inStock: true
  }
];

export function formatNgn(amount: number): string {
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    maximumFractionDigits: 0
  }).format(amount);
}

export function createWhatsAppBookingLink(serviceName: string, vehicleModel?: string, notes?: string): string {
  let text = `Hello Dynamic Auto & Tyre Centre, I would like to book: *${serviceName}*.`;
  if (vehicleModel) text += `\nVehicle: ${vehicleModel}`;
  if (notes) text += `\nNotes: ${notes}`;
  text += `\nPlease let me know available slots at your Isolo workshop.`;
  return `https://wa.me/${DYNAMIC_AUTO_INFO.whatsapp}?text=${encodeURIComponent(text)}`;
}

export function createWhatsAppTyreInquiry(tyre: TyreProduct, quantity = 4): string {
  const total = tyre.priceNgn * quantity;
  const text = `Hello Dynamic Auto & Tyre Centre, I am inquiring about:\n- Tyre: *${tyre.brand} ${tyre.model}* (${tyre.size})\n- Quantity: ${quantity}\n- Total: ${formatNgn(total)}\n\nIs this size currently available in stock?`;
  return `https://wa.me/${DYNAMIC_AUTO_INFO.whatsapp}?text=${encodeURIComponent(text)}`;
}
