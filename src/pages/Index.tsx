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
        {/* Subtle Pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2280%22 height=%2280%22 viewBox=%220 0 80 80%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%221%22%3E%3Cpath d=%22M40 40h2v2h-2zM0 40h2v2H0zM40 0h2v2h-2z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-white/10 backdrop-blur-sm border border-white/15 rounded-full mb-10 animate-fade-in">
              <span className="w-1.5 h-1.5 bg-accent rounded-full" />
              <span className="text-white/80 text-sm tracking-widest uppercase" style={{ fontFamily: 'Georgia, serif', letterSpacing: '0.2em' }}>
                Established Excellence
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl text-white mb-8 animate-slide-up leading-[1.1]" style={{ fontFamily: 'Georgia, serif', fontWeight: 400 }}>
              Pioneering Protection<br />
              <span className="text-accent">& Performance</span><br />
              in Coatings
            </h1>
            
            <p className="text-lg md:text-xl text-white/70 max-w-2xl mb-12 animate-fade-in leading-relaxed" style={{ animationDelay: "0.2s", fontFamily: 'Georgia, serif', fontWeight: 300 }}>
              A distinguished manufacturer of high-performance industrial and decorative paints, 
              proudly headquartered in Vadavali, near Thane, Maharashtra.
            </p>
            
            <div className="flex flex-wrap gap-5 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <Button asChild size="lg" className="tracking-widest text-sm px-10 py-6 bg-accent hover:bg-accent/90 text-accent-foreground uppercase" style={{ letterSpacing: '0.15em' }}>
                <Link to="/products">
                  Explore Products
                  <ArrowRight className="ml-3 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="tracking-widest text-sm px-10 py-6 border-white/25 text-white hover:bg-white/10 bg-transparent uppercase" style={{ letterSpacing: '0.15em' }}>
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Elegant gradient overlays */}
        <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-primary/10 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background/20 to-transparent" />
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-secondary/60">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2" style={{ fontFamily: 'Georgia, serif' }}>
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-sm font-medium tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights Section with Images */}
      <section className="py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <span className="inline-block px-5 py-2 border border-primary/30 text-primary text-xs tracking-[0.2em] uppercase mb-6" style={{ fontFamily: 'Georgia, serif' }}>
              Why Choose Us
            </span>
            <h2 className="text-4xl md:text-5xl text-foreground mb-5" style={{ fontFamily: 'Georgia, serif', fontWeight: 400 }}>
              Our <span className="text-primary">Strengths</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-lg leading-relaxed" style={{ fontFamily: 'Georgia, serif' }}>
              Discover what makes Halson Paints the trusted choice for industrial and decorative coatings
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {highlights.map((item, index) => (
              <div
                key={item.label}
                className="group relative overflow-hidden card-elevated highlight-card animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Image */}
                <div className="aspect-[16/10] overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.label}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/95 via-charcoal/50 to-charcoal/10" />
                </div>
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-7 md:p-9">
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 bg-accent/90 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl text-white mb-2" style={{ fontFamily: 'Georgia, serif', fontWeight: 500 }}>
                        {item.label}
                      </h3>
                      <p className="text-white/70 text-sm md:text-base leading-relaxed">
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
      <section className="py-28 bg-secondary/40">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block px-5 py-2 border border-primary/30 text-primary text-xs tracking-[0.2em] uppercase mb-6" style={{ fontFamily: 'Georgia, serif' }}>
                Our Story
              </span>
              <h2 className="text-4xl md:text-5xl text-foreground mb-6" style={{ fontFamily: 'Georgia, serif', fontWeight: 400 }}>
                About <span className="text-primary">Halson Paints</span>
              </h2>
              <div className="w-16 h-0.5 bg-accent mx-auto" />
            </div>

            <div className="bg-card rounded-2xl p-8 md:p-14 elegant-shadow border border-border/50">
              <div className="space-y-8 text-muted-foreground leading-relaxed" style={{ fontFamily: 'Georgia, serif' }}>
                <p className="text-lg">
                  Established with a steadfast commitment to excellence, <strong className="text-foreground font-medium">Halson Paints Limited</strong> is 
                  a distinguished manufacturer of high-performance industrial and decorative paints, proudly 
                  headquartered in Vadavali, near Thane, Maharashtra.
                </p>

                <p className="text-lg">
                  With years of expertise honed in one of India's dynamic industrial hubs, we have built enduring 
                  trust through our extensive offline distribution network and seamless online presence on IndiaMART, 
                  delivering reliable solutions to clients nationwide.
                </p>

                <div className="grid md:grid-cols-2 gap-5 py-8">
                  {[
                    { title: "Industrial Focus", desc: "Robust, specialized coatings for superior protection" },
                    { title: "Quality Standards", desc: "Compliance with rigorous industry specifications" },
                    { title: "Decorative Range", desc: "Elegant finishes for aesthetic excellence" },
                    { title: "Expert Leadership", desc: "Guided by Mr. Om Prakash Tiwari's vision" }
                  ].map((item) => (
                    <div key={item.title} className="flex items-start gap-4 p-4 bg-secondary/50 rounded-lg">
                      <CheckCircle2 className="text-primary mt-0.5 flex-shrink-0" size={20} />
                      <div>
                        <h4 className="font-medium text-foreground mb-1" style={{ fontFamily: 'Georgia, serif' }}>{item.title}</h4>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <p className="text-lg">
                  At the core of our success is our <strong className="text-foreground font-medium">primary focus on industrial paints</strong> – robust, 
                  specialized coatings engineered for superior protection in demanding environments. From 
                  anti-corrosive primers and epoxy systems to heat-resistant and chemical-resistant finishes, 
                  our industrial range safeguards critical assets across diverse sectors.
                </p>

                <div className="text-center pt-8 pb-2 border-t border-border/50">
                  <p className="text-2xl md:text-3xl text-foreground mb-3" style={{ fontFamily: 'Georgia, serif', fontWeight: 400 }}>
                    Experience the hallmark of trusted quality.
                  </p>
                  <p className="text-accent text-lg" style={{ fontFamily: 'Georgia, serif' }}>
                    Discover the difference today.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sectors Section */}
      <section className="py-28 bg-background section-pattern">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-5 py-2 border border-primary/30 text-primary text-xs tracking-[0.2em] uppercase mb-6" style={{ fontFamily: 'Georgia, serif' }}>
              Our Reach
            </span>
            <h2 className="text-4xl text-foreground mb-4" style={{ fontFamily: 'Georgia, serif', fontWeight: 400 }}>
              Industries We <span className="text-primary">Serve</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-lg" style={{ fontFamily: 'Georgia, serif' }}>
              Our industrial coatings protect critical assets across diverse sectors
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 max-w-4xl mx-auto">
            {sectors.map((sector, index) => (
              <div
                key={sector.name}
                className="p-8 bg-card rounded-xl border border-border/50 text-center card-elevated animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <sector.icon className="text-primary" size={28} />
                </div>
                <h3 className="text-base text-foreground" style={{ fontFamily: 'Georgia, serif', fontWeight: 500 }}>
                  {sector.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-28 relative overflow-hidden hero-gradient">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl text-white mb-8" style={{ fontFamily: 'Georgia, serif', fontWeight: 400 }}>
              Ready to Elevate Your Projects?
            </h2>
            <p className="text-lg md:text-xl text-white/70 mb-12 leading-relaxed" style={{ fontFamily: 'Georgia, serif' }}>
              Partner with Halson Paints Limited for your industrial and decorative needs, 
              and elevate your projects with enduring protection and timeless appeal.
            </p>
            <div className="flex flex-wrap justify-center gap-5">
              <Button asChild size="lg" className="tracking-widest text-sm px-10 py-6 bg-accent hover:bg-accent/90 text-white uppercase" style={{ letterSpacing: '0.15em' }}>
                <Link to="/products">
                  View Products
                  <ArrowRight className="ml-3 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="tracking-widest text-sm px-10 py-6 border-white/25 text-white hover:bg-white/10 bg-transparent uppercase" style={{ letterSpacing: '0.15em' }}>
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 pointer-events-none" />
      </section>
    </Layout>
  );
};

export default Index;