import { Link } from "react-router-dom";
import { ArrowRight, Shield, Factory, Users, Award, Paintbrush, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";

const Index = () => {
  const highlights = [
    { icon: Factory, label: "State-of-the-Art Facility", description: "Advanced manufacturing in Vadavali, Maharashtra" },
    { icon: Shield, label: "Industrial Excellence", description: "Superior protection for demanding environments" },
    { icon: Paintbrush, label: "Decorative Range", description: "Elegant finishes for residential & commercial spaces" },
    { icon: Users, label: "Expert Leadership", description: "Under the vision of Mr. Om Prakash Tiwari" },
  ];

  const sectors = [
    { icon: Factory, name: "Manufacturing" },
    { icon: Building2, name: "Construction" },
    { icon: Shield, name: "Infrastructure" },
    { icon: Award, name: "Automotive" },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 industrial-gradient" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.03%22%3E%3Cpath d=%22M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-8 animate-fade-in">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-primary text-sm font-medium tracking-wider uppercase">
                Established Excellence
              </span>
            </div>
            
            <h1 className="font-display text-5xl md:text-7xl font-bold text-foreground mb-6 animate-slide-up leading-tight">
              Pioneering Protection<br />
              <span className="text-gradient">& Performance</span><br />
              in Coatings
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mb-10 animate-fade-in leading-relaxed" style={{ animationDelay: "0.2s" }}>
              A distinguished manufacturer of high-performance industrial and decorative paints, 
              proudly headquartered in Vadavali, near Thane, Maharashtra.
            </p>
            
            <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <Button asChild size="lg" className="font-display tracking-wider text-lg px-8 glow-primary">
                <Link to="/products">
                  Explore Products
                  <ArrowRight className="ml-2" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="font-display tracking-wider text-lg px-8 border-steel hover:bg-secondary">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute right-20 bottom-20 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
      </section>

      {/* Highlights Section */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((item, index) => (
              <div
                key={item.label}
                className="p-6 bg-card rounded-lg border border-border hover:border-primary/50 transition-all group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="text-primary" size={28} />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {item.label}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Content Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
                About <span className="text-gradient">Halson Paints</span>
              </h2>
              <div className="w-24 h-1 bg-primary mx-auto" />
            </div>

            <div className="space-y-8 text-lg text-muted-foreground leading-relaxed">
              <p>
                Established with a steadfast commitment to excellence, <strong className="text-foreground">Halson Paints Limited</strong> is 
                a distinguished manufacturer of high-performance industrial and decorative paints, proudly 
                headquartered in Vadavali, near Thane, Maharashtra. With years of expertise honed in one 
                of India's dynamic industrial hubs, we have built enduring trust through our extensive 
                offline distribution network and seamless online presence on IndiaMART, delivering reliable 
                solutions to clients nationwide.
              </p>

              <p>
                At the core of our success is our <strong className="text-foreground">primary focus on industrial paints</strong> – robust, 
                specialized coatings engineered for superior protection in demanding environments. From 
                anti-corrosive primers and epoxy systems to heat-resistant and chemical-resistant finishes, 
                our industrial range safeguards critical assets in sectors such as manufacturing, construction, 
                infrastructure, automotive, and marine applications. These formulations prioritize durability, 
                adhesion, longevity, and compliance with rigorous industry standards, ensuring optimal 
                performance under extreme conditions.
              </p>

              <p>
                Complementing our industrial expertise, we also offer a <strong className="text-foreground">curated selection of decorative 
                paints</strong> that bring elegance and vibrancy to residential, commercial, and architectural spaces. 
                With superior coverage, rich color retention, and smooth finishes, these products enable 
                architects, builders, and homeowners to achieve aesthetic excellence without compromising on quality.
              </p>

              <p>
                Under the visionary leadership of <strong className="text-foreground">Mr. Om Prakash Tiwari</strong>, our company continues to 
                innovate at our state-of-the-art manufacturing facility, blending advanced technology with 
                meticulous craftsmanship. His guidance drives our dedication to customer-centric solutions, 
                prompt service, and tailored formulations that address specific project requirements.
              </p>

              <p>
                We pride ourselves on fostering long-term partnerships with contractors, industries, architects, 
                and discerning clients who demand nothing less than reliability and superior results. At 
                Halson Paints Limited, we go beyond mere coatings – <strong className="text-foreground">we deliver peace of mind</strong> through 
                products that protect investments and enhance value.
              </p>

              <div className="text-center pt-8">
                <p className="font-display text-2xl text-foreground font-semibold">
                  Experience the hallmark of trusted quality.
                </p>
                <p className="text-primary text-xl mt-2">
                  Discover the difference today.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sectors Section */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold text-foreground mb-4">
              Industries We Serve
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our industrial coatings protect critical assets across diverse sectors
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {sectors.map((sector, index) => (
              <div
                key={sector.name}
                className="p-8 bg-card rounded-lg border border-border text-center hover:border-primary/50 hover:bg-card/80 transition-all animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <sector.icon className="mx-auto text-primary mb-4" size={40} />
                <h3 className="font-display font-semibold text-foreground">
                  {sector.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Ready to Elevate Your Projects?
            </h2>
            <p className="text-xl text-muted-foreground mb-10">
              Partner with Halson Paints Limited for your industrial and decorative needs, 
              and elevate your projects with enduring protection and timeless appeal.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="font-display tracking-wider text-lg px-8">
                <Link to="/products">
                  View Products
                  <ArrowRight className="ml-2" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="font-display tracking-wider text-lg px-8 border-steel">
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
