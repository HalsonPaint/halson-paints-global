import { MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { productCategories } from "@/data/products";
import { openExternal } from "@/lib/openExternal";
import { EXTERNAL_TARGET } from "@/lib/external";
import ProductHero from "@/components/products/ProductHero";
import CategoryCard, { getWhatsAppUrl } from "@/components/products/CategoryCard";

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

const Products = () => {
  return (
    <Layout>
      <ProductHero />

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

          {/* Category cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {productCategories.map((category, index) => (
              <CategoryCard
                key={category.id}
                category={category}
                image={categoryImages[category.id]}
                index={index}
              />
            ))}
          </div>

          {/* CTA */}
          <ScrollReveal delay={0.1}>
            <div className="mt-20 sm:mt-28 relative overflow-hidden rounded-sm">
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
                      href={getWhatsAppUrl("Hi, I'm looking for a custom paint solution. Please contact me to discuss my requirements.")}
                      target={EXTERNAL_TARGET}
                      rel="noopener noreferrer"
                      onClick={(e) => {
                        if (EXTERNAL_TARGET !== "_top") return;
                        e.preventDefault();
                        openExternal(getWhatsAppUrl("Hi, I'm looking for a custom paint solution. Please contact me to discuss my requirements."));
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
