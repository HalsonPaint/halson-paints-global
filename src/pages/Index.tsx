import { Link } from "react-router-dom";
import { ArrowRight, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";

// Import images
import facilityImg from "@/assets/facility.jpg";
import industrialImg from "@/assets/industrial-excellence.jpg";
import decorativeImg from "@/assets/decorative-new.jpg";
import leadershipImg from "@/assets/leadership.jpg";

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

  return (
    <Layout>
      {/* Hero Section - Minimal & Clean */}
      <section className="relative min-h-screen flex items-center hero-gradient">
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-3xl">
            <p className="text-white/50 text-xs tracking-luxury uppercase mb-8 opacity-0 animate-fade-in">
              Industrial & Decorative Coatings
            </p>
            
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-white font-light leading-[1.1] mb-8 opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Pioneering<br />
              <span className="whitespace-nowrap"><span className="text-accent">Protection</span> & Performance</span>
            </h1>
            
            <p className="text-white/60 text-lg md:text-xl max-w-lg mb-12 leading-relaxed opacity-0 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              A distinguished manufacturer of high-performance paints, 
              proudly headquartered in Maharashtra.
            </p>
            
            <div className="flex flex-wrap gap-4 opacity-0 animate-fade-in" style={{ animationDelay: "0.6s" }}>
              <Button 
                asChild 
                className="bg-white text-foreground hover:bg-white/90 tracking-luxury text-xs uppercase px-8 py-6 transition-all duration-700"
              >
                <Link to="/products">
                  Explore Products
                  <ArrowRight className="ml-3 h-4 w-4" />
                </Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                className="border-white/20 text-white hover:bg-white/10 bg-transparent tracking-luxury text-xs uppercase px-8 py-6 transition-all duration-700"
              >
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in" style={{ animationDelay: "1s" }}>
          <ArrowDown className="text-white/40 animate-bounce" size={20} />
        </div>
      </section>

      {/* Stats - Minimal */}
      <section className="py-16 bg-background border-b border-border">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            {[
              { value: "15+", label: "Product Categories" },
              { value: "100%", label: "Quality Assured" },
              { value: "24/7", label: "Support" },
            ].map((stat, index) => (
              <div
                key={stat.label}
                className="text-center opacity-0 animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="font-display text-4xl md:text-5xl text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-sm tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights Section - Clean Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16 opacity-0 animate-fade-in">
            <p className="text-xs tracking-[0.3em] uppercase text-primary mb-6 font-medium">
              Why Choose Us
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-8 leading-tight">
              Our Strengths
            </h2>
            <div className="w-16 h-[1px] bg-primary mx-auto mb-8 transition-all duration-1000" />
            <p className="text-muted-foreground leading-relaxed max-w-xl mx-auto text-lg">
              Discover what makes Halson Paints the trusted choice for industrial and decorative coatings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <div
                key={item.label}
                className="group relative aspect-[4/3] overflow-hidden image-reveal opacity-0 animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <img 
                  src={item.image} 
                  alt={item.label}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-700 group-hover:from-black/90" />
                
                <div className="absolute bottom-0 left-0 right-0 p-8 transform transition-transform duration-700 group-hover:translate-y-[-8px]">
                  <h3 className="font-display text-2xl text-white mb-2">
                    {item.label}
                  </h3>
                  <p className="text-white/70 text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section - Paint Splash Design */}
      <section className="relative bg-cream overflow-hidden">
        {/* Paint Splash Top Border */}
        <div className="absolute top-0 left-0 right-0 h-32 md:h-40">
          <svg 
            viewBox="0 0 1440 160" 
            className="w-full h-full" 
            preserveAspectRatio="none"
            fill="none"
          >
            <path 
              d="M0,0 L1440,0 L1440,80 C1300,120 1200,60 1050,90 C900,120 800,70 650,100 C500,130 400,80 250,110 C100,140 50,100 0,120 L0,0 Z" 
              fill="hsl(var(--primary))"
            />
            {/* Paint drips */}
            <ellipse cx="180" cy="115" rx="8" ry="20" fill="hsl(var(--primary))" />
            <ellipse cx="420" cy="125" rx="6" ry="15" fill="hsl(var(--primary))" />
            <ellipse cx="680" cy="118" rx="7" ry="18" fill="hsl(var(--primary))" />
            <ellipse cx="950" cy="110" rx="5" ry="12" fill="hsl(var(--primary))" />
            <ellipse cx="1200" cy="95" rx="6" ry="14" fill="hsl(var(--primary))" />
          </svg>
        </div>

        <div className="container mx-auto px-6 lg:px-12 pt-44 md:pt-52 pb-20">
          <div className="flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto">
            {/* Paint Brush Illustration */}
            <div className="flex-shrink-0 w-48 md:w-64 relative">
              <svg viewBox="0 0 200 300" className="w-full h-auto">
                {/* Paint dripping from brush */}
                <path 
                  d="M60,0 Q55,30 65,50 Q75,70 60,90 Q45,110 70,130 Q95,110 80,90 Q65,70 75,50 Q85,30 80,0 Z" 
                  fill="hsl(var(--primary))"
                />
                <ellipse cx="50" cy="140" rx="8" ry="20" fill="hsl(var(--primary))" />
                <ellipse cx="90" cy="135" rx="6" ry="25" fill="hsl(var(--primary))" />
                
                {/* Brush bristles */}
                <g fill="hsl(var(--gold))">
                  {[...Array(12)].map((_, i) => (
                    <rect 
                      key={i}
                      x={45 + i * 9} 
                      y={150} 
                      width="6" 
                      height="80" 
                      rx="2"
                    />
                  ))}
                </g>
                
                {/* Ferrule (metal band) */}
                <rect x="40" y="225" width="120" height="20" rx="3" fill="#9CA3AF" />
                <rect x="40" y="230" width="120" height="5" fill="#6B7280" />
                
                {/* Handle */}
                <rect x="55" y="245" width="90" height="55" rx="4" fill="#8B5A2B" />
                <rect x="60" y="250" width="5" height="45" fill="#A0522D" opacity="0.5" />
              </svg>
            </div>

            {/* Content */}
            <div className="flex-1 text-center md:text-left">
              <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-foreground mb-8 font-semibold italic tracking-tight">
                ABOUT US
              </h2>

              <div className="space-y-6 text-muted-foreground leading-luxury text-lg max-w-2xl">
                <p>
                  Established with a steadfast commitment to excellence, <strong className="text-foreground">Halson Paints Limited</strong> is 
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
                  specialized coatings engineered for superior protection in demanding environments.
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
                {[
                  "Manufacturing",
                  "Construction", 
                  "Infrastructure",
                  "Automotive"
                ].map((sector) => (
                  <div 
                    key={sector}
                    className="p-5 bg-background border border-border text-center transition-all duration-700 hover:border-primary/30"
                  >
                    <span className="text-sm text-foreground">{sector}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Clean */}
      <section className="py-20 hero-gradient">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-display text-4xl md:text-5xl text-white mb-6">
              Ready to Elevate Your Projects?
            </h2>
            <p className="text-white/60 text-lg mb-10 leading-relaxed">
              Partner with Halson Paints for industrial and decorative excellence.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                asChild 
                className="bg-white text-foreground hover:bg-white/90 tracking-luxury text-xs uppercase px-8 py-6 transition-all duration-700"
              >
                <Link to="/products">
                  View Products
                  <ArrowRight className="ml-3 h-4 w-4" />
                </Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                className="border-white/20 text-white hover:bg-white/10 bg-transparent tracking-luxury text-xs uppercase px-8 py-6 transition-all duration-700"
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
