import { useState } from "react";
import { ChevronDown, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { type Category, type Product } from "@/data/products";
import { cn } from "@/lib/utils";
import { openExternal } from "@/lib/openExternal";
import { EXTERNAL_TARGET } from "@/lib/external";
import ScrollReveal from "@/components/animations/ScrollReveal";

const WHATSAPP_NUMBER = "918369657171";

const getWhatsAppUrl = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

const WhatsAppIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 175.216 175.552" className={className}>
    <defs>
      <linearGradient id="wa-grad" x1="85.915" x2="86.535" y1="32.567" y2="137.092" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#57d163" />
        <stop offset="1" stopColor="#23b33a" />
      </linearGradient>
    </defs>
    <path fill="url(#wa-grad)" d="M87.184 25.227c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.313-6.179 22.558 23.146-6.069 2.235 1.324c9.387 5.571 20.15 8.517 31.126 8.523h.023c33.707 0 61.14-27.426 61.153-61.135a60.75 60.75 0 0 0-17.895-43.251 60.75 60.75 0 0 0-43.235-17.928z" />
    <path fill="#fff" d="M68.772 55.603c-1.378-3.061-2.828-3.123-4.137-3.176l-3.524-.043c-1.226 0-3.218.46-4.902 2.3s-6.435 6.287-6.435 15.332 6.588 17.785 7.506 19.013 12.718 20.381 31.405 27.75c15.529 6.124 18.689 4.906 22.061 4.6s10.877-4.447 12.408-8.74 1.532-7.971 1.073-8.74-1.685-1.226-3.525-2.146-10.877-5.367-12.562-5.981-2.91-.919-4.137.921-4.746 5.979-5.819 7.206-2.144 1.381-3.984.462-7.76-2.861-14.784-9.124c-5.465-4.873-9.154-10.891-10.228-12.73s-.114-2.835.808-3.751c.825-.82 1.838-2.147 2.759-3.22s1.224-1.84 1.836-3.065.307-2.301-.153-3.22-4.032-10.011-5.666-13.647z" />
  </svg>
);

const ProductRow = ({ product, categoryName, index }: { product: Product; categoryName: string; index: number }) => {
  const message = `Hi, I'm interested in the following product:\n\n*Product:* ${product.name}\n*Category:* ${categoryName}\n\nPlease provide more details and pricing.`;
  const whatsappUrl = getWhatsAppUrl(message);

  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, delay: index * 0.02 }}
      className="group"
    >
      <div className="flex items-center justify-between gap-3 py-2.5 px-4 bg-secondary/30 border border-border/30 hover:border-primary/20 transition-all duration-300 rounded-sm hover:bg-secondary/50">
        <div className="flex items-center gap-3 flex-1 min-w-0">
          <div className="w-1.5 h-1.5 rounded-full bg-primary/20 group-hover:bg-primary/50 transition-colors shrink-0" />
          <span className="text-sm text-foreground group-hover:text-primary transition-colors truncate">
            {product.name}
          </span>
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
          className="shrink-0 opacity-30 group-hover:opacity-100 hover:scale-110 transition-all duration-300"
          title="Enquire on WhatsApp"
        >
          <WhatsAppIcon className="w-4 h-4" />
        </a>
      </div>
    </motion.div>
  );
};

interface CategoryCardProps {
  category: Category;
  image: string;
  index: number;
}

const CategoryCard = ({ category, image, index }: CategoryCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ScrollReveal delay={index * 0.04} distance={24}>
      <div className={cn(
        "group rounded-sm overflow-hidden border border-border/50 bg-card transition-all duration-500",
        isOpen ? "border-primary/15 shadow-[var(--shadow-elevated)]" : "hover:border-primary/10 hover:shadow-[var(--shadow-subtle)]"
      )}>
        {/* Product image showcase */}
        <div className="relative aspect-[4/3] overflow-hidden bg-[#e8e8e6] cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          <img
            src={image}
            alt={category.name}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-contain p-6 transition-transform duration-700 group-hover:scale-105"
          />
          {/* Subtle overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Product count badge */}
          <div className="absolute top-4 right-4">
            <span className="text-[9px] tracking-[0.2em] uppercase text-foreground/60 font-medium bg-background/80 backdrop-blur-sm px-3 py-1.5 rounded-sm border border-border/30">
              {category.products.length} {category.products.length === 1 ? 'Product' : 'Products'}
            </span>
          </div>
        </div>

        {/* Category info */}
        <div className="p-5 sm:p-6">
          <h3 className="font-display text-lg sm:text-xl text-foreground mb-1.5 leading-tight">
            {category.name}
          </h3>
          <p className="text-xs text-muted-foreground font-light leading-relaxed mb-4">
            {category.description}
          </p>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-2 text-primary text-xs font-medium hover:gap-3 transition-all duration-300"
          >
            {isOpen ? "Hide Products" : "View All Products"}
            <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
              <ChevronDown size={14} />
            </motion.div>
          </button>
        </div>

        {/* Expandable product list */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
              className="overflow-hidden"
            >
              <div className="px-5 sm:px-6 pb-5 sm:pb-6">
                <div className="w-full h-[1px] bg-border/30 mb-3" />
                <div className="space-y-1 max-h-[350px] overflow-y-auto pr-1 custom-scrollbar">
                  {category.products.map((product, i) => (
                    <ProductRow key={product.id} product={product} categoryName={category.name} index={i} />
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </ScrollReveal>
  );
};

export default CategoryCard;
export { getWhatsAppUrl, WhatsAppIcon };
