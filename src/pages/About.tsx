import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  ShieldCheck,
  Sparkles,
  Target,
  Compass,
  HeartHandshake,
  Factory,
  Users,
  MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import ScrollReveal from "@/components/animations/ScrollReveal";

import facilityImg from "@/assets/facility.jpg";
import leadershipImg from "@/assets/leadership.jpg";
import industrialImg from "@/assets/industrial-excellence.jpg";

const values = [
  {
    icon: ShieldCheck,
    title: "Quality First",
    desc: "Every batch undergoes rigorous quality control to meet the most demanding industrial standards.",
  },
  {
    icon: Sparkles,
    title: "Innovation",
    desc: "Continuously refining our formulations with advanced coating science and modern technology.",
  },
  {
    icon: HeartHandshake,
    title: "Trust",
    desc: "Long-term relationships built on consistency, reliability, and on-time delivery.",
  },
  {
    icon: Target,
    title: "Performance",
    desc: "Coatings engineered to protect critical assets and outperform in harsh environments.",
  },
];

const milestones = [
  { icon: Factory, value: "Vadavali, Thane", label: "Manufacturing Hub" },
  { icon: Users, value: "Nationwide", label: "Distribution Reach" },
  { icon: Award, value: "15+ Categories", label: "Industrial & Decorative" },
  { icon: MapPin, value: "IndiaMART", label: "Verified Online Presence" },
];

const About = () => {
  return (
    <Layout>
      {/* HERO */}
      <section className="relative bg-charcoal noise-overlay pt-32 md:pt-40 pb-16 sm:pb-24 overflow-hidden">
        <div
          className="absolute top-1/3 right-1/4 w-[500px] h-[500px] rounded-full blur-[120px] opacity-30"
          style={{ background: "hsl(var(--accent) / 0.12)" }}
        />
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="w-8 h-[2px] bg-accent" />
              <p className="text-accent text-[11px] tracking-[0.3em] uppercase font-semibold">
                About Us
              </p>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.1 }}
              className="font-display text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] mb-6"
            >
              Pioneering protection, <br />
              <span className="text-accent">crafted in India.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.25 }}
              className="text-white/65 text-base sm:text-lg max-w-2xl leading-relaxed font-light"
            >
              Halson Paints Private Limited is a distinguished manufacturer of
              high-performance industrial and decorative coatings, headquartered in
              Vadavali, near Thane, Maharashtra — built on decades of expertise and a
              commitment to enduring quality.
            </motion.p>
          </div>
        </div>
      </section>

      {/* STORY — split */}
      <section className="py-20 sm:py-28 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
            <ScrollReveal className="lg:col-span-6">
              <div className="relative rounded-sm overflow-hidden aspect-[4/5]">
                <img
                  src={facilityImg}
                  alt="Halson Paints manufacturing facility"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-charcoal/30 via-transparent to-transparent" />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.15} className="lg:col-span-6">
              <p className="text-accent text-[11px] tracking-[0.3em] uppercase font-semibold mb-4">
                Our Story
              </p>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-foreground leading-tight mb-6">
                Engineered to protect.<br />
                <span className="text-accent">Refined to inspire.</span>
              </h2>
              <div className="w-16 h-[2px] bg-accent/60 mb-8" />
              <div className="space-y-5 text-muted-foreground leading-relaxed text-base sm:text-[17px] font-light">
                <p>
                  Established with a steadfast commitment to excellence, Halson Paints
                  has grown into a trusted name in industrial and decorative coatings
                  across India.
                </p>
                <p>
                  With years of expertise honed in one of India's most dynamic industrial
                  hubs, we have built enduring trust through our extensive offline
                  distribution network and seamless online presence on IndiaMART —
                  delivering reliable solutions to clients nationwide.
                </p>
                <p>
                  At the core of our success is a primary focus on industrial paints —
                  robust, specialized coatings engineered for superior protection in
                  demanding environments.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-20 sm:py-28 bg-secondary/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <ScrollReveal className="text-center mb-14 sm:mb-20 max-w-2xl mx-auto">
            <p className="text-accent text-[11px] tracking-[0.3em] uppercase font-semibold mb-4">
              What Drives Us
            </p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-foreground leading-tight">
              Our Core <span className="text-accent">Values</span>
            </h2>
            <div className="w-16 h-[2px] bg-accent/50 mx-auto mt-6" />
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
            {values.map((v, i) => (
              <ScrollReveal
                key={v.title}
                delay={i * 0.08}
                className="bg-white border border-border rounded-sm p-7 group hover:border-accent/40 hover:-translate-y-1 hover:shadow-[var(--shadow-elevated)] transition-all duration-500"
              >
                <div className="w-12 h-12 mb-5 rounded-md bg-accent/10 border border-accent/30 flex items-center justify-center group-hover:bg-accent/15 transition-colors duration-500">
                  <v.icon className="w-6 h-6 text-accent" strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-xl text-foreground mb-3">{v.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed font-light">
                  {v.desc}
                </p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="py-20 sm:py-28 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
            <ScrollReveal className="lg:col-span-5 order-2 lg:order-1">
              <p className="text-accent text-[11px] tracking-[0.3em] uppercase font-semibold mb-4">
                Leadership
              </p>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-foreground leading-tight mb-6">
                Guided by <span className="text-accent">vision.</span>
              </h2>
              <div className="w-16 h-[2px] bg-accent/60 mb-8" />
              <p className="text-muted-foreground text-base sm:text-[17px] leading-relaxed font-light mb-6">
                Under the steady leadership of Mr. Om Prakash Tiwari, Halson Paints
                continues to grow with a commitment to product integrity, customer trust,
                and long-term partnerships.
              </p>
              <blockquote className="border-l-2 border-accent pl-6 py-2">
                <p className="font-display text-xl sm:text-2xl text-foreground/85 italic leading-relaxed">
                  "Quality is not just a standard — it's our promise to every client."
                </p>
                <footer className="text-muted-foreground text-sm mt-4 tracking-wide">
                  — Mr. Om Prakash Tiwari, Founder
                </footer>
              </blockquote>
            </ScrollReveal>
            <ScrollReveal delay={0.15} className="lg:col-span-7 order-1 lg:order-2">
              <div className="relative rounded-sm overflow-hidden aspect-[16/11]">
                <img
                  src={leadershipImg}
                  alt="Halson Paints leadership"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* MILESTONES STRIP */}
      <section className="bg-charcoal py-12 sm:py-16 noise-overlay relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {milestones.map((m, i) => (
              <ScrollReveal key={m.label} delay={i * 0.08} className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-md bg-accent/15 border border-accent/40 flex items-center justify-center">
                  <m.icon className="w-6 h-6 text-accent" strokeWidth={1.5} />
                </div>
                <p className="text-white text-sm sm:text-base font-medium leading-tight">
                  {m.value}
                </p>
                <p className="text-white/55 text-xs sm:text-[13px] font-light mt-1">
                  {m.label}
                </p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-28 bg-secondary/40 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10 text-center max-w-2xl">
          <ScrollReveal>
            <p className="text-accent text-[11px] tracking-[0.3em] uppercase font-semibold mb-4">
              Partner With Us
            </p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-foreground leading-tight mb-6">
              Let's build something <br />
              <span className="text-accent">that lasts.</span>
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed font-light mb-10 max-w-xl mx-auto">
              Whether it's industrial protection or decorative refinement, our team is
              ready to support your next project.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                asChild
                className="group bg-accent text-white hover:bg-accent/90 tracking-[0.18em] text-[11px] uppercase px-7 py-6"
              >
                <Link to="/contact">
                  <span className="flex items-center">
                    Get in Touch
                    <ArrowRight className="ml-3 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-charcoal/30 text-charcoal hover:bg-charcoal hover:text-white tracking-[0.18em] text-[11px] uppercase px-7 py-6"
              >
                <Link to="/products">View Products</Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default About;
