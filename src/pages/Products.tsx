import { useState } from "react";
import {
  ChevronDown,
  MessageCircle,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  FileBadge,
  PaintRoller,
  Droplets,
  Layers,
  Brush,
  Flame,
  FlaskConical,
  Palette,
  Shield,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { productCategories, type Category, type Product } from "@/data/products";
import { cn } from "@/lib/utils";
import { openExternal } from "@/lib/openExternal";
import { EXTERNAL_TARGET } from "@/lib/external";

// Category images
import puEnamelImg from "@/assets/products/pu-enamel.jpg";
import qdEnamelImg from "@/assets/products/qd-enamel.jpg";
import syntheticEnamelImg from "@/assets/products/synthetic-enamel.jpg";
import primersImg from "@/assets/products/primers.jpg";
import primerSurfaceGreyImg from "@/assets/products/primer-surface-grey.jpg";
import redOxideImg from "@/assets/products/red-oxide.jpg";
import zincYellowImg from "@/assets/products/zinc-yellow.jpg";
import furnitureEnamelImg from "@/assets/products/furniture-enamel.jpg";
import specialShadesImg from "@/assets/products/special-shades.jpg";
import powderCoatingImg from "@/assets/products/powder-coating.jpg";
import hammerFinishImg from "@/assets/products/hammer-finish.jpg";

const categoryImages: Record<string, string> = {
  "pu-enamel-super": puEnamelImg,
  "qd-enamel": qdEnamelImg,
  "synthetic-enamel": syntheticEnamelImg,
  "primers": primersImg,
  "primer-surface-grey": primerSurfaceGreyImg,
  "red-oxide-metal-primer": redOxideImg,
  "zinc-yellow-primer": zincYellowImg,
  "furniture-enamel": furnitureEnamelImg,
  "special-shades": specialShadesImg,
  "powder-coating": powderCoatingImg,
  "hammer-finish": hammerFinishImg,
};

// Icon palette + soft tinted background per product (cycled deterministically)
const productIconPool = [
  { Icon: ShieldCheck, bg: "bg-primary/10", color: "text-primary" },
  { Icon: Sparkles, bg: "bg-emerald-500/10", color: "text-emerald-600" },
  { Icon: FileBadge, bg: "bg-accent/10", color: "text-accent" },
  { Icon: PaintRoller, bg: "bg-amber-400/15", color: "text-amber-600" },
  { Icon: Droplets, bg: "bg-sky-500/10", color: "text-sky-600" },
  { Icon: Layers, bg: "bg-purple-500/10", color: "text-purple-600" },
  { Icon: Brush, bg: "bg-rose-500/10", color: "text-rose-600" },
  { Icon: Flame, bg: "bg-orange-500/10", color: "text-orange-600" },
  { Icon: FlaskConical, bg: "bg-teal-500/10", color: "text-teal-600" },
  { Icon: Palette, bg: "bg-indigo-500/10", color: "text-indigo-600" },
  { Icon: Shield, bg: "bg-slate-500/10", color: "text-slate-600" },
];

const getProductIcon = (id: string) => {
  let h = 0;
  for (let i = 0; i < id.length; i++) h = (h * 31 + id.charCodeAt(i)) >>> 0;
  return productIconPool[h % productIconPool.length];
};

const WHATSAPP_NUMBER = "918369657171";

const getWhatsAppUrl = (message: string) => {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};

const WhatsAppIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 175.216 175.552"
    className={className}
  >
    <defs>
      <linearGradient id="whatsapp-gradient" x1="85.915" x2="86.535" y1="32.567" y2="137.092" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#57d163"/>
        <stop offset="1" stopColor="#23b33a"/>
      </linearGradient>
    </defs>
    <path fill="url(#whatsapp-gradient)" d="M87.184 25.227c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.313-6.179 22.558 23.146-6.069 2.235 1.324c9.387 5.571 20.15 8.517 31.126 8.523h.023c33.707 0 61.14-27.426 61.153-61.135a60.75 60.75 0 0 0-17.895-43.251 60.75 60.75 0 0 0-43.235-17.928z"/>
    <path fill="#fff" d="M68.772 55.603c-1.378-3.061-2.828-3.123-4.137-3.176l-3.524-.043c-1.226 0-3.218.46-4.902 2.3s-6.435 6.287-6.435 15.332 6.588 17.785 7.506 19.013 12.718 20.381 31.405 27.75c15.529 6.124 18.689 4.906 22.061 4.6s10.877-4.447 12.408-8.74 1.532-7.971 1.073-8.74-1.685-1.226-3.525-2.146-10.877-5.367-12.562-5.981-2.91-.919-4.137.921-4.746 5.979-5.819 7.206-2.144 1.381-3.984.462-7.76-2.861-14.784-9.124c-5.465-4.873-9.154-10.891-10.228-12.73s-.114-2.835.808-3.751c.825-.82 1.838-2.147 2.759-3.22s1.224-1.84 1.836-3.065.307-2.301-.153-3.22-4.032-10.011-5.666-13.647z"/>
  </svg>
);

const ProductCard = ({ product, categoryName, index }: { product: Product; categoryName: string; index: number }) => {
  const message = `Hi, I'm interested in the following product:\n\n*Product:* ${product.name}\n*Category:* ${categoryName}\n*Description:* ${product.description}\n\nPlease provide more details and pricing.`;
  const whatsappUrl = getWhatsAppUrl(message);

  const { Icon, bg, color } = getProductIcon(product.id);

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25, delay: index * 0.02 }}
      className="group"
    >
      <div className="flex items-center justify-between gap-4 py-4 px-4 sm:px-5 bg-white border border-border/50 hover:border-primary/30 hover:shadow-[var(--shadow-elevated)] transition-all duration-400 rounded-md">
        <div className="flex items-center gap-4 flex-1 min-w-0">
          <div className={cn("w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center shrink-0", bg)}>
            <Icon className={cn("w-5 h-5 sm:w-[22px] sm:h-[22px]", color)} strokeWidth={1.75} />
          </div>
          <div className="min-w-0">
            <h4 className="text-sm sm:text-base font-semibold text-foreground group-hover:text-primary transition-colors duration-400 truncate">
              {product.name}
            </h4>
            <p className="text-xs sm:text-[13px] text-muted-foreground font-light truncate mt-0.5">
              {product.description}
            </p>
          </div>
        </div>
        <a
          href={whatsappUrl}
          target={EXTERNAL_TARGET}
          rel="noopener noreferrer"
          onClick={(e) => {
            e.stopPropagation();
            if (EXTERNAL_TARGET !== "_top") return;
            e.preventDefault();
            openExternal(whatsappUrl);
          }}
          className="shrink-0 inline-flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 px-3 sm:px-4 py-2 rounded-md text-xs sm:text-sm font-medium transition-colors"
          title="Enquire on WhatsApp"
        >
          <MessageCircle className="w-4 h-4" strokeWidth={1.75} />
          <span className="hidden sm:inline">Enquiry</span>
        </a>
      </div>
    </motion.div>
  );
};

const CategorySection = ({ category, index }: { 
  category: Category; 
  index: number;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const image = categoryImages[category.id];
  const isEven = index % 2 === 0;

  return (
    <ScrollReveal delay={index * 0.05} distance={30}>
      <div className={cn(
        "grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden rounded-sm border border-border/60 bg-card transition-all duration-500",
        isOpen && "border-primary/15 shadow-[var(--shadow-elevated)]"
      )}>
        {/* Image side */}
        <div className={cn(
          "relative aspect-[16/10] lg:aspect-auto lg:min-h-[320px] overflow-hidden",
          !isEven && "lg:order-2"
        )}>
          <img 
            src={image} 
            alt={category.name}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-contain bg-[#e8e8e6] transition-transform duration-700 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-black/10 lg:to-black/50" />
          
          {/* Category badge on image */}
          <div className="absolute bottom-4 left-4 lg:hidden">
            <span className="text-[10px] tracking-[0.2em] uppercase text-white/60 font-medium bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-sm">
              {category.products.length} {category.products.length === 1 ? 'Product' : 'Products'}
            </span>
          </div>
        </div>

        {/* Content side */}
        <div className={cn(
          "flex flex-col",
          !isEven && "lg:order-1"
        )}>
          {/* Header */}
          <div className="p-6 sm:p-8 lg:p-10">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-[2px] bg-accent/50" />
              <span className="text-[10px] tracking-[0.25em] uppercase text-accent font-medium">
                Category {String(index + 1).padStart(2, '0')}
              </span>
            </div>
            <h3 className="font-display text-2xl sm:text-3xl text-foreground mb-2">
              {category.name}
            </h3>
            <p className="text-sm text-muted-foreground font-light mb-5 leading-relaxed">
              {category.description}
            </p>
            
            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 text-primary text-sm font-medium hover:gap-3 transition-all duration-400"
              >
                {isOpen ? "Hide Products" : "View Products"}
                <motion.div
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown size={16} />
                </motion.div>
              </button>
              <span className="hidden sm:block text-xs text-muted-foreground">
                {category.products.length} {category.products.length === 1 ? 'variant' : 'variants'} available
              </span>
            </div>
          </div>

          {/* Products list */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
                className="overflow-hidden"
              >
                <div className="px-6 sm:px-8 lg:px-10 pb-6 sm:pb-8 lg:pb-10">
                  <div className="w-full h-[1px] bg-border/40 mb-4" />
                  <div className="space-y-1.5 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                    {category.products.map((product, i) => (
                      <ProductCard 
                        key={product.id} 
                        product={product} 
                        categoryName={category.name}
                        index={i}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </ScrollReveal>
  );
};

const Products = () => {
  return (
    <Layout>
      {/* Hero Section - Bold & Authoritative */}
      <section className="relative pt-28 pb-20 sm:pt-36 sm:pb-28 hero-gradient noise-overlay overflow-hidden">
        {/* Ambient elements */}
        <div 
          className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full blur-[120px] opacity-20"
          style={{ background: "hsl(var(--accent) / 0.08)" }}
        />
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: "linear-gradient(90deg, white 1px, transparent 1px), linear-gradient(180deg, white 1px, transparent 1px)",
          backgroundSize: "100px 100px",
        }} />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="w-12 h-[1px] bg-accent/50" />
              <p className="text-white/35 text-[10px] tracking-[0.3em] uppercase font-medium">
                Product Portfolio
              </p>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white font-light leading-[1.05] mb-6"
            >
              Engineered for<br />
              <span className="text-gradient-gold">Performance</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-white/35 text-base sm:text-lg max-w-xl leading-relaxed font-light mb-10"
            >
              A comprehensive range of industrial and decorative coatings — 
              formulated for superior protection, durability, and finish quality.
            </motion.p>

            {/* Stats bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex items-center gap-8 sm:gap-12"
            >
              <div>
                <div className="font-display text-3xl sm:text-4xl text-white">{productCategories.length}</div>
                <div className="text-white/25 text-[10px] tracking-[0.2em] uppercase mt-1">Categories</div>
              </div>
              <div className="w-[1px] h-10 bg-white/10" />
              <div>
                <div className="font-display text-3xl sm:text-4xl text-white">
                  {productCategories.reduce((acc, cat) => acc + cat.products.length, 0)}+
                </div>
                <div className="text-white/25 text-[10px] tracking-[0.2em] uppercase mt-1">Products</div>
              </div>
              <div className="w-[1px] h-10 bg-white/10" />
              <div>
                <div className="font-display text-3xl sm:text-4xl text-white">100%</div>
                <div className="text-white/25 text-[10px] tracking-[0.2em] uppercase mt-1">Quality Assured</div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Side text */}
        <div className="absolute right-6 lg:right-12 top-1/2 -translate-y-1/2 hidden lg:block">
          <motion.p 
            className="text-white/8 text-[11px] tracking-[0.4em] uppercase"
            style={{ writingMode: "vertical-rl" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            Premium Coating Solutions
          </motion.p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16 sm:py-24 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          {/* Section intro */}
          <ScrollReveal className="mb-14 sm:mb-20">
            <div className="max-w-2xl">
              <div className="flex items-center gap-4 mb-5">
                <div className="w-12 h-[1px] bg-accent/40" />
                <p className="text-[10px] tracking-[0.3em] uppercase text-accent font-medium">
                  Our Range
                </p>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-foreground mb-4 leading-tight">
                Product Categories
              </h2>
              <p className="text-muted-foreground text-base font-light leading-relaxed">
                From high-performance industrial primers to elegant decorative finishes — 
                every product is engineered to deliver exceptional results.
              </p>
            </div>
          </ScrollReveal>

          {/* Category cards */}
          <div className="space-y-6 sm:space-y-8">
            {productCategories.map((category, index) => (
              <CategorySection
                key={category.id}
                category={category}
                index={index}
              />
            ))}
          </div>

          {/* CTA */}
          <ScrollReveal delay={0.1}>
            <div className="mt-20 sm:mt-28 relative overflow-hidden rounded-sm">
              {/* CTA with dark hero treatment */}
              <div className="hero-gradient noise-overlay py-16 sm:py-20 px-8 sm:px-16 relative">
                <div className="absolute inset-0 opacity-[0.02]" style={{
                  backgroundImage: "linear-gradient(90deg, white 1px, transparent 1px), linear-gradient(180deg, white 1px, transparent 1px)",
                  backgroundSize: "60px 60px",
                }} />
                <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
                  <div className="text-center lg:text-left">
                    <h3 className="font-display text-3xl sm:text-4xl text-white mb-3">
                      Need a Custom Formulation?
                    </h3>
                    <p className="text-white/35 font-light max-w-md text-base">
                      Our R&D team develops tailored coating solutions for your specific industrial requirements.
                    </p>
                  </div>
                  <Button asChild size="lg" className="bg-white text-charcoal hover:bg-white/90 tracking-[0.2em] text-[11px] uppercase px-10 py-7 shrink-0 group">
                    <a
                      href={getWhatsAppUrl(
                        "Hi, I'm looking for a custom paint solution. Please contact me to discuss my requirements.",
                      )}
                      target={EXTERNAL_TARGET}
                      rel="noopener noreferrer"
                      onClick={(e) => {
                        if (EXTERNAL_TARGET !== "_top") return;
                        e.preventDefault();
                        openExternal(
                          getWhatsAppUrl(
                            "Hi, I'm looking for a custom paint solution. Please contact me to discuss my requirements.",
                          ),
                        );
                      }}
                    >
                      <MessageCircle className="mr-2" size={16} />
                      Get in Touch
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default Products;
