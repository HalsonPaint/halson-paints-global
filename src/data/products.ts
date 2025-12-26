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
    id: "alkyd-primers-mio-finish",
    name: "Alkyd Primers/MIO/Finish Primers",
    description: "Traditional alkyd-based primers and finish coatings",
    products: [
      { id: "hb-zinc-phosphate-primer", name: "HB Zinc Phosphate Primer", description: "High-build zinc phosphate primer for corrosion protection" },
      { id: "antisaline-metallic-primer", name: "Antisaline Metallic Primer", description: "Metallic primer for saline environments" },
      { id: "zinc-chromate-primer-is2074", name: "Zinc Chromate Primer TO IS 2074", description: "Zinc chromate primer conforming to IS 2074 standards" },
      { id: "zinc-chromate-primer-yellow", name: "Zinc Chromate Primer Yellow", description: "Yellow zinc chromate primer coating" },
      { id: "synthetic-red-lead", name: "Synthetic Red Lead", description: "Synthetic red lead primer for steel protection" },
      { id: "alkyd-paint-red-oxide", name: "Alkyd Paint Red Oxide", description: "Alkyd-based red oxide primer" },
      { id: "hb-mio-5216", name: "HB MIO 5216", description: "High-build micaceous iron oxide coating" },
      { id: "synthetic-enamel-ts-is2932", name: "Synthetic Enamel TS IS 2932", description: "Synthetic enamel conforming to IS 2932" },
      { id: "crfp-4215", name: "C.R.F.P 4215", description: "Chemical resistant finish paint" },
    ],
  },
  {
    id: "cr-primers-mio-finish",
    name: "C.R.Primers/MIO/Finish Paints(F.P)",
    description: "Chemical resistant primers and finish paints",
    products: [
      { id: "hb-primer-8632", name: "HB Primer 8632", description: "High-build chemical resistant primer" },
      { id: "hb-mio-5667", name: "HB MIO 5667", description: "High-build micaceous iron oxide coating" },
      { id: "hb-5633", name: "HB 5633", description: "High-build protective coating" },
      { id: "hb-5634", name: "HB 5634", description: "High-build protective coating" },
      { id: "fp-4635", name: "F.P. 4635", description: "Chemical resistant finish paint" },
      { id: "fp-4638", name: "F.P. 4638", description: "Chemical resistant finish paint" },
    ],
  },
  {
    id: "epoxy-primers-mio-putty",
    name: "Epoxy Primers/MIO/Putty",
    description: "Epoxy-based primers and protective coatings",
    products: [
      { id: "epoxy-alumi-primer", name: "Epoxy Alumi Primer", description: "Epoxy aluminum primer coating" },
      { id: "zinc-8535", name: "Zinc 8535", description: "Zinc-rich epoxy primer" },
      { id: "zinc-8536", name: "Zinc 8536", description: "Zinc-rich epoxy primer" },
      { id: "zinc-8537", name: "Zinc 8537", description: "Zinc-rich epoxy primer" },
      { id: "hb-primer-8539", name: "HB Primer 8539", description: "High-build epoxy primer" },
      { id: "hb-mio-5567", name: "HB MIO 5567", description: "High-build micaceous iron oxide coating" },
      { id: "hb-mio-5568", name: "HB MIO 5568", description: "High-build micaceous iron oxide coating" },
      { id: "primer-8530", name: "Primer 8530", description: "Epoxy primer coating" },
      { id: "primer-8532", name: "Primer 8532", description: "Epoxy primer coating" },
      { id: "primer-8538", name: "Primer 8538", description: "Epoxy primer coating" },
      { id: "epoxy-6525", name: "6525", description: "Epoxy protective coating" },
    ],
  },
  {
    id: "epoxy-finish-paints",
    name: "Epoxy Finish Paints(F.P)",
    description: "High-performance epoxy finish coatings",
    products: [
      { id: "fp-4534", name: "F.P. 4534", description: "Epoxy finish paint" },
      { id: "fp-4535", name: "F.P. 4535", description: "Epoxy finish paint" },
      { id: "hb-5520", name: "HB 5520", description: "High-build epoxy finish" },
      { id: "hb-5520-ps", name: "HB 5520(PS)", description: "High-build epoxy finish (PS grade)" },
      { id: "hb-5540", name: "HB 5540", description: "High-build epoxy finish" },
      { id: "hb-5542", name: "HB 5542", description: "High-build epoxy finish" },
      { id: "solventless-epoxy-6565", name: "Solventless Epoxy 6565", description: "Zero VOC solventless epoxy coating" },
    ],
  },
  {
    id: "surface-tolerant-epoxy",
    name: "Surface Tolerant Epoxy Coatings",
    description: "Epoxy coatings for challenging surface conditions",
    products: [
      { id: "mastic-5515", name: "Mastic 5515", description: "Surface tolerant epoxy mastic" },
      { id: "mastic-5516", name: "Mastic 5516", description: "Surface tolerant epoxy mastic" },
    ],
  },
  {
    id: "coal-tar-epoxy",
    name: "Coal Tar Epoxy Coatings",
    description: "Heavy-duty coal tar epoxy for underground and marine use",
    products: [
      { id: "solventless-coal-tar-epoxy-6518", name: "Solventless Coal Tar Epoxy 6518", description: "Zero VOC coal tar epoxy coating" },
      { id: "coal-tar-epoxy-8518", name: "Coal Tar Epoxy 8518", description: "Standard coal tar epoxy coating" },
    ],
  },
  {
    id: "polyurethane-coatings",
    name: "Polyurenthane Coatings",
    description: "Premium polyurethane finish coatings",
    products: [
      { id: "primer-8511", name: "Primer 8511", description: "Polyurethane primer" },
      { id: "hb-mio-5513", name: "HB MIO. 5513", description: "High-build polyurethane MIO coating" },
      { id: "mc-8515", name: "MC. 8515", description: "Polyurethane mid-coat" },
      { id: "wv-8565", name: "WV. 8565", description: "Weather resistant polyurethane" },
      { id: "wv-4552", name: "WV. 4552", description: "Weather resistant polyurethane" },
      { id: "fp-4510", name: "F.P. 4510", description: "Polyurethane finish paint" },
      { id: "fp-4536", name: "F.P. 4536", description: "Polyurethane finish paint" },
      { id: "fp-4537", name: "F.P. 4537", description: "Polyurethane finish paint" },
      { id: "pu-4512", name: "4512", description: "Polyurethane coating" },
      { id: "pu-4513", name: "4513", description: "Polyurethane coating" },
    ],
  },
  {
    id: "high-temp-heat-resistant",
    name: "High TEMP Heat Resisting Coatings",
    description: "Specialized coatings for high-temperature applications",
    products: [
      { id: "silicone-acrylic-paint", name: "Silicone Acrylic Paint", description: "Heat resistant silicone acrylic coating" },
      { id: "hhr-aluminum-4951", name: "HHR Aluminum 4951 - Upto 600 C", description: "High heat resistant aluminum up to 600°C" },
      { id: "hhr-aluminum-4950", name: "HHR Aluminum 4950 - Upto 400 C", description: "High heat resistant aluminum up to 400°C" },
      { id: "hr-aluminum-250", name: "HR Aluminum - Upto 250 C", description: "Heat resistant aluminum up to 250°C" },
      { id: "aluminum-paint-is2339", name: "Aluminum Paint TO IS 2339", description: "Aluminum paint conforming to IS 2339" },
      { id: "industrial-aluminum-dual", name: "Industrial Aluminum Paint(Dual Pack)", description: "Two-component industrial aluminum paint" },
      { id: "hr-zinc-dust-graphite", name: "HR Zinc Dust Graphite - Stack Paint", description: "Heat resistant zinc dust graphite for stacks" },
      { id: "synthetic-grey-graphite", name: "Synthetic Grey Graphite Paint", description: "Synthetic grey graphite coating" },
      { id: "boiler-composition-8020", name: "Boiler Composition NO 8020(Interior)", description: "Interior boiler composition coating" },
      { id: "boiler-composition-8010", name: "Boiler Composition NO 8010(Exterior)", description: "Exterior boiler composition coating" },
      { id: "chimney-paint-black", name: "Chimney Paint Black", description: "Black paint for chimneys" },
    ],
  },
  {
    id: "thermostat-coatings",
    name: "Thermostat Coatings",
    description: "Specialized thermostat coating solutions",
    products: [
      { id: "pentotherm", name: "Pentotherm", description: "Thermostat coating for industrial applications" },
    ],
  },
  {
    id: "vinyl-coatings",
    name: "Vinyl Coatings",
    description: "Vinyl-based protective coatings",
    products: [
      { id: "vinyl-hb-mio-5664", name: "High Build MIO 5664", description: "High-build vinyl MIO coating" },
      { id: "vinyl-enamel-4606", name: "Enamel 4606", description: "Vinyl enamel finish" },
      { id: "vinyl-primer-8680", name: "Primer 8680", description: "Vinyl primer coating" },
    ],
  },
  {
    id: "sealants",
    name: "Sealants",
    description: "Industrial sealant solutions",
    products: [
      { id: "lps-45", name: "LPS 45", description: "Industrial sealant" },
    ],
  },
  {
    id: "special-coatings",
    name: "Special Coatings",
    description: "Specialized coating solutions",
    products: [
      { id: "aluminum-4442", name: "Aluminum 4442", description: "Special aluminum coating" },
      { id: "pre-treatment-0966", name: "Pre-Treatment Solution 0966", description: "Surface pre-treatment solution" },
      { id: "special-9547", name: "9547", description: "Special purpose coating" },
    ],
  },
  {
    id: "bituminous",
    name: "Bituminous",
    description: "Bituminous protective coatings",
    products: [
      { id: "hb-8022", name: "HB 8022", description: "High-build bituminous coating" },
      { id: "bituminous-aluminum-4057", name: "Bituminous Aluminum 4057", description: "Bituminous aluminum coating" },
      { id: "ct-bituminous", name: "CT", description: "Coal tar bituminous coating" },
    ],
  },
  {
    id: "zinc-silicate-primers",
    name: "Zinc Silicate Primers",
    description: "Premium zinc silicate primer systems",
    products: [
      { id: "zinc-o-sil-80", name: "Zinc-O-SIL 80", description: "80% zinc content silicate primer" },
      { id: "zinc-o-sil-75", name: "Zinc-O-SIL 75", description: "75% zinc content silicate primer" },
      { id: "zinc-o-sil-70", name: "Zinc-O-SIL 70", description: "70% zinc content silicate primer" },
      { id: "zinc-o-sil-aqua", name: "Zinc-O-SIL Aqua", description: "Water-based zinc silicate primer" },
    ],
  },
  {
    id: "shop-wash-primers",
    name: "Shop Primers/Wash Primers",
    description: "Shop and wash primer solutions",
    products: [
      { id: "zinc-o-sil-sp-50", name: "Zinc-O-SIL SP 50", description: "Shop primer with 50% zinc content" },
      { id: "wash-primer-8520", name: "Wash Primer 8520", description: "Etch primer for metal preparation" },
      { id: "shop-primer-ro-8527", name: "Shop Primer R/O 8527", description: "Red oxide shop primer" },
    ],
  },
];
