import { Link } from "react-router-dom";
import {
  ArrowRight,
  ShieldCheck,
  Factory,
  Users,
  Award,
  Network,
  CheckCircle2,
  MapPin,
  Layers,
  Droplets,
  Flame,
  FlaskConical,
  Sparkles,
  Paintbrush,
  Hammer,
  PaintBucket,
} from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import ScrollReveal from "@/components/animations/ScrollReveal";
import AnimatedCounter from "@/components/animations/AnimatedCounter";
import Marquee from "@/components/animations/Marquee";

import facilityImg from "@/assets/facility.jpg";

const trustBadges = [
  { icon: ShieldCheck, title: "Quality You", subtitle: "Can Trust" },
  { icon: Factory, title: "Made in India,", subtitle: "Trusted Nationwide" },
  { icon: Users, title: "Expertise. Innovation.", subtitle: "Excellence." },
];

const strengths = [
  {
    icon: Award,
    title: "Years of Expertise",
    description:
      "With decades of industry experience, we understand the science behind superior coatings.",
  },
  {
    icon: Network,
    title: "Strong Network",
    description:
      "A robust offline distribution network and seamless online presence on IndiaMART.",
  },
  {
    icon: CheckCircle2,
    title: "Reliable Solutions",
    description:
      "Delivering high-performance coatings that meet the toughest industrial challenges.",
  },
];

const stats = [
  { icon: Factory, value: "15+", label: "Product Categories" },
  { icon: MapPin, value: "1", label: "Headquartered in Vadavali, Thane", isText: true },
  { icon: Users, value: "100%", label: "Serving Clients Nationwide", isText: true },
  { icon: ShieldCheck, value: "24/7", label: "High-Performance Support" },
];

const productCategories = [
  { icon: ShieldCheck, name: "Anti-Corrosive", subtitle: "Primers" },
  { icon: Layers, name: "Epoxy", subtitle: "Systems" },
  { icon: Flame, name: "Heat", subtitle: "Resistant" },
  { icon: FlaskConical, name: "Chemical", subtitle: "Resistant" },
  { icon: Sparkles, name: "Decorative", subtitle: "Finishes" },
  { icon: Paintbrush, name: "PU & Synthetic", subtitle: "Enamels" },
  { icon: Hammer, name: "Hammer", subtitle: "Finish" },
  { icon: PaintBucket, name: "Powder", subtitle: "Coating" },
];

const marqueeItems = [
  "PU Enamel", "Synthetic Enamel", "QD Enamel", "Powder Coating",
  "Hammer Finish", "Primers", "Red Oxide", "Special Shades",
  "Anti-Corrosive", "Epoxy Systems", "Heat Resistant", "Industrial Coatings",
];

const Index = () => {
  return (
    <Layout>
      {/* HERO — split layout, light bg with image right */}
      <section className="relative pt-28 md:pt-32 pb-16 md:pb-24 overflow-hidden bg-background">
        {/* Decorative background blobs */}
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-accent/5 blur-3xl pointer-events-none" />
        <div className="absolute top-1/3 right-0 w-[400px] h-[400px] rounded-full bg-primary/5 blur-3xl pointer-events-none" />
        {/* Subtle dot pattern */}
        <div
          className="absolute top-20 left-10 w-40 h-40 opacity-30 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(hsl(var(--accent) / 0.4) 1px, transparent 1px)",
            backgroundSize: "14px 14px",
          }}
        />

        <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* LEFT — copy */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-[1px] bg-accent" />
                <p className="text-[11px] tracking-[0.3em] uppercase text-accent font-medium">
                  Our Story
                </p>
              </div>

              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] text-foreground leading-[1.05] mb-6">
                About <span className="text-primary">Halson Paints</span>
              </h1>

              <div className="w-20 h-[3px] bg-accent mb-8 rounded-full" />

              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-10 max-w-xl font-light">
                <span className="text-foreground font-medium">Halson Paints Private Limited</span>{" "}
                is a trusted manufacturer of high-performance industrial and decorative
                paints, proudly headquartered in Vadavali, near Thane, Maharashtra.
              </p>

              {/* Trust badges */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-10">
                {trustBadges.map((badge, i) => (
                  <motion.div
                    key={badge.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="shrink-0 w-10 h-10 rounded-md bg-accent/10 flex items-center justify-center">
                      <badge.icon className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground leading-tight">
                        {badge.title}
                      </p>
                      <p className="text-sm text-muted-foreground leading-tight">
                        {badge.subtitle}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  className="group bg-primary text-primary-foreground hover:bg-primary/90 tracking-[0.15em] text-xs uppercase px-8 py-6 shadow-lg"
                >
                  <Link to="/products">
                    Explore Products
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-accent text-accent hover:bg-accent hover:text-accent-foreground tracking-[0.15em] text-xs uppercase px-8 py-6"
                >
                  <Link to="/contact">Get Quote</Link>
                </Button>
              </div>
            </motion.div>

            {/* RIGHT — image with brand frame */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.4, 0.25, 1] }}
              className="relative"
            >
              <div className="absolute -top-6 -right-6 w-full h-full bg-primary/10 rounded-sm hidden md:block" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent/20 rounded-full blur-2xl" />
              <div className="relative aspect-[4/3] overflow-hidden rounded-sm shadow-2xl">
                <img
                  src={facilityImg}
                  alt="Halson Paints manufacturing facility"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 via-transparent to-transparent" />
                {/* Floating tag */}
                <div className="absolute bottom-6 left-6 right-6 sm:right-auto bg-background/95 backdrop-blur-sm px-5 py-4 rounded-sm shadow-lg border border-border">
                  <p className="text-[10px] tracking-[0.25em] uppercase text-accent font-medium mb-1">
                    Industrial Coatings
                  </p>
                  <p className="font-display text-lg text-foreground">
                    That Protect & Perform
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Marquee ticker */}
      <section className="py-5 bg-primary relative overflow-hidden">
        <Marquee speed={40} className="py-1">
          {marqueeItems.map((item, i) => (
            <span key={i} className="flex items-center gap-10">
              <span className="text-primary-foreground/70 text-[11px] tracking-[0.25em] uppercase font-light">
                {item}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            </span>
          ))}
        </Marquee>
      </section>

      {/* WHO WE ARE — Strengths */}
      <section className="py-20 sm:py-28 section-warm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <ScrollReveal className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-10 h-[1px] bg-accent" />
              <p className="text-[11px] tracking-[0.3em] uppercase text-accent font-medium">
                Who We Are
              </p>
              <div className="w-10 h-[1px] bg-accent" />
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-foreground mb-4 leading-tight">
              Built on Experience.{" "}
              <span className="text-primary">Driven by Excellence.</span>
            </h2>
            <div className="w-16 h-[3px] bg-accent mx-auto mt-6 rounded-full" />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {strengths.map((s, i) => (
              <ScrollReveal key={s.title} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.4 }}
                  className="group bg-card border border-border rounded-sm p-8 h-full text-center hover:border-accent/40 hover:shadow-xl transition-all duration-500"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-5 group-hover:bg-accent group-hover:scale-110 transition-all duration-500">
                    <s.icon className="w-7 h-7 text-accent group-hover:text-accent-foreground transition-colors" />
                  </div>
                  <h3 className="font-display text-xl text-foreground mb-3">
                    {s.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed font-light">
                    {s.description}
                  </p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* STATS strip — dark band */}
      <section className="py-12 sm:py-16 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05]" style={{
          backgroundImage: "linear-gradient(90deg, white 1px, transparent 1px), linear-gradient(180deg, white 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }} />
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="flex items-center gap-4">
                  <div className="shrink-0 w-12 h-12 rounded-md bg-accent/20 flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    {stat.isText ? (
                      <p className="font-display text-base sm:text-lg text-primary-foreground leading-tight">
                        {stat.label}
                      </p>
                    ) : (
                      <>
                        <p className="font-display text-2xl sm:text-3xl text-primary-foreground leading-tight">
                          <AnimatedCounter value={stat.value} />
                        </p>
                        <p className="text-primary-foreground/60 text-xs tracking-wide">
                          {stat.label}
                        </p>
                      </>
                    )}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* COMMITMENT + Product categories */}
      <section className="py-20 sm:py-28 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <ScrollReveal className="text-center mb-14 max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-10 h-[1px] bg-accent" />
              <p className="text-[11px] tracking-[0.3em] uppercase text-accent font-medium">
                Our Commitment
              </p>
              <div className="w-10 h-[1px] bg-accent" />
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-foreground mb-5 leading-tight">
              Coatings That Protect.{" "}
              <span className="text-primary">Partnerships That Last.</span>
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed font-light">
              From anti-corrosive primers and epoxy systems to heat-resistant and
              chemical-resistant finishes, our industrial range safeguards critical
              assets across diverse sectors.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {productCategories.map((cat, i) => (
              <ScrollReveal key={cat.name} delay={i * 0.05}>
                <Link to="/products" className="block group">
                  <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.3 }}
                    className="bg-card border border-border rounded-sm p-5 sm:p-6 text-center hover:border-accent hover:shadow-lg transition-all duration-500 h-full"
                  >
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-md bg-accent/10 mb-4 group-hover:bg-accent transition-colors duration-500">
                      <cat.icon className="w-6 h-6 text-accent group-hover:text-accent-foreground transition-colors duration-500" />
                    </div>
                    <p className="font-display text-base sm:text-lg text-foreground leading-tight">
                      {cat.name}
                    </p>
                    <p className="text-muted-foreground text-xs tracking-wide mt-0.5">
                      {cat.subtitle}
                    </p>
                  </motion.div>
                </Link>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal className="text-center mt-12">
            <Button
              asChild
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground tracking-[0.15em] text-xs uppercase px-8 py-6 group"
            >
              <Link to="/products">
                View All Products
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>

      {/* Result strip */}
      <section className="py-8 bg-primary border-t border-accent/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <p className="text-primary-foreground/90 text-sm sm:text-base text-center font-light">
            <span className="text-accent font-medium tracking-wide">Result:</span>{" "}
            A modern, professional, and trustworthy partner that builds confidence
            and delivers results.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
