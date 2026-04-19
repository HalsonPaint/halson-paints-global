import { Link } from "react-router-dom";
import { ArrowRight, Shield, Factory, Award, Truck } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Layout from "@/components/layout/Layout";
import ScrollReveal from "@/components/animations/ScrollReveal";
import AnimatedCounter from "@/components/animations/AnimatedCounter";
import Marquee from "@/components/animations/Marquee";

// Hero & lifestyle imagery
import heroTinPortrait from "@/assets/home-hero-tin-portrait.jpg";
import industrialApp from "@/assets/home-industrial-app.jpg";
import decorativeApp from "@/assets/home-decorative-app.jpg";

// Featured product imagery
import puEnamel from "@/assets/products/pu-enamel.jpg";
import syntheticEnamel from "@/assets/products/synthetic-enamel.jpg";
import qdEnamel from "@/assets/products/qd-enamel.jpg";
import primers from "@/assets/products/primers.jpg";
import powderCoating from "@/assets/products/powder-coating.jpg";
import hammerFinish from "@/assets/products/hammer-finish.jpg";

const featuredProducts = [
  { name: "PU Enamel (Super)", tagline: "Premium polyurethane finish", image: puEnamel },
  { name: "Synthetic Enamel", tagline: "Glossy, durable protection", image: syntheticEnamel },
  { name: "QD Enamel", tagline: "Quick-drying high gloss", image: qdEnamel },
  { name: "Primers", tagline: "Engineered surface preparation", image: primers },
  { name: "Powder Coating", tagline: "Industrial-grade finish", image: powderCoating },
  { name: "Hammer Finish", tagline: "Distinctive textured coating", image: hammerFinish },
];

const stats = [
  { value: "15+", label: "Product Categories" },
  { value: "100%", label: "Quality Assured" },
  { value: "24/7", label: "Client Support" },
];

const pillars = [
  {
    icon: Factory,
    title: "Manufacturing Excellence",
    description: "State-of-the-art facility in Vadavali, Maharashtra producing high-performance coatings.",
  },
  {
    icon: Shield,
    title: "Industrial Protection",
    description: "Anti-corrosive, epoxy and heat-resistant systems engineered for demanding environments.",
  },
  {
    icon: Award,
    title: "Trusted Quality",
    description: "Built on decades of expertise under the leadership of Mr. Om Prakash Tiwari.",
  },
  {
    icon: Truck,
    title: "Pan-India Reach",
    description: "Robust offline distribution and seamless online presence on IndiaMART.",
  },
];

const marqueeItems = [
  "PU Enamel", "Synthetic Enamel", "QD Enamel", "Powder Coating",
  "Hammer Finish", "Primers", "Red Oxide", "Special Shades",
  "Anti-Corrosive", "Epoxy Systems", "Heat Resistant", "Industrial Coatings",
];

const Index = () => {
  return (
    <Layout>
      {/* ============ HERO — Editorial Split ============ */}
      <section className="relative bg-background overflow-hidden pt-28 md:pt-36 pb-16 md:pb-0">
        {/* Subtle ambient glows */}
        <div
          className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full blur-[140px] opacity-40 pointer-events-none"
          style={{ background: "hsl(var(--accent) / 0.08)" }}
        />
        <div
          className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full blur-[120px] opacity-30 pointer-events-none"
          style={{ background: "hsl(var(--primary) / 0.05)" }}
        />

        <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center min-h-[calc(100vh-9rem)]">
            {/* LEFT — Text */}
            <div className="lg:col-span-7 order-2 lg:order-1">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex items-center gap-4 mb-8"
              >
                <div className="w-12 h-[1px] bg-accent" />
                <p className="text-[10px] sm:text-[11px] tracking-[0.35em] uppercase text-accent font-medium">
                  Est. Halson Paints Pvt. Ltd.
                </p>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
                className="font-display text-[2.75rem] sm:text-6xl md:text-7xl lg:text-[5.25rem] xl:text-[6rem] text-foreground font-normal leading-[1.02] tracking-[-0.02em] mb-8"
              >
                Coatings that
                <span className="block">
                  <span className="italic text-primary">protect</span>
                  <span className="text-foreground/30 mx-3">&amp;</span>
                </span>
                <span className="italic text-primary">perform.</span>
              </motion.h1>

              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 1, ease: [0.25, 0.4, 0.25, 1] }}
                className="w-20 h-[2px] bg-accent mb-8 origin-left"
              />

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="text-muted-foreground text-base sm:text-lg md:text-xl max-w-xl mb-10 sm:mb-12 leading-relaxed font-light"
              >
                India's trusted manufacturer of premium industrial and decorative paints —
                engineered for excellence, built on quality you can rely on.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.1 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button
                  asChild
                  size="lg"
                  className="group bg-primary text-primary-foreground hover:bg-primary/90 tracking-[0.2em] text-[11px] uppercase px-8 py-6 rounded-none shadow-lg hover:shadow-xl transition-all duration-500"
                >
                  <Link to="/products">
                    Explore Products
                    <ArrowRight className="ml-3 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-foreground/20 text-foreground hover:bg-foreground hover:text-background bg-transparent tracking-[0.2em] text-[11px] uppercase px-8 py-6 rounded-none transition-all duration-500"
                >
                  <Link to="/contact">Request a Quote</Link>
                </Button>
              </motion.div>

              {/* Mini trust strip */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.4 }}
                className="hidden lg:flex items-center gap-8 mt-16 pt-8 border-t border-border/60"
              >
                <div>
                  <div className="font-display text-2xl text-primary leading-none mb-1">15+</div>
                  <div className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground">Categories</div>
                </div>
                <div className="w-px h-10 bg-border" />
                <div>
                  <div className="font-display text-2xl text-primary leading-none mb-1">100%</div>
                  <div className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground">Quality Assured</div>
                </div>
                <div className="w-px h-10 bg-border" />
                <div>
                  <div className="font-display text-2xl text-primary leading-none mb-1">Pan-India</div>
                  <div className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground">Distribution</div>
                </div>
              </motion.div>
            </div>

            {/* RIGHT — Product image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
              className="lg:col-span-5 order-1 lg:order-2 relative"
            >
              <div className="relative aspect-[3/4] max-w-md mx-auto lg:max-w-none lg:h-[80vh] lg:max-h-[760px]">
                {/* Decorative frame */}
                <div className="absolute -inset-3 sm:-inset-4 border border-accent/30 pointer-events-none" />
                <div className="absolute inset-0 overflow-hidden bg-secondary">
                  <img
                    src={heroTinPortrait}
                    alt="Halson Paints premium industrial paint tin"
                    className="w-full h-full object-cover object-center"
                    width={1080}
                    height={1600}
                  />
                </div>
                {/* Caption tag */}
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-background px-4 py-2 border border-border shadow-sm whitespace-nowrap">
                  <p className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
                    Premium · Industrial Grade
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============ Marquee Ticker ============ */}
      <section className="py-5 bg-primary border-y border-primary/40 overflow-hidden">
        <Marquee speed={40}>
          {marqueeItems.map((item, i) => (
            <span key={i} className="flex items-center gap-12">
              <span className="text-primary-foreground/80 text-[11px] tracking-[0.25em] uppercase font-light">
                {item}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            </span>
          ))}
        </Marquee>
      </section>

      {/* ============ Trust Stats ============ */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-3 gap-4 sm:gap-8 max-w-3xl mx-auto">
            {stats.map((stat, index) => (
              <ScrollReveal key={stat.label} delay={index * 0.1} className="text-center">
                <div className="font-display text-4xl sm:text-5xl md:text-6xl text-primary mb-3">
                  <AnimatedCounter value={stat.value} />
                </div>
                <div className="text-muted-foreground text-[10px] sm:text-xs tracking-[0.2em] uppercase font-medium">
                  {stat.label}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ Featured Products Carousel ============ */}
      <section className="py-20 sm:py-28 section-warm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <ScrollReveal className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-6">
            <div className="max-w-xl">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-[2px] bg-accent" />
                <p className="text-[11px] tracking-[0.3em] uppercase text-accent font-medium">
                  Featured Products
                </p>
              </div>
              <h2 className="font-display text-4xl sm:text-5xl text-foreground leading-tight mb-4">
                Engineered for every surface
              </h2>
              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                From industrial enamels to specialty primers — explore our range of
                high-performance coatings.
              </p>
            </div>
            <Button
              asChild
              variant="outline"
              className="border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground tracking-[0.2em] text-[11px] uppercase px-6 py-5 self-start md:self-auto"
            >
              <Link to="/products">
                View All <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <Carousel
              opts={{ align: "start", loop: true }}
              className="w-full"
            >
              <CarouselContent className="-ml-4">
                {featuredProducts.map((product) => (
                  <CarouselItem
                    key={product.name}
                    className="pl-4 basis-[85%] sm:basis-1/2 lg:basis-1/3"
                  >
                    <Link to="/products" className="group block">
                      <div className="relative aspect-[4/5] overflow-hidden bg-[#e8e8e6] rounded-sm border border-border">
                        <img
                          src={product.image}
                          alt={product.name}
                          loading="lazy"
                          className="absolute inset-0 w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      </div>
                      <div className="pt-5">
                        <h3 className="font-display text-xl sm:text-2xl text-foreground mb-1 group-hover:text-primary transition-colors">
                          {product.name}
                        </h3>
                        <p className="text-muted-foreground text-sm">{product.tagline}</p>
                      </div>
                    </Link>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex -left-4 bg-background border-border hover:bg-primary hover:text-primary-foreground" />
              <CarouselNext className="hidden md:flex -right-4 bg-background border-border hover:bg-primary hover:text-primary-foreground" />
            </Carousel>
          </ScrollReveal>
        </div>
      </section>

      {/* ============ Two-Up Solutions Showcase ============ */}
      <section className="py-20 sm:py-28 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <ScrollReveal className="text-center max-w-2xl mx-auto mb-14">
            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="w-10 h-[2px] bg-accent" />
              <p className="text-[11px] tracking-[0.3em] uppercase text-accent font-medium">
                Solutions
              </p>
              <div className="w-10 h-[2px] bg-accent" />
            </div>
            <h2 className="font-display text-4xl sm:text-5xl text-foreground leading-tight">
              Built for industry. Designed for life.
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <ScrollReveal>
              <Link to="/products" className="group relative block aspect-[4/5] md:aspect-[4/5] overflow-hidden rounded-sm">
                <img
                  src={industrialApp}
                  alt="Industrial coatings"
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-10 text-background">
                  <p className="text-[11px] tracking-[0.3em] uppercase text-accent mb-3 font-medium">
                    Industrial
                  </p>
                  <h3 className="font-display text-3xl sm:text-4xl mb-3">
                    Heavy-duty protection
                  </h3>
                  <p className="text-background/80 text-sm sm:text-base mb-5 max-w-md">
                    Anti-corrosive primers, epoxy systems, heat-resistant and chemical-resistant finishes for demanding environments.
                  </p>
                  <span className="inline-flex items-center text-[11px] tracking-[0.2em] uppercase border-b border-accent pb-1 group-hover:gap-3 gap-2 transition-all">
                    Discover Range <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <Link to="/products" className="group relative block aspect-[4/5] overflow-hidden rounded-sm">
                <img
                  src={decorativeApp}
                  alt="Decorative paints"
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-10 text-background">
                  <p className="text-[11px] tracking-[0.3em] uppercase text-accent mb-3 font-medium">
                    Decorative
                  </p>
                  <h3 className="font-display text-3xl sm:text-4xl mb-3">
                    Elegant finishes
                  </h3>
                  <p className="text-background/80 text-sm sm:text-base mb-5 max-w-md">
                    Sophisticated shades and refined textures for residential and commercial spaces that inspire.
                  </p>
                  <span className="inline-flex items-center text-[11px] tracking-[0.2em] uppercase border-b border-accent pb-1 group-hover:gap-3 gap-2 transition-all">
                    Explore Shades <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ============ Why Halson — Pillars ============ */}
      <section className="py-20 sm:py-28 section-warm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <ScrollReveal className="text-center max-w-2xl mx-auto mb-14">
            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="w-10 h-[2px] bg-accent" />
              <p className="text-[11px] tracking-[0.3em] uppercase text-accent font-medium">
                Why Halson
              </p>
              <div className="w-10 h-[2px] bg-accent" />
            </div>
            <h2 className="font-display text-4xl sm:text-5xl text-foreground leading-tight">
              The mark of a serious manufacturer
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <ScrollReveal key={pillar.title} delay={index * 0.1}>
                  <div className="card-luxury h-full p-7 rounded-sm">
                    <div className="w-12 h-12 rounded-sm bg-primary/10 flex items-center justify-center mb-5">
                      <Icon className="h-6 w-6 text-primary" strokeWidth={1.5} />
                    </div>
                    <h3 className="font-display text-xl text-foreground mb-3 leading-tight">
                      {pillar.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ About / Founder Quote ============ */}
      <section className="py-20 sm:py-28 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal>
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="w-10 h-[2px] bg-accent" />
                <p className="text-[11px] tracking-[0.3em] uppercase text-accent font-medium">
                  Our Story
                </p>
                <div className="w-10 h-[2px] bg-accent" />
              </div>
              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed sm:leading-[1.9] mb-10 font-light">
                <strong className="text-foreground font-medium">Halson Paints Private Limited</strong> is
                a distinguished manufacturer of high-performance industrial and decorative paints,
                headquartered in Vadavali, near Thane, Maharashtra. With years of expertise honed in
                one of India's most dynamic industrial hubs, we deliver coating solutions trusted by
                manufacturers nationwide.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="pt-10 border-t border-border max-w-2xl mx-auto">
                <blockquote className="font-display text-2xl sm:text-3xl text-foreground italic leading-relaxed mb-5">
                  "Quality is not just a standard — it's our promise to every client."
                </blockquote>
                <p className="text-muted-foreground text-sm tracking-wide">
                  — Mr. Om Prakash Tiwari, Founder
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="py-20 sm:py-28 bg-primary relative overflow-hidden">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[150px] opacity-20"
          style={{ background: "hsl(var(--accent))" }}
        />
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal>
              <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-primary-foreground mb-6 leading-tight">
                Let's build something
                <span className="block italic text-accent">that lasts.</span>
              </h2>
              <p className="text-primary-foreground/70 text-base sm:text-lg mb-10 max-w-lg mx-auto">
                Partner with Halson Paints for industrial and decorative coatings that perform.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-background text-foreground hover:bg-background/90 tracking-[0.2em] text-[11px] uppercase px-8 py-6"
                >
                  <Link to="/contact">Get in Touch</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent tracking-[0.2em] text-[11px] uppercase px-8 py-6"
                >
                  <Link to="/products">
                    View Products <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
