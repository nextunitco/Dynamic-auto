export interface VehicleItem {
  id: string;
  title: string;
  category: 'SUV' | 'Sedan' | 'Truck' | 'Facility' | 'All';
  image: string;
  tag?: string;
}

export interface ServiceItem {
  id: string;
  name: string;
  category: 'diagnostics' | 'tyres' | 'mechanical' | 'maintenance';
  summary: string;
  description: string;
  features: string[];
}

export interface ServicePackage {
  id: string;
  name: string;
  badge?: string;
  duration: string;
  recommendedFor: string;
  includes: string[];
}

export const DYNAMIC_AUTO_INFO = {
  name: "Dynamic Auto",
  fullName: "Dynamic Auto & Tyre Centre",
  tagline: "Drive With Confidence",
  logo: "/images/logo/dynamic-auto-logo.png",
  address: "Plot 12, Isolo Expressway, Isolo Industrial Zone, Lagos, Nigeria",
  phone: "+234 803 555 0192",
  phoneDisplay: "+234 803 555 0192",
  whatsapp: "2348035550192",
  email: "service@dynamicautotyre.ng",
  hours: "Mon – Fri: 8:00 AM – 6:00 PM | Sat: 8:30 AM – 5:00 PM",
  sunday: "Closed (Emergency Assistance Only)",
};

// 5-7 Strongest vehicle photographs for the Homepage Hero Slideshow
export const HERO_SLIDES = [
  {
    image: '/images/vehicles/vehicle-13.jpg',
    title: 'Toyota Land Cruiser V8',
    caption: 'Full-Size Luxury & Capability'
  },
  {
    image: '/images/vehicles/vehicle-03.jpg',
    title: 'Toyota Prado TXL',
    caption: 'Built for Rugged Nigerian Roads'
  },
  {
    image: '/images/vehicles/vehicle-04.jpg',
    title: 'Lexus RX 350 Luxury',
    caption: 'Refined Highway Comfort'
  },
  {
    image: '/images/vehicles/vehicle-11.jpg',
    title: 'Lexus GX 460 Premium',
    caption: 'Executive V8 Luxury'
  },
  {
    image: '/images/vehicles/vehicle-08.jpg',
    title: 'Ford Explorer 4WD',
    caption: 'Spacious All-Weather Performance'
  },
  {
    image: '/images/vehicles/vehicle-01.jpg',
    title: 'Precision Workshop Bay',
    caption: 'Certified Diagnostic & Alignment Center'
  }
];

// Inner page background images
export const PAGE_HERO_IMAGES = {
  about: '/images/vehicles/vehicle-01.jpg',
  services: '/images/vehicles/vehicle-02.jpg',
  vehicles: '/images/vehicles/vehicle-13.jpg',
  contact: '/images/vehicles/vehicle-08.jpg'
};

// 14 Client-provided Photographs (excluding the logo)
export const CLIENT_VEHICLES: VehicleItem[] = [
  {
    id: 'vehicle-01',
    title: 'Toyota Prado TXL',
    category: 'SUV',
    image: '/images/vehicles/vehicle-03.jpg',
    tag: 'Featured'
  },
  {
    id: 'vehicle-02',
    title: 'Lexus RX 350 Luxury',
    category: 'SUV',
    image: '/images/vehicles/vehicle-04.jpg',
    tag: 'Featured'
  },
  {
    id: 'vehicle-03',
    title: 'Mercedes-Benz C-Class',
    category: 'Sedan',
    image: '/images/vehicles/vehicle-05.jpg',
    tag: 'Popular'
  },
  {
    id: 'vehicle-04',
    title: 'Toyota Highlander Crossover',
    category: 'SUV',
    image: '/images/vehicles/vehicle-06.jpg',
  },
  {
    id: 'vehicle-05',
    title: 'Toyota Camry XLE',
    category: 'Sedan',
    image: '/images/vehicles/vehicle-07.jpg',
  },
  {
    id: 'vehicle-06',
    title: 'Ford Explorer 4WD',
    category: 'SUV',
    image: '/images/vehicles/vehicle-08.jpg',
  },
  {
    id: 'vehicle-07',
    title: 'Honda Accord Touring',
    category: 'Sedan',
    image: '/images/vehicles/vehicle-09.jpg',
  },
  {
    id: 'vehicle-08',
    title: 'Toyota Corolla Executive',
    category: 'Sedan',
    image: '/images/vehicles/vehicle-10.jpg',
  },
  {
    id: 'vehicle-09',
    title: 'Lexus GX 460 Premium',
    category: 'SUV',
    image: '/images/vehicles/vehicle-11.jpg',
    tag: 'Featured'
  },
  {
    id: 'vehicle-10',
    title: 'Mercedes-Benz E-Class',
    category: 'Sedan',
    image: '/images/vehicles/vehicle-12.jpg',
  },
  {
    id: 'vehicle-11',
    title: 'Toyota Land Cruiser V8',
    category: 'SUV',
    image: '/images/vehicles/vehicle-13.jpg',
    tag: 'Popular'
  },
  {
    id: 'vehicle-12',
    title: 'Toyota Hilux Double Cabin',
    category: 'Truck',
    image: '/images/vehicles/vehicle-14.jpg',
  },
  {
    id: 'vehicle-13',
    title: 'Workshop Alignment Bay',
    category: 'Facility',
    image: '/images/vehicles/vehicle-01.jpg',
    tag: 'Facility'
  },
  {
    id: 'vehicle-14',
    title: 'Touchless Tyre Fitting Station',
    category: 'Facility',
    image: '/images/vehicles/vehicle-02.jpg',
    tag: 'Service Bay'
  },
];

// Authentic Services
export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'diagnostics',
    name: 'Computer Diagnostics',
    category: 'diagnostics',
    summary: 'Electronic scanning of engine, transmission, ABS, and electrical control modules.',
    description: 'Pinpoint warning lights, misfires, and transmission codes using dealer-level diagnostic scanners.',
    features: [
      'Full vehicle electronic health scan',
      'Live ECU sensor readings & error resets',
      'ABS, airbag & powertrain checks'
    ]
  },
  {
    id: 'wheel-alignment',
    name: '3D Laser Wheel Alignment',
    category: 'tyres',
    summary: 'Laser computerized alignment to fix steering pull and uneven tyre wear.',
    description: 'Precision computerized 3D laser alignment corrects toe, camber, and caster angles for straight tracking and extended tyre lifespan.',
    features: [
      'Four-wheel optical laser measurement',
      'Dynamic road-force wheel balancing',
      'Eliminates steering wheel vibration'
    ]
  },
  {
    id: 'brake-service',
    name: 'Brake System Service',
    category: 'mechanical',
    summary: 'Inspection and replacement of brake pads, vented rotors, and fluid flushing.',
    description: 'Ensure dependable stopping power with premium ceramic brake pads, rotor micrometer inspection, and fluid flushes.',
    features: [
      'OEM-spec low-dust ceramic brake pads',
      'Disc rotor micrometer thickness check',
      'DOT4 brake hydraulic fluid flush'
    ]
  },
  {
    id: 'tyre-fitting',
    name: 'Touchless Tyre Mounting',
    category: 'tyres',
    summary: 'Scratch-free pneumatic mounting with pure dry nitrogen inflation.',
    description: 'Automatic leverless tyre changer mounts low-profile and run-flat tyres without scratching alloy rims.',
    features: [
      'Leverless automatic alloy mounting',
      'Pure dry nitrogen gas inflation',
      'TPMS tyre pressure sensor calibration'
    ]
  },
  {
    id: 'suspension-steering',
    name: 'Suspension & Undercarriage',
    category: 'mechanical',
    summary: 'Shock absorbers, control arm bushings, ball joints, and steering racks.',
    description: 'Reinforced suspension service engineered specifically for Lagos road conditions to restore comfort and control.',
    features: [
      'Heavy-duty gas strut replacement',
      'Hydraulic power steering inspection',
      'Tie rods & stabilizer link replacement'
    ]
  },
  {
    id: 'scheduled-maintenance',
    name: 'Routine Oil & Filter Service',
    category: 'maintenance',
    summary: 'Synthetic oil renewal, genuine OEM filters, and multi-point vehicle safety check.',
    description: 'Scheduled maintenance using premium synthetic lubricants and genuine filters to preserve engine life.',
    features: [
      'Full synthetic API-certified engine oil',
      'New OEM oil and engine air filter',
      'Comprehensive vehicle inspection report'
    ]
  }
];

export const SERVICE_PACKAGES: ServicePackage[] = [
  {
    id: 'minor-service',
    name: 'Routine Oil & Filter Service',
    duration: '45 mins',
    recommendedFor: 'Every 5,000 – 7,500 km',
    includes: [
      'Full synthetic API-certified engine oil',
      'Genuine OEM oil filter replacement',
      'Engine air filter inspection',
      'Battery voltage test',
      'Fluid level top-ups',
      'Multi-point visual safety check'
    ]
  },
  {
    id: 'major-service',
    name: 'Comprehensive Major Service',
    badge: 'Popular',
    duration: '2 – 3 hours',
    recommendedFor: 'Every 20,000 – 30,000 km',
    includes: [
      'Everything in Minor Service',
      'Computerized OBD diagnostic scan',
      'Spark plugs inspection',
      'Brake pads & rotor inspection',
      'Throttle body & air intake cleaning',
      'Suspension bushings & ball joints check',
      'Transmission fluid level inspection'
    ]
  },
  {
    id: 'road-trip-inspection',
    name: 'Lagos Road-Trip Safety Check',
    badge: 'Safety First',
    duration: '1 hour',
    recommendedFor: 'Before long interstate journeys or holiday travel',
    includes: [
      '4-wheel laser alignment & balancing check',
      'Tyre tread depth & sidewall inspection',
      'Brake pad wear & hydraulic fluid test',
      'Cooling system pressure test',
      'Suspension, shock absorbers & tie rods',
      'Alternator output & auxiliary belts test'
    ]
  }
];

export const WHY_CHOOSE_US = [
  {
    title: "Quality Guaranteed",
    description: "We use genuine OEM parts, API-certified synthetic lubricants, and calibrated diagnostic computers."
  },
  {
    title: "Professional Service",
    description: "Certified technicians who explain every repair clearly with itemized upfront estimates."
  },
  {
    title: "Customer Focus",
    description: "Clean, air-conditioned waiting lounge, transparent turnaround times, and direct WhatsApp support."
  },
  {
    title: "Reliability",
    description: "Conveniently located along Isolo Expressway, equipped with hydraulic vehicle lifts and modern test bays."
  }
];

export function createWhatsAppVehicleInquiry(vehicleTitle: string): string {
  const text = `Hello Dynamic Auto, I am inquiring about the *${vehicleTitle}* displayed on your website.\n\nPlease provide more details on viewing and specifications.`;
  return `https://wa.me/${DYNAMIC_AUTO_INFO.whatsapp}?text=${encodeURIComponent(text)}`;
}

export function createWhatsAppServiceInquiry(serviceName: string): string {
  const text = `Hello Dynamic Auto, I would like to book or inquire about: *${serviceName}*.\n\nPlease let me know your available slots at Isolo.`;
  return `https://wa.me/${DYNAMIC_AUTO_INFO.whatsapp}?text=${encodeURIComponent(text)}`;
}
