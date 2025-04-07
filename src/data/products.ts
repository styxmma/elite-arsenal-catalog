
export interface Product {
  id: string;
  name: string;
  brand: string;
  category: string;
  subcategory: string;
  description: string;
  details: string[];
  specifications: {
    [key: string]: string | number | boolean;
  };
  image: string;
  gallery?: string[];
  price: number;
  featured?: boolean;
  new?: boolean;
}

export const categories = [
  {
    id: "firearms",
    name: "Firearms",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    count: 6,
  },
  {
    id: "ammunition",
    name: "Ammunition",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    count: 4,
  },
  {
    id: "accessories",
    name: "Accessories",
    image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    count: 2,
  },
  {
    id: "gear",
    name: "Tactical Gear",
    image: "https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    count: 3,
  },
];

export const products: Product[] = [
  {
    id: "win-556-m193",
    name: "USA 5.56x45mm NATO 55gr M193 FMJ",
    brand: "Winchester",
    category: "ammunition",
    subcategory: "rifle",
    description: "Winchester USA 5.56x45mm NATO 55 grain Ball (M193) Full Metal Jacket ammunition delivers consistent performance for target shooting and training.",
    details: [
      "Military-grade M193 ball ammunition",
      "Full metal jacket design for reliable feeding",
      "Brass case for reliable extraction",
      "Boxer primer for consistent ignition",
      "Non-corrosive primers and propellants"
    ],
    specifications: {
      "Manufacturer": "Winchester",
      "Cartridge": "5.56x45mm NATO",
      "Bullet Type": "Full Metal Jacket (FMJ)",
      "Bullet Weight": "55 grain",
      "Cartridge Case Material": "Brass",
      "Muzzle Velocity": "3180 ft/s",
      "Muzzle Energy": "1235 ft-lbs",
      "Application": "Recreational Shooting, Target",
      "Package Type": "Box",
      "Primer Style": "Centerfire",
      "G1 Ballistic Coefficient": 0.246,
      "Lead Free": false
    },
    image: "https://images.unsplash.com/photo-1595590424283-b8f526a2f2b1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    price: 12.99,
    featured: true
  },
  {
    id: "sig-p320",
    name: "P320 M17 9mm Pistol",
    brand: "Sig Sauer",
    category: "firearms",
    subcategory: "handguns",
    description: "The P320 M17 is a 9mm, striker-fired pistol with a coyote-tan PVD coated stainless steel slide and polymer grip module. The P320 M17 features a SIGLITE front night sight and removable night sight rear plate.",
    details: [
      "U.S. Army's official service pistol",
      "Modular design allows for grip frame changes",
      "Striker-fired operating system",
      "No trigger pull required for disassembly",
      "3-point takedown safety system"
    ],
    specifications: {
      "Caliber": "9mm Luger",
      "Action Type": "Semi-Auto",
      "Frame Size": "Full",
      "Frame Material": "Polymer",
      "Slide Material": "Stainless Steel",
      "Slide Finish": "Coyote PVD",
      "Barrel Length": "4.7 in (119 mm)",
      "Overall Length": "8.0 in (203 mm)",
      "Overall Width": "1.3 in (33 mm)",
      "Height": "5.5 in (140 mm)",
      "Weight": "29.6 oz (839 g)",
      "Capacity": 17,
      "Sights": "SIGLITE Front, Night Sight Rear Plate",
      "Safety Features": "Striker Safety, Disconnect Safety"
    },
    image: "https://images.unsplash.com/photo-1584281362576-5b3f7e9702f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    price: 649.99,
    featured: true,
    new: true
  },
  {
    id: "benelli-m4",
    name: "M4 Tactical Shotgun",
    brand: "Benelli",
    category: "firearms",
    subcategory: "shotguns",
    description: "The Benelli M4 Tactical is a semi-automatic shotgun that utilizes the unique Auto Regulating Gas Operated (A.R.G.O.) system. Designed for law enforcement and military use, the M4 delivers reliability in the most extreme conditions.",
    details: [
      "Auto Regulating Gas Operated (A.R.G.O.) system",
      "Picatinny rail for mounting optics",
      "Ghost ring sights for fast target acquisition",
      "Telescoping stock for length adjustment",
      "Durable phosphate finish"
    ],
    specifications: {
      "Gauge": "12",
      "Action Type": "Semi-Auto",
      "Chamber": "3 in",
      "Barrel Length": "18.5 in",
      "Overall Length": "40 in",
      "Weight": "7.8 lbs",
      "Length of Pull": "14-3/8 in",
      "Drop at Heel": "2-1/4 in",
      "Drop at Comb": "1-3/8 in",
      "Magazine Capacity": 7,
      "Chokes": "Fixed Cylinder",
      "Sights": "Ghost Ring",
      "Stock Material": "Synthetic",
      "Finish": "Matte Black"
    },
    image: "https://images.unsplash.com/photo-1584514122387-9d348090abf7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    price: 1999.99,
    featured: true
  },
  {
    id: "hornady-9mm",
    name: "Critical Duty 9mm +P 135gr FlexLock",
    brand: "Hornady",
    category: "ammunition",
    subcategory: "handgun",
    description: "Hornady Critical Duty 9mm +P ammunition is designed for law enforcement and tactical applications. The FlexLock bullet delivers consistent expansion through barriers while maintaining weight retention.",
    details: [
      "Designed for law enforcement and tactical applications",
      "FlexLock bullet design for barrier penetration",
      "High antimony lead core for weight retention",
      "Nickel-plated cases for reliable feeding",
      "Sealed primers and case mouths for moisture resistance"
    ],
    specifications: {
      "Manufacturer": "Hornady",
      "Cartridge": "9mm Luger +P",
      "Bullet Type": "FlexLock",
      "Bullet Weight": "135 grain",
      "Cartridge Case Material": "Nickel-Plated Brass",
      "Muzzle Velocity": "1110 ft/s",
      "Muzzle Energy": "369 ft-lbs",
      "Application": "Law Enforcement, Personal Defense",
      "Package Type": "Box",
      "Primer Style": "Centerfire",
      "Lead Free": false
    },
    image: "https://images.unsplash.com/photo-1595590424283-b8f526a2f2b1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    price: 24.99,
    new: true
  },
  {
    id: "lwrc-ic-di",
    name: "IC-DI Rifle 5.56NATO",
    brand: "LWRC",
    category: "firearms",
    subcategory: "rifles",
    description: "The LWRC IC-DI (Individual Carbine-Direct Impingement) combines the reliability of the direct impingement operating system with LWRC's advanced engineering. Featuring a cold hammer-forged spiral fluted barrel and monoforge upper receiver.",
    details: [
      "Cold hammer-forged spiral fluted barrel",
      "Monoforge upper receiver for enhanced strength",
      "Ambidextrous controls for versatile operation",
      "Modular one-piece free float rail system",
      "NiCorr treated bolt carrier group"
    ],
    specifications: {
      "Caliber": "5.56 NATO",
      "Action Type": "Semi-Auto",
      "Operating System": "Direct Impingement",
      "Barrel Length": "16.1 in",
      "Barrel Material": "Cold Hammer-Forged Steel",
      "Barrel Finish": "NiCorr-Treated",
      "Twist Rate": "1:7",
      "Overall Length": "32 in - 35.25 in",
      "Weight": "6.7 lbs",
      "Magazine Capacity": 30,
      "Furniture Material": "Polymer",
      "Safety Features": "Ambidextrous Selector"
    },
    image: "https://images.unsplash.com/photo-1595590424283-b8f526a2f2b1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    price: 2195.00,
    featured: true
  },
  {
    id: "tac-vest-pro",
    name: "Tactical Vest Pro",
    brand: "Styx",
    category: "gear",
    subcategory: "body-armor",
    description: "The Styx Tactical Vest Pro is designed for professional operators who demand the highest level of performance and comfort. Features multiple pouches, MOLLE webbing, and adjustable fit.",
    details: [
      "Level IIIA ballistic protection (armor plates sold separately)",
      "Comprehensive MOLLE webbing system",
      "Quick-release system for emergency doffing",
      "Adjustable shoulder and side straps",
      "Hydration system compatible"
    ],
    specifications: {
      "Material": "1000D Cordura",
      "Protection Level": "IIIA (with proper plates)",
      "Plate Pockets": "Front and Back",
      "Weight": "2.8 lbs (without plates)",
      "Adjustment Points": 6,
      "MOLLE Points": 48,
      "Color Options": "Black, Tan, OD Green",
      "Size Range": "S-XXL",
      "Compatible Plates": "10x12 inches",
      "Hydration Capacity": "3L"
    },
    image: "https://images.unsplash.com/photo-1553486335-21b5e27f3197?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    price: 349.99,
    new: true
  },
  {
    id: "rmr-sight",
    name: "RMR Type 2 Adjustable LED Sight",
    brand: "Trijicon",
    category: "accessories",
    subcategory: "optics",
    description: "The Trijicon RMR (Ruggedized Miniature Reflex) Type 2 is designed to be as durable as the legendary Trijicon ACOG while allowing for fast target acquisition with both eyes open.",
    details: [
      "Battery-powered LED with adjustable brightness",
      "Automatically adjusts to ambient lighting conditions",
      "Forged aluminum housing for ultimate durability",
      "Button lockout mode prevents accidental adjustments",
      "Waterproof to 20 meters"
    ],
    specifications: {
      "Illumination Source": "LED",
      "Reticle Pattern": "3.25 MOA Dot",
      "Reticle Color": "Red",
      "Adjustment": "1 MOA Per Click",
      "Housing Material": "Forged Aluminum",
      "Dimensions": "1.8 in x 1.1 in x 1.0 in",
      "Weight": "1.2 oz",
      "Battery Type": "CR2032",
      "Battery Life": "4 years (at setting 4 of 8)",
      "Brightness Settings": 8,
      "Night Vision Compatible": true
    },
    image: "https://images.unsplash.com/photo-1595075917659-3550d0162f85?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    price: 699.99,
    featured: true
  },
  {
    id: "federal-hst",
    name: "HST 9mm 124gr JHP",
    brand: "Federal",
    category: "ammunition",
    subcategory: "handgun",
    description: "Federal HST 9mm 124gr JHP is designed for law enforcement and personal defense. Provides reliable expansion, optimum penetration and superior terminal performance.",
    details: [
      "Law enforcement standard for duty ammunition",
      "Expanded diameter and weight retention through barriers",
      "Specially designed hollow point won't plug when passing through barriers",
      "Nickel-plated case for smooth feeding and extraction",
      "Clean-burning propellants minimize residue"
    ],
    specifications: {
      "Manufacturer": "Federal",
      "Cartridge": "9mm Luger",
      "Bullet Type": "Jacketed Hollow Point (JHP)",
      "Bullet Weight": "124 grain",
      "Cartridge Case Material": "Nickel-Plated Brass",
      "Muzzle Velocity": "1150 ft/s",
      "Muzzle Energy": "364 ft-lbs",
      "Application": "Law Enforcement, Personal Defense",
      "Package Type": "Box",
      "Primer Style": "Centerfire",
      "Lead Free": false
    },
    image: "https://images.unsplash.com/photo-1595590424283-b8f526a2f2b1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    price: 29.99
  },
  {
    id: "cz-scorpion",
    name: "Scorpion EVO 3 S1 Pistol",
    brand: "CZ USA",
    category: "firearms",
    subcategory: "handguns",
    description: "The CZ Scorpion EVO 3 S1 Pistol is a blowback-operated semi-auto pistol chambered in 9mm. Its polymer frame and aluminum receiver keep weight low, while its non-reciprocating charging handle is placed on the left side for easy manipulation.",
    details: [
      "Low-recoil blowback operating system",
      "Ambidextrous controls for versatile operation",
      "Polymer frame for reduced weight",
      "Threaded barrel for suppressors or muzzle devices",
      "Picatinny rail for mounting optics"
    ],
    specifications: {
      "Caliber": "9mm Luger",
      "Action Type": "Semi-Auto",
      "Frame Material": "Fiber-Reinforced Polymer",
      "Barrel Length": "7.72 in",
      "Overall Length": "16.5 in",
      "Height": "9.4 in",
      "Width": "2.4 in",
      "Weight": "5.0 lbs",
      "Magazine Capacity": 20,
      "Barrel": "Cold Hammer Forged",
      "Trigger Mechanism": "Single Action",
      "Safety": "Ambidextrous Thumb Safety"
    },
    image: "https://images.unsplash.com/photo-1584281362576-5b3f7e9702f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    price: 899.99
  },
  {
    id: "tac-pack-3day",
    name: "3-Day Tactical Backpack",
    brand: "Styx",
    category: "gear",
    subcategory: "bags",
    description: "The Styx 3-Day Tactical Backpack is designed for extended operations with ample storage, MOLLE compatibility, and hydration system support. Built for durability in harsh environments.",
    details: [
      "50L capacity for extended operations",
      "Multiple compartments for organized storage",
      "External MOLLE webbing for attaching additional equipment",
      "Built-in hydration reservoir pocket (3L)",
      "Compression straps to secure load"
    ],
    specifications: {
      "Material": "1000D Cordura",
      "Capacity": "50L",
      "Dimensions": "22 in x 16 in x 11 in",
      "Weight": "3.2 lbs",
      "Number of Compartments": 5,
      "MOLLE Compatible": true,
      "Hydration Compatible": true,
      "Max Hydration Capacity": "3L",
      "Color Options": "Black, Tan, OD Green, Multicam",
      "Laptop Compartment": "Yes (up to 17 in)"
    },
    image: "https://images.unsplash.com/photo-1553486335-21b5e27f3197?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    price: 169.99
  },
  {
    id: "suppressor-5.56",
    name: "Ultra-Low Profile Suppressor 5.56",
    brand: "Styx",
    category: "accessories",
    subcategory: "suppressors",
    description: "The Styx Ultra-Low Profile Suppressor for 5.56mm rifles reduces sound signature and flash while maintaining accuracy. Designed for professional use in tactical environments.",
    details: [
      "Significant sound reduction for tactical advantage",
      "Minimal point-of-impact shift for maintained accuracy",
      "Heat-treated stainless steel construction",
      "Quick-attach mounting system for rapid deployment",
      "Full-auto rated for sustained fire capability"
    ],
    specifications: {
      "Caliber": "5.56mm NATO",
      "Construction": "17-4 Stainless Steel",
      "Finish": "Matte Black Cerakote",
      "Length": "6.2 in",
      "Diameter": "1.5 in",
      "Weight": "14 oz",
      "Sound Reduction": "32 dB",
      "Mounting System": "Quick-Attach",
      "Thread Pattern": "1/2x28",
      "Full-Auto Rated": true
    },
    image: "https://images.unsplash.com/photo-1595075917659-3550d0162f85?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    price: 899.99
  },
  {
    id: "glock-19-gen5",
    name: "Glock 19 Gen5 9mm",
    brand: "Glock",
    category: "firearms",
    subcategory: "handguns",
    description: "The GLOCK 19 Gen5 9mm pistol is ideal for a versatile role thanks to its reduced dimensions when compared to the standard sized option. The G19 Gen5 features the GLOCK Marksman Barrel and nDLC finish for enhanced accuracy and durability.",
    details: [
      "GLOCK Marksman Barrel with enhanced rifling",
      "Ambidextrous slide stop lever for left/right operation",
      "Flared mag-well for easier reloading",
      "Removable backstraps for hand fit customization",
      "nDLC finish for improved durability"
    ],
    specifications: {
      "Caliber": "9mm Luger",
      "Action Type": "Semi-Auto",
      "Length": "7.28 in",
      "Height": "5.04 in",
      "Width": "1.34 in",
      "Barrel Length": "4.02 in",
      "Sight Radius": "6.02 in",
      "Weight (unloaded)": "21.52 oz",
      "Trigger Pull": "5.5 lbs",
      "Magazine Capacity": 15,
      "Barrel Rifling": "Hexagonal",
      "Length of Twist": "9.84 in"
    },
    image: "https://images.unsplash.com/photo-1584281362576-5b3f7e9702f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    price: 599.99
  },
  {
    id: "night-vision-mono",
    name: "Tactical Monocular Night Vision Device",
    brand: "Styx",
    category: "gear",
    subcategory: "optics",
    description: "The Styx Tactical Monocular Night Vision Device provides exceptional nighttime visibility for military and law enforcement operations. Features advanced image intensifier technology and ergonomic design.",
    details: [
      "Generation 3 image intensifier tube",
      "Manual gain control for optimal image clarity",
      "Infrared illuminator for zero-light conditions",
      "Water resistant for all-weather operation",
      "Helmet, head, or weapon mountable"
    ],
    specifications: {
      "Generation": "Gen 3",
      "Magnification": "1x (3x optional)",
      "Field of View": "40°",
      "Detection Range": "300m (human)",
      "Battery Type": "CR123A",
      "Battery Life": "40 hours (without IR)",
      "Weight": "12.8 oz",
      "Dimensions": "4.5 in x 2.3 in x 2.8 in",
      "Diopter Adjustment": "+2 to -6",
      "Operating Temperature": "-40°F to +120°F",
      "Waterproof": "1m for 30 minutes"
    },
    image: "https://images.unsplash.com/photo-1553486335-21b5e27f3197?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    price: 3299.99
  }
];
