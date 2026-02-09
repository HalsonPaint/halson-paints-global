import { useState } from "react";
import { ChevronDown, MessageCircle, Package } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { productCategories, type Category, type Product } from "@/data/products";
import { cn } from "@/lib/utils";
import { openExternal } from "@/lib/openExternal";
import { EXTERNAL_TARGET } from "@/lib/external";

const WHATSAPP_NUMBER = "918369657171";

const getWhatsAppUrl = (message: string) => {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};

const WhatsAppIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 175.216 175.552"
    className="w-6 h-6"
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

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.03 }}
      className="group"
    >
      <div className="p-4 sm:p-5 bg-secondary/30 border border-border/60 hover:border-primary/20 transition-all duration-500 rounded-sm hover:shadow-[var(--shadow-subtle)] hover:bg-secondary/50">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <h4 className="font-display font-medium text-foreground group-hover:text-primary transition-colors duration-500 text-sm sm:text-base">
              {product.name}
            </h4>
            <p className="text-xs sm:text-sm text-muted-foreground mt-1 font-light">{product.description}</p>
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
            className="shrink-0 hover:scale-110 transition-transform duration-300"
            title="Enquire on WhatsApp"
          >
            <WhatsAppIcon />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const CategoryAccordion = ({ category, isOpen, onToggle, index }: { 
  category: Category; 
  isOpen: boolean; 
  onToggle: () => void;
  index: number;
}) => {
  return (
    <ScrollReveal delay={index * 0.05} distance={20}>
      <motion.div 
        className={cn(
          "border border-border/80 overflow-hidden bg-card transition-all duration-500 rounded-sm",
          isOpen && "border-primary/15 shadow-[var(--shadow-elevated)]"
        )}
        layout
      >
        <button
          onClick={onToggle}
          className="w-full p-4 sm:p-6 flex items-center justify-between text-left hover:bg-secondary/20 transition-all duration-500"
        >
          <div className="flex items-center gap-3 sm:gap-4 flex-1 min-w-0">
            <motion.div 
              className={cn(
                "w-10 h-10 sm:w-12 sm:h-12 rounded-sm flex items-center justify-center shrink-0 transition-all duration-500",
                isOpen ? "bg-primary text-primary-foreground" : "bg-primary/8 text-primary"
              )}
              animate={isOpen ? { scale: [1, 1.05, 1] } : {}}
              transition={{ duration: 0.3 }}
            >
              <Package size={20} />
            </motion.div>
            <div className="min-w-0 flex-1">
              <h3 className="font-display text-lg sm:text-xl font-medium text-foreground truncate">
                {category.name}
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground mt-0.5 sm:mt-1 line-clamp-1 font-light">
                {category.description}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 sm:gap-3 ml-2 shrink-0">
            <span className="text-xs text-muted-foreground hidden sm:block tracking-wide">
              {category.products.length} products
            </span>
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
            >
              <ChevronDown className="text-muted-foreground" size={18} />
            </motion.div>
          </div>
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
            >
              <div className="px-4 sm:px-6 pb-6 pt-0">
                <div className="w-full h-[1px] bg-border/60 mb-4" />
                <div className="space-y-2">
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
      </motion.div>
    </ScrollReveal>
  );
};

const Products = () => {
  const [openCategories, setOpenCategories] = useState<Set<string>>(new Set());

  const toggleCategory = (categoryId: string) => {
    setOpenCategories((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(categoryId)) {
        newSet.delete(categoryId);
      } else {
        newSet.add(categoryId);
      }
      return newSet;
    });
  };

  const expandAll = () => {
    setOpenCategories(new Set(productCategories.map((c) => c.id)));
  };

  const collapseAll = () => {
    setOpenCategories(new Set());
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-28 pb-16 sm:pt-36 sm:pb-20 page-hero relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/[0.03] rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-accent/[0.03] rounded-full blur-[80px]" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <ScrollReveal>
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="w-12 h-[1px] bg-accent/40" />
                <p className="text-[10px] tracking-[0.3em] uppercase text-accent font-medium">
                  Our Collection
                </p>
                <div className="w-12 h-[1px] bg-accent/40" />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h1 className="font-display text-5xl sm:text-6xl md:text-7xl text-foreground mb-5 sm:mb-7">
                Our <span className="text-gradient">Products</span>
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-base sm:text-lg text-muted-foreground px-4 sm:px-0 font-light max-w-xl mx-auto leading-relaxed">
                Comprehensive range of industrial and decorative coatings engineered 
                for superior protection and lasting performance.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-12 sm:py-24">
        <div className="container mx-auto px-4">
          {/* Controls */}
          <ScrollReveal>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-10 sm:mb-14 gap-4">
              <p className="text-muted-foreground text-sm">
                <span className="text-foreground font-medium">{productCategories.length}</span> categories · 
                <span className="text-foreground font-medium ml-1">
                  {productCategories.reduce((acc, cat) => acc + cat.products.length, 0)}
                </span> products
              </p>
              <div className="flex gap-2 w-full sm:w-auto">
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={expandAll} 
                  className="font-sans tracking-wide flex-1 sm:flex-none text-xs border-border hover:border-primary/20 transition-all duration-500"
                >
                  Expand All
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={collapseAll} 
                  className="font-sans tracking-wide flex-1 sm:flex-none text-xs border-border hover:border-primary/20 transition-all duration-500"
                >
                  Collapse All
                </Button>
              </div>
            </div>
          </ScrollReveal>

          {/* Categories */}
          <div className="space-y-3">
            {productCategories.map((category, index) => (
              <CategoryAccordion
                key={category.id}
                category={category}
                isOpen={openCategories.has(category.id)}
                onToggle={() => toggleCategory(category.id)}
                index={index}
              />
            ))}
          </div>

          {/* CTA */}
          <ScrollReveal delay={0.1}>
            <div className="mt-20 sm:mt-28 text-center p-10 sm:p-16 bg-card rounded-sm border border-border relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.02] via-transparent to-accent/[0.02]" />
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-[2px] bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
              <div className="relative z-10">
                <h3 className="font-display text-3xl sm:text-4xl text-foreground mb-5">
                  Can't find what you're looking for?
                </h3>
                <p className="text-muted-foreground mb-10 font-light max-w-md mx-auto text-base">
                  We offer custom formulations tailored to your specific requirements.
                </p>
                <Button asChild size="lg" className="tracking-[0.2em] text-[11px] uppercase px-10 py-7">
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
                    <MessageCircle className="mr-2" size={18} />
                    Request Custom Solution
                  </a>
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default Products;
