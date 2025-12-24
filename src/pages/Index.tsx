import { Link } from "react-router-dom";
import { ArrowRight, Shield, Factory, Users, Award, Paintbrush, Building2, CheckCircle2 } from "lucide-react";
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
      icon: Factory, 
      label: "State-of-the-Art Facility", 
      description: "Advanced manufacturing in Vadavali, Maharashtra with cutting-edge technology",
      image: facilityImg
    },
    { 
      icon: Shield, 
      label: "Industrial Excellence", 
      description: "Superior protection for demanding environments across industries",
      image: industrialImg
    },
    { 
      icon: Paintbrush, 
      label: "Decorative Range", 
      description: "Elegant finishes for residential & commercial spaces",
      image: decorativeImg
    },
    { 
      icon: Users, 
      label: "Expert Leadership", 
      description: "Under the vision of Mr. Om Prakash Tiwari",
      image: leadershipImg
    },
  ];

  const sectors = [
    { icon: Factory, name: "Manufacturing" },
    { icon: Building2, name: "Construction" },
    { icon: Shield, name: "Infrastructure" },
    { icon: Award, name: "Automotive" },
  ];

  const stats = [
    { value: "15+", label: "Product Categories" },
    { value: "1000+", label: "Happy Clients" },
    { value: "100%", label: "Quality Assured" },
    { value: "24/7", label: "Support" },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden hero-gradient">
        {/* Decorative Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.4%22%3E%3Cpath d=%22M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-8 animate-fade-in">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-white/90 text-sm font-medium tracking-wider uppercase">
                Established Excellence
              </span>
            </div>
            
            <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-6 animate-slide-up leading-tight">
              Pioneering Protection<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">& Performance</span><br />
              in Coatings
            </h1>
            
            <p className="text-xl text-white/80 max-w-2xl mb-10 animate-fade-in leading-relaxed" style={{ animationDelay: "0.2s" }}>
              A distinguished manufacturer of high-performance industrial and decorative paints, 
              proudly headquartered in Vadavali, near Thane, Maharashtra.
            </p>
            
            <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <Button asChild size="lg" className="font-display tracking-wider text-lg px-8 bg-primary hover:bg-primary/90 glow-primary">
                <Link to="/products">
                  Explore Products
                  <ArrowRight className="ml-2" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="font-display tracking-wider text-lg px-8 border-white/30 text-white hover:bg-white/10 bg-white/5">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px]" />
        <div className="absolute right-40 bottom-20 w-80 h-80 bg-accent/15 rounded-full blur-[80px]" />
      </section>

      {/* Stats Section */}
      <section className="py-8 bg-card border-b border-border relative -mt-16 z-20 mx-4 md:mx-8 rounded-2xl shadow-xl">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="text-center p-4 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="font-display text-4xl md:text-5xl font-bold text-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-sm font-medium uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights Section with Images */}
      <section className="py-24 bg-background section-pattern">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold uppercase tracking-wider rounded-full mb-4">
              Why Choose Us
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our <span className="text-gradient">Strengths</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Discover what makes Halson Paints the trusted choice for industrial and decorative coatings
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {highlights.map((item, index) => (
              <div
                key={item.label}
                className="group relative overflow-hidden rounded-2xl card-elevated highlight-card animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Image */}
                <div className="aspect-[16/10] overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.label}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/40 to-transparent" />
                </div>
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                      <item.icon className="text-primary-foreground" size={28} />
                    </div>
                    <div>
                      <h3 className="font-display text-xl md:text-2xl font-bold text-white mb-2">
                        {item.label}
                      </h3>
                      <p className="text-white/80 text-sm md:text-base">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Content Section */}
      <section className="py-24 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold uppercase tracking-wider rounded-full mb-4">
                Our Story
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
                About <span className="text-gradient">Halson Paints</span>
              </h2>
              <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
            </div>

            <div className="bg-card rounded-3xl p-8 md:p-12 shadow-xl border border-border">
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Established with a steadfast commitment to excellence, <strong className="text-foreground">Halson Paints Limited</strong> is 
                  a distinguished manufacturer of high-performance industrial and decorative paints, proudly 
                  headquartered in Vadavali, near Thane, Maharashtra. With years of expertise honed in one 
                  of India's dynamic industrial hubs, we have built enduring trust through our extensive 
                  offline distribution network and seamless online presence on IndiaMART, delivering reliable 
                  solutions to clients nationwide.
                </p>

                <div className="grid md:grid-cols-2 gap-6 py-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={22} />
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Industrial Focus</h4>
                      <p className="text-sm">Robust, specialized coatings for superior protection</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={22} />
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Quality Standards</h4>
                      <p className="text-sm">Compliance with rigorous industry specifications</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={22} />
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Decorative Range</h4>
                      <p className="text-sm">Elegant finishes for aesthetic excellence</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={22} />
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Expert Leadership</h4>
                      <p className="text-sm">Guided by Mr. Om Prakash Tiwari's vision</p>
                    </div>
                  </div>
                </div>

                <p>
                  At the core of our success is our <strong className="text-foreground">primary focus on industrial paints</strong> – robust, 
                  specialized coatings engineered for superior protection in demanding environments. From 
                  anti-corrosive primers and epoxy systems to heat-resistant and chemical-resistant finishes, 
                  our industrial range safeguards critical assets in sectors such as manufacturing, construction, 
                  infrastructure, automotive, and marine applications.
                </p>

                <div className="text-center pt-6 pb-2">
                  <p className="font-display text-2xl md:text-3xl text-foreground font-semibold mb-2">
                    Experience the hallmark of trusted quality.
                  </p>
                  <p className="text-primary text-xl font-medium">
                    Discover the difference today.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sectors Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold uppercase tracking-wider rounded-full mb-4">
              Our Reach
            </span>
            <h2 className="font-display text-4xl font-bold text-foreground mb-4">
              Industries We <span className="text-gradient">Serve</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Our industrial coatings protect critical assets across diverse sectors
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {sectors.map((sector, index) => (
              <div
                key={sector.name}
                className="p-8 bg-card rounded-2xl border border-border text-center card-elevated animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <sector.icon className="text-primary" size={32} />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground">
                  {sector.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden hero-gradient">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.4%22%3E%3Cpath d=%22M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Elevate Your Projects?
            </h2>
            <p className="text-xl text-white/80 mb-10">
              Partner with Halson Paints Limited for your industrial and decorative needs, 
              and elevate your projects with enduring protection and timeless appeal.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="font-display tracking-wider text-lg px-8 bg-white text-charcoal hover:bg-white/90">
                <Link to="/products">
                  View Products
                  <ArrowRight className="ml-2" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="font-display tracking-wider text-lg px-8 border-white/30 text-white hover:bg-white/10 bg-white/5">
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Decorative blurs */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-primary/20 rounded-full blur-[100px]" />
        <div className="absolute right-0 bottom-0 w-80 h-80 bg-accent/15 rounded-full blur-[80px]" />
      </section>
    </Layout>
  );
};

export default Index;