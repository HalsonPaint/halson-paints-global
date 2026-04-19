import { Link } from "react-router-dom";
import { ArrowRight, Shield, Factory, Palette, Truck, Award, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import ScrollReveal from "@/components/animations/ScrollReveal";
import AnimatedCounter from "@/components/animations/AnimatedCounter";

// Lifestyle imagery
import heroLifestyle from "@/assets/ap-hero-lifestyle.jpg";
import catIndustrial from "@/assets/ap-cat-industrial.jpg";
import catDecorative from "@/assets/ap-cat-decorative.jpg";
import catAutomotive from "@/assets/ap-cat-automotive.jpg";
import inspBridge from "@/assets/ap-insp-bridge.jpg";
import inspWarehouse from "@/assets/ap-insp-warehouse.jpg";
import inspOffice from "@/assets/ap-insp-office.jpg";
import inspCrane from "@/assets/ap-insp-crane.jpg";

const categories = [
  {
    title: "Industrial Coatings",
    tagline: "Heavy-duty protection for plants, pipelines & machinery.",
    image: catIndustrial,
    href: "/products",
  },
  {
    title: "Decorative Paints",
    tagline: "Refined finishes for homes, offices & commercial spaces.",
    image: catDecorative,
    href: "/products",
  },
  {
    title: "Automotive & OEM",
    tagline: "High-gloss enamels engineered for vehicles & equipment.",
    image: catAutomotive,
    href: "/products",
  },
];

const services = [
  { icon: Palette, label: "Shade Catalogue" },
  { icon: Factory, label: "Bulk Orders" },
  { icon: Shield, label: "Industrial Specs" },
  { icon: Truck, label: "Pan-India Supply" },
  { icon: Award, label: "Quality Assured" },
  { icon: Phone, label: "Talk to Expert" },
];

const stats = [
  { value: "15+", label: "Product Categories" },
  { value: "100%", label: "Quality Assured" },
  { value: "500+", label: "Shades Available" },
  { value: "24/7", label: "Client Support" },
];

const inspirations = [
  { image: inspBridge, tag: "Infrastructure", title: "Bridges & Steel Structures" },
  { image: inspWarehouse, tag: "Commercial", title: "Warehouses & Plants" },
  { image: inspOffice, tag: "Interior", title: "Corporate Spaces" },
  { image: inspCrane, tag: "Heavy Industry", title: "Cranes & Equipment" },
];

const Index = () => {
  return (
    <Layout>
      {/* ============ HERO — Full-bleed lifestyle + floating panel ============ */}
      <section className="relative bg-secondary overflow-hidden">
        <div className="relative min-h-[88vh] lg:min-h-[92vh] pt-24 md:pt-28">
          {/* Background lifestyle image */}
          <div className="absolute inset-0">
            <img
              src={heroLifestyle}
              alt="Halson Paints — premium industrial coatings"
              className="w-full h-full object-cover object-center"
              width={1920}
              height={1100}
            />
            {/* Soft gradient for legibility (left side only) */}
            <div className="absolute inset-0 bg-gradient-to-r from-foreground/55 via-foreground/20 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 via-transparent to-transparent" />
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10 h-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[calc(88vh-6rem)] lg:min-h-[calc(92vh-7rem)]">
              {/* LEFT — Headline */}
              <div className="lg:col-span-7">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="flex items-center gap-3 mb-6"
                >
                  <div className="w-12 h-[2px] bg-accent" />
                  <p className="text-[10px] sm:text-[11px] tracking-[0.35em] uppercase text-accent font-medium">
                    Halson Paints Pvt. Ltd.
                  </p>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.4 }}
                  className="font-display text-white text-4xl sm:text-5xl md:text-6xl lg:text-[5rem] xl:text-[5.75rem] font-normal leading-[1.05] tracking-tight mb-6"
                >
                  Coatings that
                  <span className="block">power India's industry.</span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                  className="text-white/85 text-base sm:text-lg md:text-xl max-w-xl mb-10 leading-relaxed font-light"
                >
                  Premium industrial &amp; decorative paints — engineered in Maharashtra,
                  trusted by manufacturers across India.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.9 }}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <Button
                    asChild
                    size="lg"
                    className="group bg-accent text-accent-foreground hover:bg-accent/90 tracking-[0.2em] text-[11px] uppercase px-8 py-6 rounded-none shadow-lg"
                  >
                    <Link to="/products">
                      Explore Products
                      <ArrowRight className="ml-3 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="border-white/40 text-white hover:bg-white hover:text-foreground bg-transparent backdrop-blur-sm tracking-[0.2em] text-[11px] uppercase px-8 py-6 rounded-none"
                  >
                    <Link to="/contact">Request a Quote</Link>
                  </Button>
                </motion.div>
              </div>

              {/* RIGHT — Floating service panel (Asian Paints pattern) */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="lg:col-span-5"
              >
                <div className="bg-background/95 backdrop-blur-xl border border-border shadow-2xl p-8 sm:p-10">
                  <h3 className="font-display text-3xl sm:text-4xl text-foreground mb-2 leading-tight">
                    Find what your
                    <span className="block text-primary italic">project needs</span>
                  </h3>
                  <div className="w-12 h-[2px] bg-accent mt-4 mb-8" />
                  <div className="grid grid-cols-3 gap-4 sm:gap-5">
                    {services.map((service) => {
                      const Icon = service.icon;
                      return (
                        <Link
                          key={service.label}
                          to="/contact"
                          className="group flex flex-col items-center text-center gap-3 p-3 hover:bg-secondary transition-colors duration-300"
                        >
                          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-secondary group-hover:bg-primary flex items-center justify-center transition-colors duration-300">
                            <Icon
                              className="h-5 w-5 sm:h-6 sm:w-6 text-primary group-hover:text-primary-foreground transition-colors duration-300"
                              strokeWidth={1.5}
                            />
                          </div>
                          <span className="text-[10px] sm:text-[11px] tracking-wider text-foreground leading-tight">
                            {service.label}
                          </span>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ CATEGORY TILES (Asian Paints triple row) ============ */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <ScrollReveal className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-[11px] tracking-[0.3em] uppercase text-accent font-medium mb-3">
              Explore Our Range
            </p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-foreground leading-tight">
              Built for every surface
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
            {categories.map((cat, i) => (
              <ScrollReveal key={cat.title} delay={i * 0.1}>
                <Link
                  to={cat.href}
                  className="group relative block aspect-[3/4] overflow-hidden bg-secondary"
                >
                  <img
                    src={cat.image}
                    alt={cat.title}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/95 via-foreground/40 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 text-background">
                    <h3 className="font-display text-2xl sm:text-3xl mb-2 leading-tight">
                      {cat.title}
                    </h3>
                    <p className="text-background/85 text-sm mb-4 max-w-xs">
                      {cat.tagline}
                    </p>
                    <span className="inline-flex items-center gap-2 text-[11px] tracking-[0.25em] uppercase text-accent border-b border-accent/50 pb-1 group-hover:gap-3 transition-all">
                      Explore <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ STATS BAND (colored strip) ============ */}
      <section className="py-14 sm:py-16 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 0.08} className="text-center md:border-r md:last:border-r-0 border-primary-foreground/15">
                <div className="font-display text-4xl sm:text-5xl md:text-6xl text-accent mb-2">
                  <AnimatedCounter value={stat.value} />
                </div>
                <div className="text-primary-foreground/80 text-[10px] sm:text-xs tracking-[0.2em] uppercase font-medium">
                  {stat.label}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ INSPIRATIONS (Asian Paints style gallery) ============ */}
      <section className="py-20 sm:py-28 section-warm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <ScrollReveal className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-6">
            <div className="max-w-xl">
              <p className="text-[11px] tracking-[0.3em] uppercase text-accent font-medium mb-3">
                Inspirations
              </p>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-foreground leading-tight">
                Halson Paints in action
              </h2>
            </div>
            <Button
              asChild
              variant="outline"
              className="border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground tracking-[0.2em] text-[11px] uppercase rounded-none px-6 py-5 self-start md:self-auto"
            >
              <Link to="/products">
                View Products <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </ScrollReveal>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {inspirations.map((insp, i) => (
              <ScrollReveal key={insp.title} delay={i * 0.08}>
                <div className="group relative block aspect-square overflow-hidden bg-secondary">
                  <img
                    src={insp.image}
                    alt={insp.title}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/85 via-foreground/10 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 text-background">
                    <p className="text-[9px] sm:text-[10px] tracking-[0.3em] uppercase text-accent mb-1">
                      {insp.tag}
                    </p>
                    <h4 className="font-display text-base sm:text-lg leading-tight">
                      {insp.title}
                    </h4>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ ABOUT / FOUNDER ============ */}
      <section className="py-20 sm:py-28 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal>
              <p className="text-[11px] tracking-[0.3em] uppercase text-accent font-medium mb-5">
                Our Story
              </p>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-foreground mb-8 leading-tight">
                A serious manufacturer.
                <span className="block text-primary italic">Trusted across India.</span>
              </h2>
              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed sm:leading-[1.9] mb-10 font-light">
                Headquartered in Vadavali, near Thane, Maharashtra,{" "}
                <strong className="text-foreground font-medium">Halson Paints Private Limited</strong>{" "}
                manufactures high-performance industrial and decorative coatings under the leadership
                of Mr. Om Prakash Tiwari. Our extensive distribution network and presence on IndiaMART
                deliver reliable solutions to clients nationwide.
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
      <section className="py-20 sm:py-28 bg-foreground relative overflow-hidden">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[150px] opacity-20"
          style={{ background: "hsl(var(--accent))" }}
        />
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-background mb-6 leading-tight">
                Let's build something
                <span className="block italic text-accent">that lasts.</span>
              </h2>
              <p className="text-background/70 text-base sm:text-lg mb-10 max-w-lg mx-auto">
                Partner with Halson Paints for industrial and decorative coatings that perform.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-accent text-accent-foreground hover:bg-accent/90 tracking-[0.2em] text-[11px] uppercase px-8 py-6 rounded-none"
                >
                  <Link to="/contact">Get in Touch</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-background/30 text-background hover:bg-background hover:text-foreground bg-transparent tracking-[0.2em] text-[11px] uppercase px-8 py-6 rounded-none"
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
