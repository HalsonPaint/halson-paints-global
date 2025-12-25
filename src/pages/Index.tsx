import { Link } from "react-router-dom";
import { ArrowRight, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";

// Import images
import facilityImg from "@/assets/facility.jpg";
import industrialImg from "@/assets/industrial-excellence.jpg";
import decorativeImg from "@/assets/decorative.jpg";
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
              Protection &<br />
              <span className="text-accent">Performance</span>
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
      <section className="py-24 bg-background border-b border-border">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { value: "15+", label: "Product Categories" },
              { value: "1000+", label: "Clients Served" },
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
      <section className="py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-2xl mb-20">
            <p className="text-xs tracking-luxury uppercase text-muted-foreground mb-4">
              Why Choose Us
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
              Our Strengths
            </h2>
            <p className="text-muted-foreground leading-relaxed">
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
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                <div className="absolute bottom-0 left-0 right-0 p-8">
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

      {/* About Section - Minimal */}
      <section className="py-32 bg-secondary">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <p className="text-xs tracking-luxury uppercase text-muted-foreground mb-4 text-center">
              Our Story
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-16 text-center">
              About Halson Paints
            </h2>

            <div className="space-y-8 text-muted-foreground leading-luxury text-lg">
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
                specialized coatings engineered for superior protection in demanding environments. From 
                anti-corrosive primers and epoxy systems to heat-resistant and chemical-resistant finishes, 
                our industrial range safeguards critical assets across diverse sectors.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
              {[
                "Manufacturing",
                "Construction", 
                "Infrastructure",
                "Automotive"
              ].map((sector, index) => (
                <div 
                  key={sector}
                  className="p-6 bg-background border border-border text-center transition-all duration-700 hover:border-primary/30"
                >
                  <span className="text-sm text-foreground">{sector}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Clean */}
      <section className="py-32 hero-gradient">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-display text-4xl md:text-5xl text-white mb-8">
              Ready to Elevate Your Projects?
            </h2>
            <p className="text-white/60 text-lg mb-12 leading-relaxed">
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
