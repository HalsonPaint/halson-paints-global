export interface Product {
  id: string;
  name: string;
  description: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  products: Product[];
}

export const productCategories: Category[] = [
  {
    id: "anti-corrosive-primers",
    name: "Anti-Corrosive Primers",
    description: "High-performance primers for superior corrosion protection",
    products: [
      { id: "roxide-primer", name: "Red Oxide Primer", description: "Traditional rust-inhibiting primer for ferrous metals" },
      { id: "zinc-rich-primer", name: "Zinc Rich Primer", description: "Cathodic protection for steel substrates" },
      { id: "epoxy-primer", name: "Epoxy Primer", description: "Two-component primer for aggressive environments" },
      { id: "wash-primer", name: "Wash Primer (Etch Primer)", description: "Pre-treatment primer for non-ferrous metals" },
    ],
  },
  {
    id: "epoxy-coatings",
    name: "Epoxy Coatings",
    description: "Industrial-grade epoxy systems for maximum durability",
    products: [
      { id: "epoxy-floor-coating", name: "Epoxy Floor Coating", description: "Heavy-duty floor protection system" },
      { id: "epoxy-tank-lining", name: "Epoxy Tank Lining", description: "Chemical-resistant tank interior coating" },
      { id: "coal-tar-epoxy", name: "Coal Tar Epoxy", description: "Underground and underwater protection" },
      { id: "high-build-epoxy", name: "High Build Epoxy", description: "Thick film protective coating" },
    ],
  },
  {
    id: "heat-resistant-paints",
    name: "Heat Resistant Paints",
    description: "Coatings engineered for high-temperature applications",
    products: [
      { id: "silicone-aluminium", name: "Silicone Aluminium Paint", description: "Heat resistant up to 600°C" },
      { id: "heat-resistant-black", name: "Heat Resistant Black", description: "High-temperature matte finish" },
      { id: "exhaust-paint", name: "Exhaust Paint", description: "Specialized coating for exhaust systems" },
    ],
  },
  {
    id: "chemical-resistant",
    name: "Chemical Resistant Finishes",
    description: "Protection against acids, alkalis, and solvents",
    products: [
      { id: "acid-resistant", name: "Acid Resistant Paint", description: "Protection against acidic environments" },
      { id: "alkali-resistant", name: "Alkali Resistant Coating", description: "Resistant to alkaline chemicals" },
      { id: "solvent-resistant", name: "Solvent Resistant Finish", description: "Protection against organic solvents" },
    ],
  },
  {
    id: "marine-coatings",
    name: "Marine Coatings",
    description: "Specialized protection for marine environments",
    products: [
      { id: "antifouling", name: "Antifouling Paint", description: "Prevents marine organism growth" },
      { id: "marine-primer", name: "Marine Primer", description: "Base coat for marine applications" },
      { id: "boot-topping", name: "Boot Topping Paint", description: "Waterline protection" },
    ],
  },
  {
    id: "floor-coatings",
    name: "Floor Coatings",
    description: "Durable solutions for industrial and commercial floors",
    products: [
      { id: "pu-floor-coating", name: "PU Floor Coating", description: "Abrasion-resistant polyurethane floor" },
      { id: "self-leveling", name: "Self-Leveling Floor Coating", description: "Smooth, seamless floor finish" },
      { id: "anti-static-floor", name: "Anti-Static Floor Coating", description: "ESD protection for electronics areas" },
      { id: "non-slip-coating", name: "Non-Slip Floor Coating", description: "Safety coating with textured finish" },
    ],
  },
  {
    id: "zinc-coatings",
    name: "Zinc Rich Primers",
    description: "Premium zinc-based corrosion protection",
    products: [
      { id: "zinc-phosphate", name: "Zinc Phosphate Primer", description: "Economical zinc-based protection" },
      { id: "inorganic-zinc", name: "Inorganic Zinc Silicate", description: "Maximum zinc content for severe exposure" },
      { id: "organic-zinc", name: "Organic Zinc Rich Primer", description: "Flexible zinc-rich primer" },
    ],
  },
  {
    id: "polyurethane-finishes",
    name: "Polyurethane Finishes",
    description: "High-gloss, weather-resistant topcoats",
    products: [
      { id: "pu-gloss", name: "PU Gloss Finish", description: "High-gloss protective topcoat" },
      { id: "pu-matte", name: "PU Matte Finish", description: "Low-sheen durable finish" },
      { id: "pu-clear", name: "PU Clear Coat", description: "Transparent protective coating" },
      { id: "aliphatic-pu", name: "Aliphatic PU", description: "UV-stable exterior grade" },
    ],
  },
  {
    id: "automotive-paints",
    name: "Automotive Paints",
    description: "Professional-grade automotive refinishing products",
    products: [
      { id: "auto-primer", name: "Automotive Primer", description: "Base coat for vehicle refinishing" },
      { id: "chassis-black", name: "Chassis Black Paint", description: "Durable underbody protection" },
      { id: "engine-enamel", name: "Engine Enamel", description: "Heat-resistant engine coating" },
    ],
  },
  {
    id: "decorative-interior",
    name: "Decorative Interior Paints",
    description: "Premium finishes for beautiful interiors",
    products: [
      { id: "premium-emulsion", name: "Premium Interior Emulsion", description: "Washable, smooth interior finish" },
      { id: "silk-emulsion", name: "Silk Sheen Emulsion", description: "Soft sheen luxury finish" },
      { id: "velvet-touch", name: "Velvet Touch", description: "Ultra-smooth matte finish" },
      { id: "ceiling-white", name: "Ceiling White", description: "Bright white ceiling paint" },
    ],
  },
  {
    id: "decorative-exterior",
    name: "Decorative Exterior Paints",
    description: "Weather-resistant paints for lasting beauty",
    products: [
      { id: "exterior-emulsion", name: "Exterior Emulsion", description: "Weatherproof exterior finish" },
      { id: "textured-paint", name: "Textured Exterior Paint", description: "Decorative textured finish" },
      { id: "elastomeric-coating", name: "Elastomeric Coating", description: "Flexible crack-bridging paint" },
      { id: "apex-exterior", name: "Apex Exterior", description: "Premium all-weather protection" },
    ],
  },
  {
    id: "wood-finishes",
    name: "Wood Finishes",
    description: "Protective and decorative wood coatings",
    products: [
      { id: "wood-primer", name: "Wood Primer", description: "Base coat for wooden surfaces" },
      { id: "wood-stain", name: "Wood Stain", description: "Transparent colored wood finish" },
      { id: "pu-wood-finish", name: "PU Wood Finish", description: "Durable clear coat for wood" },
      { id: "melamine-polish", name: "Melamine Polish", description: "High-gloss furniture finish" },
    ],
  },
  {
    id: "metal-primers",
    name: "Metal Primers",
    description: "Foundation coatings for all metal types",
    products: [
      { id: "metal-primer-white", name: "Metal Primer (White)", description: "White base for light topcoats" },
      { id: "metal-primer-grey", name: "Metal Primer (Grey)", description: "Neutral grey metal primer" },
      { id: "galvanized-primer", name: "Galvanized Metal Primer", description: "Adhesion primer for galvanized surfaces" },
      { id: "aluminum-primer", name: "Aluminum Primer", description: "Specialized primer for aluminum" },
    ],
  },
  {
    id: "specialty-coatings",
    name: "Specialty Coatings",
    description: "Unique solutions for specific applications",
    products: [
      { id: "road-marking", name: "Road Marking Paint", description: "High-visibility traffic paint" },
      { id: "swimming-pool", name: "Swimming Pool Paint", description: "Chlorine-resistant pool coating" },
      { id: "fireproof-coating", name: "Fire Retardant Coating", description: "Passive fire protection" },
      { id: "anti-graffiti", name: "Anti-Graffiti Coating", description: "Sacrificial graffiti protection" },
    ],
  },
  {
    id: "protective-topcoats",
    name: "Protective Topcoats",
    description: "Final layer protection for industrial applications",
    products: [
      { id: "chlorinated-rubber", name: "Chlorinated Rubber Paint", description: "Fast-drying chemical resistant finish" },
      { id: "synthetic-enamel", name: "Synthetic Enamel", description: "General-purpose industrial enamel" },
      { id: "alkyd-finish", name: "Alkyd Finish", description: "Oil-modified durable topcoat" },
      { id: "acrylic-topcoat", name: "Acrylic Topcoat", description: "Water-based protective finish" },
    ],
  },
];
