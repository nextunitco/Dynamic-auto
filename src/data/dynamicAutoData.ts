export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  shortDesc: string;
  fullDesc: string;
  highlights: string[];
  recommendedInterval?: string;
  iconName: string;
  isPopular?: boolean;
}

export interface PromoOffer {
  id: string;
  title: string;
  description: string;
  code?: string;
  listingsCount: number;
  tag: string;
  badge?: string;
}

export interface TyreBrand {
  name: string;
  tagline: string;
  description: string;
  category: string;
  country?: string;
}

export interface PartnerClient {
  name: string;
  type: string;
  description: string;
}

export const DYNAMIC_AUTO_INFO = {
  name: "Dynamic Auto & Tyre Centre",
  shortName: "Dynamic Auto",
  domain: "dynamicauto.com.ng",
  tagline: "No. 1 Automotive & Tyres Centre",
  heroSubtitle: "Save on tyres with Dynamicauto.com.ng new offers.",
  address: "Oyemat House, 45 Alhaja Kudirat Adenekan Road, Isolo, Lagos, Nigeria",
  phonePrimary: "+234 912 698 3699",
  phonePrimaryRaw: "+2349126983699",
  phoneSecondary: "+234 703 411 3411",
  whatsappNumber: "+2349126983699",
  whatsappDisplay: "0912 698 3699",
  emailPrimary: "info@dynamicauto.com.ng",
  emailSecondary: "Info@dynamic.com.ng",
  workingHours: "Monday – Saturday: 8:00 AM – 6:00 PM (Closed on Sunday)",
  mapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.8507445278024!2d3.3146987733285482!3d6.540524922968716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8f322824f7d7%3A0xafdf4af4a84d5cce!2sOyemat%20House!5e0!3m2!1sen!2sng!4v1764241903080!5m2!1sen!2sng",
  socials: {
    facebook: "https://www.facebook.com/share/17UvjpgQCt/",
    instagram: "https://www.instagram.com/dynamic_tyres.ng?igsh=c3BvM20zMzg2YnNq"
  },
  guaranteeText: "All our new tyres come with a lifetime mileage guarantee, giving you peace of mind and protection against manufacturing defects for the legal life of the tyre."
};

export const BOOKING_CATEGORIES = [
  "Tyre",
  "Tyre fitting",
  "MOT Road Worthiness Test",
  "Service",
  "Air-con",
  "Batteries",
  "Brakes",
  "Car Mats",
  "Exhaust",
  "Road Hero Spare Wheel",
  "Vehicle Safety Check",
  "Wheel Alignment",
  "Windscreen Wiper"
] as const;

export const PROMO_OFFERS: PromoOffer[] = [
  {
    id: "promo-tyres-10",
    title: "10% off 4 Selected Tyres",
    description: "Equip your vehicle with premium rubber and save 10% when buying a complete set of 4 selected tyres.",
    code: "DYNAMIC26",
    listingsCount: 18,
    tag: "Tyre Special",
    badge: "Most Popular"
  },
  {
    id: "promo-arrows-giti",
    title: "10% off 4 Arrowspeed & Giti Tyres",
    description: "Exceptional value and everyday road durability across our extensive Arrowspeed and Giti inventory.",
    code: "DYNAMIC26",
    listingsCount: 55,
    tag: "Brand Deal"
  },
  {
    id: "promo-servicing-15",
    title: "15% Off Servicing",
    description: "Full or interim vehicle servicing with high-quality OEM equivalent parts. Combine with MOT test for extra savings.",
    code: "DYNAMIC26",
    listingsCount: 66,
    tag: "Workshop Care",
    badge: "Best Value"
  },
  {
    id: "promo-wipers-10",
    title: "10% Off Wiper Blades",
    description: "Ensure crystal-clear visibility during rainy weather with precision OEM-grade replacement wiper blades.",
    code: "DYNAMIC26",
    listingsCount: 82,
    tag: "Safety Essential"
  },
  {
    id: "promo-aircon-40",
    title: "40% Off Air Con Regas & Service",
    description: "Stay cool and breathe clean air with 40% off complete air conditioning recharge, leak test, and sanitation.",
    code: "DYNAMIC26",
    listingsCount: 76,
    tag: "Climate Comfort"
  },
  {
    id: "promo-free-fitting",
    title: "Free Fitting - When You Buy 2 Tyres Online",
    description: "Complimentary professional tyre fitting and balance when you order 2 or more tyres online.",
    code: "DYNAMIC26",
    listingsCount: 36,
    tag: "Online Exclusive"
  },
  {
    id: "promo-deals-more",
    title: "Great Deals on Tyres, Batteries and More!",
    description: "Explore our rotating warehouse seasonal specials on heavy-duty car batteries, alloy wheels, and brake pads.",
    code: "DYNAMIC26",
    listingsCount: 76,
    tag: "Seasonal Package"
  }
];

export const TYRE_BRANDS: TyreBrand[] = [
  {
    name: "Pirelli",
    tagline: "Power Is Nothing Without Control",
    description: "Leading brand in high-performance and luxury tyres trusted worldwide.",
    category: "Ultra High Performance & Luxury"
  },
  {
    name: "Goodyear",
    tagline: "Engineered for Confidence",
    description: "Innovative tyre technology and durable performance for all vehicles.",
    category: "Innovation & All-Weather"
  },
  {
    name: "Michelin",
    tagline: "Motion for Life",
    description: "Premium tires known for safety, longevity, and eco-friendly innovation.",
    category: "Premium Safety & Longevity"
  },
  {
    name: "Continental",
    tagline: "The Future in Motion",
    description: "Trusted brand for safety-focused tire solutions and automotive technology.",
    category: "Safety-Focused & OEM"
  },
  {
    name: "Bridgestone",
    tagline: "Solutions for Your Journey",
    description: "Global leader combining advanced technology and durability in tires.",
    category: "Durability & Advanced Engineering"
  }
];

export const SERVICES_CATALOG: ServiceItem[] = [
  {
    id: "tyres-wheels",
    title: "Tyres & Wheel Services",
    category: "Tyres & Wheels",
    shortDesc: "One of the widest selections of tyres catering to every vehicle type and budget, backed by large distributors.",
    fullDesc: "At Dynamic Auto & Tyre Centre, we offer one of the widest selections of tyres, catering to every type of vehicle and every budget. Backed by the world's largest tyre distributor, we stock tyres for virtually all makes and models — from cars, vans, and SUVs to electric and hybrid vehicles. All our new tyres come with a lifetime mileage guarantee.",
    highlights: [
      "Run-flat and reinforced tyres for extra load capacity",
      "Tyres for electric, hybrid, 4x4, and commercial vehicles",
      "Lifetime mileage guarantee on all new tyres",
      "Exclusive online prices for great value",
      "Express and mobile tyre fitting for your convenience"
    ],
    iconName: "Disc",
    isPopular: true
  },
  {
    id: "wheel-balancing",
    title: "Precision Wheel Balancing",
    category: "Tyres & Wheels",
    shortDesc: "Eliminate steering vibration and extend tread life with computerized dynamic wheel balancing.",
    fullDesc: "Properly balanced wheels prevent premature tyre wear, steering wheel shake, and unnecessary wear on your vehicle's suspension and steering components. Our computerized balancers ensure uniform weight distribution across each rim.",
    highlights: [
      "State-of-the-art dynamic wheel balancing machinery",
      "Smooth ride with zero steering vibration at motorway speeds",
      "Even tread wear protection to maximize tire longevity",
      "Fast turnaround during tire replacement"
    ],
    iconName: "RotateCcw"
  },
  {
    id: "wheel-alignment",
    title: "Computerized Wheel Alignment",
    category: "Tyres & Wheels",
    shortDesc: "Accurate multi-camera alignment ensuring true tracking, fuel efficiency, and road safety.",
    fullDesc: "Potholes and rough road surfaces can easily throw your vehicle's steering geometry out of alignment. Dynamic Auto & Tyre Centre uses laser and optical calibration equipment to restore camber, caster, and toe angles to factory specifications.",
    highlights: [
      "Restores factory geometric tolerances",
      "Prevents uneven inner/outer edge tyre feathering",
      "Improves directional stability and fuel economy",
      "Thorough suspension and steering linkage inspection"
    ],
    iconName: "Sliders"
  },
  {
    id: "vehicle-repairs",
    title: "Vehicle Repairs & Maintenance",
    category: "Vehicle Services",
    shortDesc: "Proactive vehicle servicing by highly trained technicians using parts equivalent to OEM standard.",
    fullDesc: "At Dynamic Auto & Tyre Centre, we're experts in motor vehicle servicing, offering flexible options to keep your car in top condition. Book your Interim or Full Service online today, or choose an Engine Oil and Filter Change if your next service isn't due yet. Combine your MOT Roadworthiness Test with any service booking and enjoy extra savings compared to individual prices.",
    highlights: [
      "Parts equivalent to manufacturer's original equipment",
      "Cost-effective alternative to dealership servicing — why pay more?",
      "Support for cars, vans, electric vehicles, and hybrid vehicles",
      "Engine oil and filter change with premium spec lubricants"
    ],
    iconName: "Wrench",
    isPopular: true
  },
  {
    id: "mot-roadworthiness",
    title: "MOT Road Worthiness Test",
    category: "MOT & Safety",
    shortDesc: "Book your official MOT Road Worthiness inspection and verify your vehicle's validity date online.",
    fullDesc: "You can book your MOT Road Worthiness Test and Service online, saving you both time and money. Choose from our range of flexible service packages designed to match your driving style and vehicle needs. You can also check the validity of your vehicle MOT and its next due date with our workshop specialists.",
    highlights: [
      "Comprehensive roadworthiness certification inspection",
      "Detailed health report with clear pass/advisory points",
      "Save time and money with packaged service combos",
      "Full compliance with safety and emissions guidelines"
    ],
    iconName: "ShieldCheck",
    isPopular: true
  },
  {
    id: "battery-services",
    title: "Car Battery Services & Health Checks",
    category: "Electrical & Battery",
    shortDesc: "Free battery health checks, supply of leading brand units, professional fitting, and safe disposal.",
    fullDesc: "If you need a replacement, we offer a complete car battery service, including supply, fitting, and safe disposal of your old unit. Flat batteries are one of the most common causes of breakdowns. Don't wait until your car won't start, visit Dynamic Auto & Tyre Centre for a free battery health check and drive with confidence.",
    highlights: [
      "Free cranking amperage & alternator charging rate test",
      "Heavy-duty batteries for modern start-stop and high-drain systems",
      "Safe and eco-friendly disposal of decommissioned batteries",
      "Clean terminal preparation and corrosion protection"
    ],
    iconName: "Zap",
    isPopular: true
  },
  {
    id: "brake-services",
    title: "Car Brake Services",
    category: "Brake Services",
    shortDesc: "Inspection, servicing, and replacement of brake pads, discs, calipers, and hydraulic systems.",
    fullDesc: "Your brakes are your car's most critical safety system. Our trained technicians conduct comprehensive visual and electronic inspections of pads, vented rotors, drum shoes, and hydraulic lines, replacing worn components with premium safety-certified parts.",
    highlights: [
      "Brake pad wear and rotor thickness measurement",
      "Brake fluid moisture content and boiling point testing",
      "ABS sensor inspection and fault diagnosis",
      "Smooth, quiet stopping power with premium low-dust friction pads"
    ],
    iconName: "AlertTriangle"
  },
  {
    id: "ford-diagnostics",
    title: "Specialized Ford Diagnostics & Repairs",
    category: "Specialized Diagnostics",
    shortDesc: "Factory-level diagnostic scanners and certified technician expertise for all Ford and modern vehicle platforms.",
    fullDesc: "Dynamic Auto & Tyre Centre specializes in professional Ford diagnostics and repairs using advanced OBD diagnostic interfaces, module reprogramming tools, and dedicated workshop procedures. We troubleshoot complex engine management, transmission, and electrical faults with dealership accuracy.",
    highlights: [
      "Dedicated Ford IDS/FDRS diagnostic protocol capabilities",
      "PCM, TCM, and ABS module troubleshooting & reprogramming",
      "Rapid turnaround for institutional and individual Ford owners",
      "Expertise across EcoBoost, Duratec, and diesel drivetrains"
    ],
    iconName: "Cpu"
  },
  {
    id: "driver-training-recovery",
    title: "Driver Training & Roadside Recovery",
    category: "MOT & Safety",
    shortDesc: "Corporate fleet driver training programs and prompt roadside assistance for unexpected vehicle breakdowns.",
    fullDesc: "We support corporate fleets and everyday motorists with professional defensive driver safety orientation and rapid response roadside recovery assistance across the Lagos metropolis.",
    highlights: [
      "Fleet safety and defensive driving modules",
      "Breakdown assistance and towing coordination in Lagos",
      "Tyre puncture recovery and mobile fitting dispatch",
      "Preventive maintenance checklists for commercial drivers"
    ],
    iconName: "Truck"
  }
];

export const SERVICING_INTERVALS_DATA = [
  {
    type: "Interim Service",
    interval: "Every 6 months or 6,000 miles (whichever comes first)",
    purpose: "Designed for high-mileage drivers or vehicles operating frequently in urban stop-and-go traffic.",
    keyChecks: [
      "Engine oil and filter renewal",
      "Brake fluid level and condition inspection",
      "Tyre tread depth and pressure calibration",
      "Steering, suspension, and exhaust inspection",
      "Screenwash, coolant, and power steering top-up",
      "Battery health and alternator output check"
    ]
  },
  {
    type: "Full Service",
    interval: "Every 12 months or 12,000 miles (whichever comes first)",
    purpose: "Comprehensive annual maintenance program preserving vehicle resale value and mechanical safety.",
    keyChecks: [
      "All Interim Service checklist items included",
      "Air filter and cabin pollen filter replacement",
      "Comprehensive brake disassembly, clean, and pad inspection",
      "Underbody corrosion and linkage review",
      "Spark plugs inspection / replacement (petrol engines)",
      "Diagnostic system scan for stored ECU trouble codes"
    ]
  },
  {
    type: "Manufacturer Service",
    interval: "According to manufacturer's service schedule",
    purpose: "Strictly adheres to official brand maintenance schedules to maintain warranty and peak engineering parameters.",
    keyChecks: [
      "Adherence to manufacturer mileage & age specific guidelines",
      "OEM or manufacturer-certified equivalent replacement components",
      "Specialist fluid changes (gearbox fluid, differential oil, coolant)",
      "Timing belt / accessory belt interval checks",
      "Service book stamp and digital service record validation"
    ]
  }
];

export const CORPORATE_PARTNERS: PartnerClient[] = [
  {
    name: "Guaranty Trust Bank (GTBank)",
    type: "Financial Institution",
    description: "Corporate fleet vehicle maintenance and tyre supply."
  },
  {
    name: "Zenith Bank",
    type: "Financial Institution",
    description: "Executive and operational fleet service partnership."
  },
  {
    name: "First Bank of Nigeria",
    type: "Commercial Banking",
    description: "Automotive tyre management and scheduled servicing."
  },
  {
    name: "First City Monument Bank (FCMB)",
    type: "Banking & Financial Services",
    description: "Reliable fleet roadworthiness and tyre solutions."
  },
  {
    name: "CHI Limited",
    type: "Fast-Moving Consumer Goods (FMCG)",
    description: "Logistics and distribution vehicle maintenance."
  },
  {
    name: "Grooming Centre",
    type: "Microfinance NGO",
    description: "Institutional mobility support and battery care."
  },
  {
    name: "Ibile Holdings",
    type: "State Investment Corporation",
    description: "Institutional transport fleet servicing partner."
  },
  {
    name: "Bosch Automotive Partner",
    type: "Global Automotive Technology",
    description: "Authorized technical diagnostics and parts equipment partner."
  }
];

export const FAQS = [
  {
    question: "What is Dynamic Auto's Lifetime Mileage Guarantee on tyres?",
    answer: "All new tyres purchased from Dynamic Auto & Tyre Centre come with a lifetime mileage guarantee. This provides you with complete peace of mind and protection against manufacturing defects for the legal life of the tyre. If any fault arises, the tyre will be returned to the manufacturer for inspection, and you will receive a refund based on the remaining tread if a defect is confirmed."
  },
  {
    question: "Where is the Dynamic Auto & Tyre Centre workshop located?",
    answer: "Our central automotive facility is located at Oyemat House, 45 Alhaja Kudirat Adenekan Road, Isolo, Lagos, Nigeria. We are easily accessible from Airport Road and Oshodi-Isolo expressway."
  },
  {
    question: "How do I book an MOT Roadworthiness Test or vehicle service?",
    answer: "You can book directly using our website's booking form, call us at +234 912 698 3699 / +234 703 411 3411, or message us on WhatsApp. We provide instant booking confirmations and flexible scheduling to fit your routine."
  },
  {
    question: "How often should I service my car?",
    answer: "As a general guideline, your vehicle should receive an Interim Service every 6 months or 6,000 miles, and a Full Service every 12 months or 12,000 miles — whichever comes first. We also offer Engine Oil and Filter Changes and Manufacturer Servicing aligned with your car's exact handbook schedule."
  },
  {
    question: "Why should I choose Dynamic Auto instead of a main dealership?",
    answer: "Our highly trained technicians use high-quality parts equivalent to the manufacturer's original equipment, backed by computerized diagnostics tools (including specialized Ford systems). We provide the exact same dealer-grade standard and warranty protection at significantly more affordable and transparent pricing."
  },
  {
    question: "Do you offer free battery health tests?",
    answer: "Yes! Don't wait until your car won't start. Simply drive into our Isolo workshop for a complimentary battery test. We check your battery's cranking amperage and alternator charging system, providing immediate advice on whether charging or replacement is needed."
  },
  {
    question: "Do you service commercial fleets and institutional vehicles?",
    answer: "Yes. Dynamic Auto & Tyre Centre is built to support corporate fleet and institutional clients including major banks (GTBank, Zenith, FirstBank, FCMB) and corporations. We offer structured fleet maintenance plans, priority bay turnaround, and itemized invoicing."
  }
];
