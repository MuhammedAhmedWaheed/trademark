export type TrademarkCategory = {
  classCode: string;
  title: string;
  summary: string;
  examples: string[];
  type: "goods" | "services";
};

export const TRADEMARK_CATEGORIES: TrademarkCategory[] = [
  {
    classCode: "001",
    title: "Chemical Products",
    summary:
      "Industrial chemicals, science-grade reagents, and agricultural additives used in manufacturing.",
    examples: ["Industrial salts", "Water treatment preparations", "Agricultural fertilizers"],
    type: "goods",
  },
  {
    classCode: "002",
    title: "Paints & Coatings",
    summary:
      "Pigments, varnishes, protective coatings, and finishing products for surfaces and artwork.",
    examples: ["House paint", "Protective rust coatings", "Dyes and colorants"],
    type: "goods",
  },
  {
    classCode: "003",
    title: "Cosmetics & Cleaning",
    summary:
      "Skincare, makeup, soaps, and cleaning solutions designed for personal or household use.",
    examples: ["Facial moisturizers", "Dishwashing detergents", "Household disinfectants"],
    type: "goods",
  },
  {
    classCode: "004",
    title: "Fuel & Lubricants",
    summary:
      "Combustible products, industrial oils, and lubricants for engines or mechanical equipment.",
    examples: ["Motor oils", "Candles", "Industrial greases"],
    type: "goods",
  },
  {
    classCode: "005",
    title: "Pharmaceuticals",
    summary:
      "Medicinal and veterinary products, dietary supplements, and sanitary preparations.",
    examples: ["Prescription medicines", "Vitamin supplements", "Antibacterial wipes"],
    type: "goods",
  },
  {
    classCode: "006",
    title: "Metal Goods",
    summary:
      "Common metals and their alloys; building materials, safes, and storage made of metal.",
    examples: ["Metal hardware", "Safe deposit boxes", "Metal building panels"],
    type: "goods",
  },
  {
    classCode: "007",
    title: "Machinery",
    summary:
      "Machines and machine tools, motors, and parts for industrial and agricultural apparatus.",
    examples: ["3D printers", "Agricultural harvesters", "Machine bearings"],
    type: "goods",
  },
  {
    classCode: "008",
    title: "Hand Tools",
    summary:
      "Hand-operated tools and implements for construction, gardening, and professional trades.",
    examples: ["Manual screwdrivers", "Razor blades", "Hand saws"],
    type: "goods",
  },
  {
    classCode: "009",
    title: "Electrical & Scientific",
    summary:
      "Software, electronics, measuring instruments, and safety devices for scientific use.",
    examples: ["Downloadable mobile apps", "Laboratory microscopes", "Protective helmets"],
    type: "goods",
  },
  {
    classCode: "010",
    title: "Medical Devices",
    summary:
      "Surgical, medical, dental, and veterinary instruments and apparatus for clinical care.",
    examples: ["Diagnostic devices", "Orthopedic supports", "Dental drills"],
    type: "goods",
  },
  {
    classCode: "011",
    title: "Environmental Control",
    summary:
      "Apparatus for lighting, heating, cooling, cooking, and water supply or sanitary purposes.",
    examples: ["Air purifiers", "LED lighting fixtures", "Water heaters"],
    type: "goods",
  },
  {
    classCode: "012",
    title: "Vehicles",
    summary:
      "Vehicles for land, air, or water travel, plus structural vehicle parts and accessories.",
    examples: ["Electric cars", "Bicycles", "Boat hulls"],
    type: "goods",
  },
  {
    classCode: "035",
    title: "Advertising & Business Services",
    summary:
      "Advertising, marketing, business consulting, and retail store services across industries.",
    examples: ["Digital marketing agencies", "Business management consulting", "Online retail stores"],
    type: "services",
  },
  {
    classCode: "036",
    title: "Insurance & Financial Services",
    summary:
      "Banking, insurance underwriting, real estate, and investment advisory services.",
    examples: ["Insurance brokerage", "Cryptocurrency exchanges", "Mortgage lending"],
    type: "services",
  },
  {
    classCode: "041",
    title: "Education & Entertainment",
    summary:
      "Training, entertainment, sports, and cultural activities including live events and streaming.",
    examples: ["Online education platforms", "Concert promotion", "Fitness coaching"],
    type: "services",
  },
  {
    classCode: "042",
    title: "Technology & Scientific Services",
    summary:
      "Scientific research, software development, SaaS platforms, and industrial design.",
    examples: ["Cloud computing services", "Engineering consulting", "Software as a service"],
    type: "services",
  },
  {
    classCode: "043",
    title: "Restaurant & Hospitality",
    summary:
      "Services providing food, drink, temporary accommodation, and hospitality experiences.",
    examples: ["Meal delivery", "Hotels and resorts", "Catering services"],
    type: "services",
  },
  {
    classCode: "044",
    title: "Medical & Beauty Services",
    summary:
      "Medical, veterinary, hygienic, and beauty care services provided by professionals.",
    examples: ["Medical clinics", "Cosmetic surgery", "Spa and wellness centers"],
    type: "services",
  },
  {
    classCode: "045",
    title: "Legal & Security Services",
    summary:
      "Legal representation, security services, and personal/social support services.",
    examples: ["Law firms", "Identity theft protection", "Personal concierge services"],
    type: "services",
  },
];

export const GOODS_COUNT = TRADEMARK_CATEGORIES.filter(
  (item) => item.type === "goods",
).length;

export const SERVICES_COUNT = TRADEMARK_CATEGORIES.filter(
  (item) => item.type === "services",
).length;
