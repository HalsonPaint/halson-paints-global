import { Link } from "react-router-dom";
import { ArrowRight, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";

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

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center hero-gradient noise-overlay pt-20 md:pt-0 overflow-hidden">
        {/* Ambient glow elements */}
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] animate-pulse-soft" />
        <div className="absolute bottom-1/3 left-1/6 w-[300px] h-[300px] bg-accent/5 rounded-full blur-[100px] animate-pulse-soft" style={{ animationDelay: "1.5s" }} />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-8 sm:mb-10 opacity-0 animate-fade-in">
              <div className="w-8 h-[1px] bg-accent/60" />
              <p className="text-white/40 text-xs tracking-wide-luxury uppercase">
                Industrial & Decorative Coatings
              </p>
            </div>
            
            <h1 className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-white font-light leading-[1.05] mb-6 sm:mb-8 opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Pioneering<br />
              <span className="sm:whitespace-nowrap">
                <span className="text-gradient-gold">Protection</span>
                <span className="inline text-white/40"> & </span>
                Performance
              </span>
            </h1>
            
            <p className="text-white/50 text-base sm:text-lg md:text-xl max-w-lg mb-10 sm:mb-14 leading-relaxed opacity-0 animate-fade-in font-light" style={{ animationDelay: "0.4s" }}>
              A distinguished manufacturer of high-performance paints, 
              proudly headquartered in Maharashtra.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 opacity-0 animate-fade-in" style={{ animationDelay: "0.6s" }}>
              <Button 
                asChild 
                className="bg-white text-foreground hover:bg-white/90 tracking-luxury text-xs uppercase px-6 sm:px-8 py-5 sm:py-6 transition-all duration-700 w-full sm:w-auto justify-center shadow-lg hover:shadow-xl"
              >
                <Link to="/products">
                  Explore Products
                  <ArrowRight className="ml-3 h-4 w-4" />
                </Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                className="border-white/15 text-white hover:bg-white/5 bg-transparent tracking-luxury text-xs uppercase px-6 sm:px-8 py-5 sm:py-6 transition-all duration-700 w-full sm:w-auto justify-center backdrop-blur-sm"
              >
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in" style={{ animationDelay: "1.2s" }}>
          <div className="flex flex-col items-center gap-2">
            <span className="text-white/25 text-[10px] tracking-wide-luxury uppercase">Scroll</span>
            <ArrowDown className="text-white/30 animate-bounce" size={16} />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-14 sm:py-20 bg-background relative">
        <div className="section-divider absolute top-0 left-0 right-0" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-3 gap-4 sm:gap-8 max-w-2xl mx-auto">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="text-center opacity-0 animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="font-display text-3xl sm:text-4xl md:text-5xl text-primary mb-2 sm:mb-3">
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-[11px] sm:text-xs tracking-luxury uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="section-divider absolute bottom-0 left-0 right-0" />
      </section>

      {/* Highlights Section */}
      <section className="py-16 sm:py-24 bg-background relative noise-overlay">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <div className="text-center mb-12 sm:mb-20 opacity-0 animate-fade-in">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-8 h-[1px] bg-accent/40" />
              <p className="text-[11px] tracking-wide-luxury uppercase text-accent font-medium">
                Why Choose Us
              </p>
              <div className="w-8 h-[1px] bg-accent/40" />
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 sm:mb-8 leading-tight">
              Our Strengths
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-xl mx-auto text-base sm:text-lg px-4 sm:px-0 font-light">
              Discover what makes Halson Paints the trusted choice for industrial and decorative coatings.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {highlights.map((item, index) => (
              <div
                key={item.label}
                className="group relative aspect-[4/3] overflow-hidden opacity-0 animate-fade-in rounded-sm"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <img 
                  src={item.image} 
                  alt={item.label}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/5 transition-all duration-700 group-hover:from-black/85 group-hover:via-black/35" />
                
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8 transform transition-all duration-700 group-hover:translate-y-[-4px]">
                  <div className="w-6 h-[1px] bg-accent/60 mb-3 transition-all duration-700 group-hover:w-10" />
                  <h3 className="font-display text-xl sm:text-2xl text-white mb-1 sm:mb-2">
                    {item.label}
                  </h3>
                  <p className="text-white/60 text-xs sm:text-sm font-light">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 sm:py-24 section-warm relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="w-8 h-[1px] bg-accent/40" />
              <p className="text-[11px] tracking-wide-luxury uppercase text-accent font-medium">
                Our Story
              </p>
              <div className="w-8 h-[1px] bg-accent/40" />
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-foreground mb-10 sm:mb-14 text-center">
              About Halson Paints
            </h2>

            <div className="space-y-5 sm:space-y-7 text-muted-foreground leading-relaxed sm:leading-luxury text-base sm:text-lg font-light">
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
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mt-10 sm:mt-14">
              {sectors.map((sector) => (
                <div 
                  key={sector}
                  className="p-4 sm:p-6 bg-background border border-border text-center transition-all duration-700 hover:border-primary/20 hover:shadow-[var(--shadow-elevated)] group"
                >
                  <span className="text-xs sm:text-sm text-foreground tracking-wide group-hover:text-primary transition-colors duration-500">{sector}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 hero-gradient noise-overlay relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/3 rounded-full blur-[150px]" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-8 h-[1px] bg-accent/40" />
              <p className="text-[11px] tracking-wide-luxury uppercase text-white/30">
                Get Started
              </p>
              <div className="w-8 h-[1px] bg-accent/40" />
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-white mb-5 sm:mb-7">
              Ready to Elevate Your Projects?
            </h2>
            <p className="text-white/45 text-base sm:text-lg mb-10 sm:mb-12 leading-relaxed px-4 sm:px-0 font-light">
              Partner with Halson Paints for industrial and decorative excellence.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 px-4 sm:px-0">
              <Button 
                asChild 
                className="bg-white text-foreground hover:bg-white/90 tracking-luxury text-xs uppercase px-6 sm:px-8 py-5 sm:py-6 transition-all duration-700 w-full sm:w-auto justify-center shadow-lg hover:shadow-xl"
              >
                <Link to="/products">
                  View Products
                  <ArrowRight className="ml-3 h-4 w-4" />
                </Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                className="border-white/15 text-white hover:bg-white/5 bg-transparent tracking-luxury text-xs uppercase px-6 sm:px-8 py-5 sm:py-6 transition-all duration-700 w-full sm:w-auto justify-center backdrop-blur-sm"
              >
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
