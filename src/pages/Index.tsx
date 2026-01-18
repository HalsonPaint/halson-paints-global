import { Link } from "react-router-dom";
import { ArrowRight, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";

// Import images
import facilityImg from "@/assets/facility.jpg";
import industrialImg from "@/assets/industrial-excellence.jpg";
import decorativeImg from "@/assets/decorative-new.jpg";
import leadershipImg from "@/assets/leadership.jpg";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

const Index = () => {
  const highlights = [
    { 
      label: "State-of-the-Art Facility", 
      description: "Advanced manufacturing technology in Vadavali, Maharashtra",
      image: facilityImg
    },
    { 
      label: "Industrial Excellence", 
      description: "Superior protection for demanding environments",
      image: industrialImg
    },
    { 
      label: "Decorative Range", 
      description: "Elegant finishes for residential and commercial spaces",
      image: decorativeImg
    },
    { 
      label: "Expert Leadership", 
      description: "Under the vision of Mr. Om Prakash Tiwari",
      image: leadershipImg
    },
  ];

  const stats = [
    { value: "15+", label: "Product Categories" },
    { value: "100%", label: "Quality Assured" },
    { value: "24/7", label: "Support" },
  ];

  const sectors = ["Manufacturing", "Construction", "Infrastructure", "Automotive"];

  return (
    <Layout>
      {/* Hero Section - Premium & Immersive */}
      <section className="relative min-h-screen flex items-center hero-gradient pt-20 md:pt-0 overflow-hidden">
        {/* Subtle ambient light effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -left-32 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <motion.div 
            className="max-w-3xl"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <motion.p 
              className="text-white/40 text-xs tracking-[0.3em] uppercase mb-8"
              variants={fadeInUp}
            >
              Industrial & Decorative Coatings
            </motion.p>
            
            <motion.h1 
              className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-white font-light leading-[1.05] mb-8"
              variants={fadeInUp}
            >
              Pioneering<br />
              <span className="sm:whitespace-nowrap">
                <span className="text-accent">Protection</span>
                <span className="inline opacity-60"> & </span>
                Performance
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-white/50 text-base sm:text-lg md:text-xl max-w-lg mb-12 leading-relaxed"
              variants={fadeInUp}
            >
              A distinguished manufacturer of high-performance paints, 
              proudly headquartered in Maharashtra.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              variants={fadeInUp}
            >
              <Button 
                asChild 
                className="btn-glow bg-white text-foreground hover:bg-white/95 tracking-[0.2em] text-xs uppercase px-8 py-6 transition-all duration-500 w-full sm:w-auto justify-center font-medium"
              >
                <Link to="/products">
                  Explore Products
                  <ArrowRight className="ml-3 h-4 w-4" />
                </Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                className="border-white/15 text-white hover:bg-white/5 bg-transparent tracking-[0.2em] text-xs uppercase px-8 py-6 transition-all duration-500 w-full sm:w-auto justify-center backdrop-blur-sm"
              >
                <Link to="/contact">Contact Us</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Elegant scroll indicator */}
        <motion.div 
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown className="text-white/30" size={20} />
          </motion.div>
        </motion.div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Stats Section - Refined */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <motion.div 
            className="grid grid-cols-3 gap-4 sm:gap-8 max-w-3xl mx-auto"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                className="stat-card text-center"
                variants={fadeInUp}
              >
                <div className="font-display text-3xl sm:text-4xl md:text-5xl text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-xs sm:text-sm tracking-wide uppercase">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Highlights Section - Premium Grid */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <motion.div 
            className="text-center mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.p 
              className="text-xs tracking-[0.3em] uppercase text-primary mb-6 font-medium"
              variants={fadeInUp}
            >
              Why Choose Us
            </motion.p>
            <motion.h2 
              className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground mb-8 leading-tight"
              variants={fadeInUp}
            >
              Our Strengths
            </motion.h2>
            <motion.div 
              className="w-20 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-8"
              variants={fadeInUp}
            />
            <motion.p 
              className="text-muted-foreground leading-relaxed max-w-xl mx-auto text-base sm:text-lg"
              variants={fadeInUp}
            >
              Discover what makes Halson Paints the trusted choice for industrial and decorative coatings.
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.label}
                className="group relative aspect-[4/3] overflow-hidden image-reveal"
                variants={fadeInUp}
              >
                <img 
                  src={item.image} 
                  alt={item.label}
                  className="w-full h-full object-cover"
                />
                {/* Premium overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/10 transition-all duration-700 group-hover:from-black/90" />
                
                {/* Accent line */}
                <div className="absolute top-0 left-0 w-0 h-[2px] bg-gradient-to-r from-accent to-primary transition-all duration-700 group-hover:w-1/3" />
                
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 transform transition-all duration-700 group-hover:translate-y-[-8px]">
                  <h3 className="font-display text-xl sm:text-2xl text-white mb-2 tracking-tight">
                    {item.label}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed max-w-xs">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Section - Elegant */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <motion.div 
            className="max-w-4xl mx-auto"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.p 
              className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4 text-center"
              variants={fadeInUp}
            >
              Our Story
            </motion.p>
            <motion.h2 
              className="font-display text-3xl sm:text-4xl md:text-5xl text-foreground mb-12 text-center"
              variants={fadeInUp}
            >
              About Halson Paints
            </motion.h2>

            <motion.div 
              className="space-y-6 text-muted-foreground leading-relaxed sm:leading-loose text-base sm:text-lg"
              variants={fadeInUp}
            >
              <p>
                Established with a steadfast commitment to excellence, <strong className="text-foreground font-medium">Halson Paints Private Limited</strong> is 
                a distinguished manufacturer of high-performance industrial and decorative paints, proudly 
                headquartered in Vadavali, near Thane, Maharashtra.
              </p>

              <p>
                With years of expertise honed in one of India's dynamic industrial hubs, we have built enduring 
                trust through our extensive offline distribution network and seamless online presence on IndiaMART, 
                delivering reliable solutions to clients nationwide.
              </p>

              <p>
                At the core of our success is our primary focus on industrial paints – robust, 
                specialized coatings engineered for superior protection in demanding environments. From 
                anti-corrosive primers and epoxy systems to heat-resistant and chemical-resistant finishes, 
                our industrial range safeguards critical assets across diverse sectors.
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-14"
              variants={fadeInUp}
            >
              {sectors.map((sector) => (
                <div 
                  key={sector}
                  className="sector-tag text-center"
                >
                  <span className="text-xs sm:text-sm text-foreground font-medium tracking-wide">{sector}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section - Premium */}
      <section className="py-24 hero-gradient relative overflow-hidden">
        {/* Ambient effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <motion.div 
            className="max-w-2xl mx-auto text-center"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.h2 
              className="font-display text-3xl sm:text-4xl md:text-5xl text-white mb-6 leading-tight"
              variants={fadeInUp}
            >
              Ready to Elevate Your Projects?
            </motion.h2>
            <motion.p 
              className="text-white/50 text-base sm:text-lg mb-12 leading-relaxed"
              variants={fadeInUp}
            >
              Partner with Halson Paints for industrial and decorative excellence.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row justify-center gap-4"
              variants={fadeInUp}
            >
              <Button 
                asChild 
                className="btn-glow bg-white text-foreground hover:bg-white/95 tracking-[0.2em] text-xs uppercase px-8 py-6 transition-all duration-500 w-full sm:w-auto justify-center font-medium"
              >
                <Link to="/products">
                  View Products
                  <ArrowRight className="ml-3 h-4 w-4" />
                </Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                className="border-white/15 text-white hover:bg-white/5 bg-transparent tracking-[0.2em] text-xs uppercase px-8 py-6 transition-all duration-500 w-full sm:w-auto justify-center backdrop-blur-sm"
              >
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
