import { Link } from "react-router-dom";
import {
  ArrowRight,
  ShieldCheck,
  Factory,
  Users,
  Award,
  Network,
  ShieldHalf,
  MapPin,
  Sparkles,
  Lightbulb,
  Layers,
  Flame,
  FlaskConical,
  Brush,
  PaintBucket,
} from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import ScrollReveal from "@/components/animations/ScrollReveal";
import Marquee from "@/components/animations/Marquee";

import facilityImg from "@/assets/facility.jpg";

const trustBadges = [
  { icon: ShieldCheck, title: "Quality You Can Trust", desc: "Rigorous QC at every stage" },
  { icon: Factory, title: "Made in India", desc: "Trusted nationwide" },
  { icon: Users, title: "Expertise. Innovation. Excellence.", desc: "Decades of coating science" },
];

const pillars = [
  {
    icon: Award,
    title: "Years of Expertise",
    desc: "With decades of industry experience, we understand the science behind superior coatings.",
  },
  {
    icon: Network,
    title: "Strong Network",
    desc: "A robust offline distribution network and a seamless online presence on IndiaMART.",
  },
  {
    icon: ShieldHalf,
    title: "Reliable Solutions",
    desc: "Delivering high-performance coatings that meet the toughest industrial challenges.",
  },
];

const stats = [
  { icon: Factory, value: "Years", label: "of Experience" },
  { icon: MapPin, value: "Headquartered in", label: "Vadavali, Thane" },
  { icon: Users, value: "Serving Clients", label: "Nationwide" },
  { icon: ShieldCheck, value: "High-Performance", label: "Industrial Coatings" },
];

const categories = [
  { icon: ShieldHalf, label: "Anti-Corrosive Primers" },
  { icon: Layers, label: "Epoxy Systems" },
  { icon: Flame, label: "Heat Resistant" },
  { icon: FlaskConical, label: "Chemical Resistant" },
  { icon: Brush, label: "Decorative Finishes" },
];

const marqueeItems = [
  "PU Enamel", "Synthetic Enamel", "QD Enamel", "Powder Coating",
  "Hammer Finish", "Primers", "Red Oxide", "Special Shades",
  "Anti-Corrosive", "Epoxy Systems", "Heat Resistant", "Industrial Coatings",
];

const Index = () => {
  return (
    <Layout>
      {/* ============ HERO — split layout ============ */}
      <section className="relative bg-charcoal noise-overlay pt-28 md:pt-32 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center min-h-[calc(100vh-7rem)] py-12 lg:py-20">
            {/* Left — copy */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.25, 0.4, 0.25, 1] }}
              className="lg:col-span-6 relative z-10"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="w-8 h-[2px] bg-accent" />
                <p className="text-accent text-[11px] tracking-[0.3em] uppercase font-semibold">
                  Our Story
                </p>
              </div>

              <h1 className="font-display text-white text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] leading-[1.05] font-medium mb-6">
                About <span className="block">Halson Paints</span>
              </h1>

              <div className="w-20 h-[3px] bg-accent mb-7" />

              <p className="text-white/70 text-base sm:text-lg leading-relaxed max-w-xl mb-10 font-light">
                Halson Paints Private Limited is a trusted manufacturer of high-performance
                industrial and decorative paints, proudly headquartered in Vadavali, near
                Thane, Maharashtra.
              </p>

              {/* Trust badges row */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-10">
                {trustBadges.map((b, i) => (
                  <motion.div
                    key={b.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + i * 0.1, duration: 0.6 }}
                    className="flex items-start gap-3"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-md bg-accent/10 border border-accent/30 flex items-center justify-center">
                      <b.icon className="w-5 h-5 text-accent" strokeWidth={1.6} />
                    </div>
                    <div>
                      <p className="text-white text-xs sm:text-[13px] font-medium leading-tight">
                        {b.title}
                      </p>
                      <p className="text-white/45 text-[11px] mt-1 leading-snug">{b.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  asChild
                  className="group bg-accent text-white hover:bg-accent/90 tracking-[0.18em] text-[11px] uppercase px-7 py-6 transition-all"
                >
                  <Link to="/products">
                    <span className="flex items-center">
                      Explore Products
                      <ArrowRight className="ml-3 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-white/25 text-white hover:bg-white/10 bg-transparent tracking-[0.18em] text-[11px] uppercase px-7 py-6"
                >
                  <Link to="/contact">Get a Quote</Link>
                </Button>
              </div>
            </motion.div>

            {/* Right — image */}
            <motion.div
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: [0.25, 0.4, 0.25, 1] }}
              className="lg:col-span-6 relative h-[320px] sm:h-[420px] lg:h-[560px] hero-clip-image rounded-sm overflow-hidden"
            >
              <img
                src={facilityImg}
                alt="Halson Paints industrial coatings facility"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-charcoal/60 via-charcoal/10 to-transparent" />
              {/* Premium product chip */}
              <div className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8 bg-charcoal/90 backdrop-blur-md border border-white/10 px-5 py-4 rounded-sm shadow-xl">
                <p className="text-white font-display text-lg sm:text-xl leading-none">
                  Halson <span className="text-accent">Paints</span>
                </p>
                <p className="text-white/50 text-[10px] tracking-[0.25em] uppercase mt-2">
                  Industrial Coatings
                </p>
                <p className="text-white/35 text-[9px] tracking-[0.2em] uppercase mt-0.5">
                  That Protect &amp; Perform
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============ WHO WE ARE — 3 pillars ============ */}
      <section className="py-20 sm:py-28 bg-secondary/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <ScrollReveal className="text-center mb-14 sm:mb-20 max-w-2xl mx-auto">
            <p className="text-accent text-[11px] tracking-[0.3em] uppercase font-semibold mb-4">
              Who We Are
            </p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-foreground leading-tight">
              Built on Experience.{" "}
              <span className="text-accent">Driven by Excellence.</span>
            </h2>
            <div className="w-16 h-[2px] bg-accent/50 mx-auto mt-6" />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10 max-w-6xl mx-auto">
            {pillars.map((p, i) => (
              <ScrollReveal
                key={p.title}
                delay={i * 0.1}
                className="bg-white border border-border rounded-sm p-8 text-center group hover:border-accent/40 hover:shadow-[var(--shadow-elevated)] transition-all duration-500"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center group-hover:bg-accent/15 transition-colors duration-500">
                  <p.icon className="w-7 h-7 text-accent" strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-xl text-foreground mb-3">{p.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed font-light">
                  {p.desc}
                </p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ STATS STRIP — navy band ============ */}
      <section className="bg-charcoal py-10 sm:py-14 relative noise-overlay">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {stats.map((s, i) => (
              <ScrollReveal
                key={s.label}
                delay={i * 0.08}
                className="flex items-center gap-4 justify-center lg:justify-start"
              >
                <div className="w-12 h-12 flex-shrink-0 rounded-md bg-accent/15 border border-accent/40 flex items-center justify-center">
                  <s.icon className="w-6 h-6 text-accent" strokeWidth={1.5} />
                </div>
                <div className="text-left">
                  <p className="text-white text-sm sm:text-[15px] font-medium leading-tight">
                    {s.value}
                  </p>
                  <p className="text-white/55 text-xs sm:text-[13px] font-light leading-tight mt-0.5">
                    {s.label}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ MARQUEE TICKER ============ */}
      <section className="py-5 bg-navy-deep border-y border-white/5 relative overflow-hidden">
        <Marquee speed={40} className="py-1">
          {marqueeItems.map((item, i) => (
            <span key={i} className="flex items-center gap-12">
              <span className="text-white/30 text-[11px] tracking-[0.25em] uppercase font-light">
                {item}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-accent/40" />
            </span>
          ))}
        </Marquee>
      </section>

      {/* ============ PRODUCT RANGE ============ */}
      <section className="py-20 sm:py-28 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <ScrollReveal className="text-center mb-14 sm:mb-20 max-w-2xl mx-auto">
            <p className="text-accent text-[11px] tracking-[0.3em] uppercase font-semibold mb-4">
              Our Commitment
            </p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-foreground leading-tight">
              Coatings That Protect.{" "}
              <span className="text-accent">Partnerships That Last.</span>
            </h2>
            <p className="text-muted-foreground mt-6 text-base sm:text-lg leading-relaxed font-light">
              From anti-corrosive primers and epoxy systems to heat-resistant and
              chemical-resistant finishes, our industrial range safeguards critical
              assets across diverse sectors.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5 max-w-6xl mx-auto">
            {categories.map((c, i) => (
              <ScrollReveal
                key={c.label}
                delay={i * 0.06}
                className="bg-white border border-border rounded-sm p-6 sm:p-7 text-center group hover:border-accent/40 hover:-translate-y-1 hover:shadow-[var(--shadow-elevated)] transition-all duration-500 cursor-default"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-full border border-foreground/15 flex items-center justify-center group-hover:border-accent/50 group-hover:bg-accent/5 transition-all duration-500">
                  <c.icon className="w-5 h-5 text-foreground/70 group-hover:text-accent transition-colors duration-500" strokeWidth={1.5} />
                </div>
                <p className="text-foreground text-sm font-medium leading-snug">
                  {c.label}
                </p>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.3} className="mt-12 text-center">
            <Button
              asChild
              className="group bg-charcoal text-white hover:bg-charcoal/90 tracking-[0.18em] text-[11px] uppercase px-8 py-6"
            >
              <Link to="/products">
                <span className="flex items-center">
                  View All Products
                  <ArrowRight className="ml-3 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>

      {/* ============ RESULT CTA BAND ============ */}
      <section className="bg-charcoal py-10 sm:py-12 noise-overlay relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <ScrollReveal className="flex flex-col md:flex-row items-start md:items-center gap-5 md:gap-8">
            <div className="flex items-center gap-3 flex-shrink-0">
              <Lightbulb className="w-6 h-6 text-accent" strokeWidth={1.6} />
              <p className="text-accent text-[11px] tracking-[0.3em] uppercase font-semibold">
                Result
              </p>
            </div>
            <p className="text-white/85 text-sm sm:text-base font-light leading-relaxed flex-1">
              A modern, professional, and trustworthy partner that builds confidence and
              delivers coatings engineered to perform — project after project.
            </p>
            <Button
              asChild
              className="bg-accent text-white hover:bg-accent/90 tracking-[0.18em] text-[11px] uppercase px-7 py-5 flex-shrink-0"
            >
              <Link to="/contact">
                <span className="flex items-center">
                  Get in Touch
                  <ArrowRight className="ml-3 h-4 w-4" />
                </span>
              </Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
