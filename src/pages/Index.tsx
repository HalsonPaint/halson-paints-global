import { Link } from "react-router-dom";
import { ArrowRight, ArrowDown } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import ScrollReveal from "@/components/animations/ScrollReveal";
import AnimatedCounter from "@/components/animations/AnimatedCounter";
import TextReveal from "@/components/animations/TextReveal";
import Marquee from "@/components/animations/Marquee";
import ParallaxImage from "@/components/animations/ParallaxImage";

// Import images
import facilityImg from "@/assets/facility.jpg";
import industrialImg from "@/assets/industrial-excellence.jpg";
import decorativeImg from "@/assets/decorative-new.jpg";
import leadershipImg from "@/assets/leadership.jpg";

const highlights = [
  { 
    label: "State-of-the-Art Facility", 
    description: "Advanced manufacturing technology in Vadavali, Maharashtra",
    image: facilityImg,
  },
  { 
    label: "Industrial Excellence", 
    description: "Superior protection for demanding environments",
    image: industrialImg,
  },
  { 
    label: "Decorative Range", 
    description: "Elegant finishes for residential and commercial spaces",
    image: decorativeImg,
  },
  { 
    label: "Expert Leadership", 
    description: "Under the vision of Mr. Om Prakash Tiwari",
    image: leadershipImg,
  },
];

const stats = [
  { value: "15+", label: "Product Categories" },
  { value: "100%", label: "Quality Assured" },
  { value: "24/7", label: "Support" },
];

const sectors = ["Manufacturing", "Construction", "Infrastructure", "Automotive"];

const marqueeItems = [
  "PU Enamel", "Synthetic Enamel", "QD Enamel", "Powder Coating",
  "Hammer Finish", "Primers", "Red Oxide", "Special Shades",
  "Anti-Corrosive", "Epoxy Systems", "Heat Resistant", "Industrial Coatings",
];

const Index = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.8], [1, 0.95]);
  const heroY = useTransform(scrollYProgress, [0, 0.8], [0, 60]);

  return (
    <Layout>
      {/* Hero Section - Cinematic */}
      <section ref={heroRef} className="relative min-h-screen flex items-center hero-gradient noise-overlay pt-32 md:pt-36 overflow-hidden">
        {/* Animated ambient elements - simplified for performance */}
        <div 
          className="absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full blur-[100px] md:blur-[150px] opacity-30 will-change-transform"
          style={{ background: "hsl(var(--primary) / 0.08)" }}
        />
        <div 
          className="absolute bottom-1/4 left-[10%] w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full blur-[80px] md:blur-[120px] opacity-20 will-change-transform"
          style={{ background: "hsl(var(--accent) / 0.06)" }}
        />
        
        {/* Decorative grid lines */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: "linear-gradient(90deg, white 1px, transparent 1px), linear-gradient(180deg, white 1px, transparent 1px)",
          backgroundSize: "120px 120px",
        }} />
        
        <motion.div 
          style={{ opacity: heroOpacity, scale: heroScale, y: heroY }}
          className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10 will-change-transform"
        >
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
              className="flex items-center gap-4 mb-10 sm:mb-12"
            >
              <motion.div 
                className="w-12 h-[1px] bg-accent/60"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.2, delay: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
                style={{ transformOrigin: "left" }}
              />
              <p className="text-white/40 text-[10px] sm:text-[11px] tracking-[0.25em] sm:tracking-[0.3em] uppercase font-medium whitespace-nowrap">
                Industrial & Decorative Coatings
              </p>
            </motion.div>
            
            <div className="mb-8 sm:mb-10">
              <TextReveal as="h1" className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[6.5rem] text-white font-light leading-[1.02] tracking-tight" delay={0.4}>
                Pioneering
              </TextReveal>
              <TextReveal as="h1" className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[6.5rem] text-white font-light leading-[1.02] tracking-tight" delay={0.6}>
                <span className="text-gradient-gold">Protection</span>
                <span className="text-white/30 mx-2 sm:mx-3">&</span>
              </TextReveal>
              <TextReveal as="h1" className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[6.5rem] text-white font-light leading-[1.02] tracking-tight" delay={0.8}>
                Performance
              </TextReveal>
            </div>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2, ease: [0.25, 0.4, 0.25, 1] }}
              className="text-white/40 text-base sm:text-lg md:text-xl max-w-lg mb-12 sm:mb-16 leading-relaxed font-light"
            >
              A distinguished manufacturer of high-performance paints, 
              proudly headquartered in Maharashtra.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-3 sm:gap-5"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4, ease: [0.25, 0.4, 0.25, 1] }}
            >
              <Button 
                asChild 
                className="group bg-white text-charcoal hover:bg-white/90 tracking-[0.2em] text-[11px] uppercase px-8 py-6 transition-all duration-700 w-full sm:w-auto justify-center shadow-lg hover:shadow-xl relative overflow-hidden"
              >
                <Link to="/products">
                  <span className="relative z-10 flex items-center">
                    Explore Products
                    <ArrowRight className="ml-3 h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
                  </span>
                </Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                className="border-white/15 text-white hover:bg-white/5 bg-transparent tracking-[0.2em] text-[11px] uppercase px-8 py-6 transition-all duration-700 w-full sm:w-auto justify-center backdrop-blur-sm hover:border-white/30"
              >
                <Link to="/contact">Contact Us</Link>
              </Button>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <motion.div 
            className="flex flex-col items-center gap-3"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="text-white/20 text-[10px] tracking-[0.3em] uppercase">Scroll</span>
            <div className="w-[1px] h-8 bg-gradient-to-b from-white/30 to-transparent" />
          </motion.div>
        </motion.div>

        {/* Side text */}
        <div className="absolute right-6 lg:right-12 top-1/2 -translate-y-1/2 hidden lg:block">
          <motion.p 
            className="text-white/10 text-[11px] tracking-[0.4em] uppercase writing-vertical"
            style={{ writingMode: "vertical-rl" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 1 }}
          >
            Halson Paints Pvt. Ltd.
          </motion.p>
        </div>
      </section>

      {/* Marquee Ticker */}
      <section className="py-6 sm:py-8 bg-charcoal relative overflow-hidden">
        <Marquee speed={40} className="py-2">
          {marqueeItems.map((item, i) => (
            <span key={i} className="flex items-center gap-12">
              <span className="text-white/25 text-[11px] tracking-[0.25em] uppercase font-light">{item}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-accent/30" />
            </span>
          ))}
        </Marquee>
      </section>

      {/* Stats - Animated */}
      <section className="py-20 sm:py-28 bg-background relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-3 gap-4 sm:gap-8 max-w-3xl mx-auto">
            {stats.map((stat, index) => (
              <ScrollReveal
                key={stat.label}
                delay={index * 0.15}
                className="text-center group"
              >
                <div className="font-display text-4xl sm:text-5xl md:text-6xl text-primary mb-3 sm:mb-4">
                  <AnimatedCounter value={stat.value} />
                </div>
                <div className="text-muted-foreground text-[10px] sm:text-xs tracking-[0.2em] uppercase font-medium">
                  {stat.label}
                </div>
                <motion.div 
                  className="w-6 h-[1px] bg-accent/30 mx-auto mt-4"
                  whileInView={{ width: 32 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.5 + index * 0.15 }}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights Section - Reimagined */}
      <section className="py-20 sm:py-32 bg-background relative noise-overlay">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <ScrollReveal className="text-center mb-16 sm:mb-24">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-12 h-[1px] bg-accent/40" />
              <p className="text-[10px] tracking-[0.3em] uppercase text-accent font-medium">
                Why Choose Us
              </p>
              <div className="w-12 h-[1px] bg-accent/40" />
            </div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-foreground mb-6 leading-tight">
              Our Strengths
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-xl mx-auto text-base sm:text-lg font-light">
              Discover what makes Halson Paints the trusted choice for industrial and decorative coatings.
            </p>
          </ScrollReveal>

          {/* Bento-style grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4">
            {/* Large featured card */}
            <ScrollReveal className="md:col-span-7 group relative aspect-[4/3] md:aspect-auto md:min-h-[480px] overflow-hidden rounded-sm">
              <ParallaxImage 
                src={highlights[0].image}
                alt={highlights[0].label}
                className="absolute inset-0"
                speed={0.15}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/5 transition-all duration-700 group-hover:from-black/90" />
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10 transform transition-all duration-700 group-hover:translate-y-[-4px]">
                <motion.div 
                  className="w-8 h-[2px] bg-accent/60 mb-4"
                  whileInView={{ width: 48 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                />
                <h3 className="font-display text-2xl sm:text-3xl text-white mb-2">
                  {highlights[0].label}
                </h3>
                <p className="text-white/50 text-sm font-light max-w-sm">
                  {highlights[0].description}
                </p>
              </div>
            </ScrollReveal>

            {/* Right column - two stacked */}
            <div className="md:col-span-5 flex flex-col gap-3 sm:gap-4">
              {highlights.slice(1, 3).map((item, index) => (
                <ScrollReveal
                  key={item.label}
                  delay={0.15 + index * 0.1}
                  className="group relative aspect-[4/3] md:aspect-auto md:flex-1 overflow-hidden rounded-sm"
                >
                  <ParallaxImage 
                    src={item.image}
                    alt={item.label}
                    className="absolute inset-0"
                    speed={0.1}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/5 transition-all duration-700 group-hover:from-black/85" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7 transform transition-all duration-700 group-hover:translate-y-[-4px]">
                    <div className="w-6 h-[1px] bg-accent/60 mb-3 transition-all duration-700 group-hover:w-10" />
                    <h3 className="font-display text-xl sm:text-2xl text-white mb-1">
                      {item.label}
                    </h3>
                    <p className="text-white/50 text-xs sm:text-sm font-light">
                      {item.description}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* Full-width bottom card */}
            <ScrollReveal delay={0.3} className="md:col-span-12 group relative aspect-[16/7] sm:aspect-[21/9] overflow-hidden rounded-sm">
              <ParallaxImage 
                src={highlights[3].image}
                alt={highlights[3].label}
                className="absolute inset-0"
                speed={0.12}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-black/10 transition-all duration-700 group-hover:from-black/90" />
              <div className="absolute bottom-0 left-0 p-6 sm:p-10 transform transition-all duration-700 group-hover:translate-y-[-4px]">
                <div className="w-8 h-[1px] bg-accent/60 mb-4 transition-all duration-700 group-hover:w-12" />
                <h3 className="font-display text-2xl sm:text-3xl text-white mb-2">
                  {highlights[3].label}
                </h3>
                <p className="text-white/50 text-sm font-light max-w-md">
                  {highlights[3].description}
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* About Section - Editorial */}
      <section className="py-20 sm:py-32 section-warm relative overflow-hidden">
        {/* Decorative element */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/[0.02] rounded-full blur-[100px]" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
              {/* Left column - headings */}
              <div className="lg:col-span-4">
                <ScrollReveal>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-[1px] bg-accent/40" />
                    <p className="text-[10px] tracking-[0.3em] uppercase text-accent font-medium">
                      Our Story
                    </p>
                  </div>
                  <h2 className="font-display text-4xl sm:text-5xl text-foreground mb-6 leading-tight">
                    About<br />Halson Paints
                  </h2>
                  <div className="w-16 h-[2px] bg-gradient-to-r from-accent/60 to-transparent mb-8" />
                </ScrollReveal>
                
                <ScrollReveal delay={0.2}>
                  <div className="grid grid-cols-2 gap-3">
                    {sectors.map((sector) => (
                      <motion.div 
                        key={sector}
                        className="p-4 bg-background border border-border text-center transition-all duration-500 cursor-default group"
                        whileHover={{ 
                          borderColor: "hsl(var(--primary) / 0.25)",
                          y: -2,
                        }}
                      >
                        <span className="text-xs text-foreground/70 tracking-wide group-hover:text-primary transition-colors duration-500">{sector}</span>
                      </motion.div>
                    ))}
                  </div>
                </ScrollReveal>
              </div>

              {/* Right column - text */}
              <div className="lg:col-span-8">
                <div className="space-y-6 sm:space-y-8">
                  <ScrollReveal>
                    <p className="text-muted-foreground leading-relaxed sm:leading-[1.9] text-base sm:text-lg font-light">
                      Established with a steadfast commitment to excellence, <strong className="text-foreground font-medium">Halson Paints Private Limited</strong> is 
                      a distinguished manufacturer of high-performance industrial and decorative paints, proudly 
                      headquartered in Vadavali, near Thane, Maharashtra.
                    </p>
                  </ScrollReveal>

                  <ScrollReveal delay={0.1}>
                    <p className="text-muted-foreground leading-relaxed sm:leading-[1.9] text-base sm:text-lg font-light">
                      With years of expertise honed in one of India's dynamic industrial hubs, we have built enduring 
                      trust through our extensive offline distribution network and seamless online presence on IndiaMART, 
                      delivering reliable solutions to clients nationwide.
                    </p>
                  </ScrollReveal>

                  <ScrollReveal delay={0.2}>
                    <p className="text-muted-foreground leading-relaxed sm:leading-[1.9] text-base sm:text-lg font-light">
                      At the core of our success is our primary focus on industrial paints – robust, 
                      specialized coatings engineered for superior protection in demanding environments. From 
                      anti-corrosive primers and epoxy systems to heat-resistant and chemical-resistant finishes, 
                      our industrial range safeguards critical assets across diverse sectors.
                    </p>
                  </ScrollReveal>

                  <ScrollReveal delay={0.3}>
                    <div className="pt-6 border-t border-border/60">
                      <blockquote className="font-display text-xl sm:text-2xl text-foreground/80 italic leading-relaxed">
                        "Quality is not just a standard — it's our promise to every client."
                      </blockquote>
                      <p className="text-muted-foreground text-sm mt-4 tracking-wide">
                        — Mr. Om Prakash Tiwari, Founder
                      </p>
                    </div>
                  </ScrollReveal>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Dramatic */}
      <section className="py-24 sm:py-36 hero-gradient noise-overlay relative overflow-hidden">
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] md:w-[800px] md:h-[800px] rounded-full blur-[120px] md:blur-[200px] opacity-30"
          style={{ background: "hsl(var(--accent) / 0.04)" }}
        />
        
        {/* Decorative grid lines */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: "linear-gradient(90deg, white 1px, transparent 1px), linear-gradient(180deg, white 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }} />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal>
              <div className="flex items-center justify-center gap-4 mb-8">
                <div className="w-12 h-[1px] bg-accent/40" />
                <p className="text-[10px] tracking-[0.3em] uppercase text-white/25 font-medium">
                  Get Started
                </p>
                <div className="w-12 h-[1px] bg-accent/40" />
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={0.1}>
              <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-white mb-6 sm:mb-8 leading-tight">
                Ready to Elevate<br />
                <span className="text-gradient-gold">Your Projects?</span>
              </h2>
            </ScrollReveal>
            
            <ScrollReveal delay={0.2}>
              <p className="text-white/35 text-base sm:text-lg mb-12 sm:mb-16 leading-relaxed px-4 sm:px-0 font-light max-w-lg mx-auto">
                Partner with Halson Paints for industrial and decorative excellence 
                that stands the test of time.
              </p>
            </ScrollReveal>
            
            <ScrollReveal delay={0.3}>
              <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-5 px-4 sm:px-0">
                <Button 
                  asChild 
                  className="group bg-white text-charcoal hover:bg-white/90 tracking-[0.2em] text-[11px] uppercase px-8 py-6 transition-all duration-700 w-full sm:w-auto justify-center shadow-lg hover:shadow-xl"
                >
                  <Link to="/products">
                    <span className="flex items-center">
                      View Products
                      <ArrowRight className="ml-3 h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
                    </span>
                  </Link>
                </Button>
                <Button 
                  asChild 
                  variant="outline" 
                  className="border-white/15 text-white hover:bg-white/5 bg-transparent tracking-[0.2em] text-[11px] uppercase px-8 py-6 transition-all duration-700 w-full sm:w-auto justify-center backdrop-blur-sm hover:border-white/30"
                >
                  <Link to="/contact">Get in Touch</Link>
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
