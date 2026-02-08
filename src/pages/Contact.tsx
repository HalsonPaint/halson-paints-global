import { MapPin, Phone, Mail, Clock, MessageCircle, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Layout from "@/components/layout/Layout";
import { openExternal } from "@/lib/openExternal";
import { EXTERNAL_TARGET } from "@/lib/external";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const WHATSAPP_NUMBER = "918369657171";
const GOOGLE_MAPS_URL = "https://maps.google.com/maps/dir/?api=1&destination=19.516522417018077,73.10859087116381";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", phone: "", company: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const contactInfo = [
    {
      icon: MapPin,
      label: "Manufacturing Facility",
      value: "G485+C49, Vadavali, Maharashtra 421312, India",
      href: GOOGLE_MAPS_URL,
      external: true,
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 8369657171",
      href: "https://wa.me/918369657171",
      external: true,
    },
    {
      icon: Mail,
      label: "Email",
      value: "newtechnocoats@gmail.com",
      href: "https://mail.google.com/mail/?view=cm&fs=1&to=newtechnocoats@gmail.com",
      external: true,
    },
    {
      icon: Clock,
      label: "Business Hours",
      value: "Mon - Sat: 9:00 AM - 6:00 PM",
    },
  ];

  const whatsappCtaUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Hi, I'm visiting your website and would like to enquire about your products/services.",
  )}`;

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-24 pb-14 sm:py-28 page-hero relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-4 mb-6 opacity-0 animate-fade-in">
              <div className="w-8 h-[1px] bg-accent/40" />
              <p className="text-[11px] tracking-wide-luxury uppercase text-accent font-medium">
                Reach Out
              </p>
              <div className="w-8 h-[1px] bg-accent/40" />
            </div>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl text-foreground mb-4 sm:mb-6 animate-fade-in">
              Contact <span className="text-gradient">Us</span>
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground animate-fade-in px-4 sm:px-0 font-light max-w-xl mx-auto" style={{ animationDelay: "0.2s" }}>
              Get in touch with our team for enquiries, custom solutions, 
              or to discuss your project requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            {/* Contact Info */}
            <div className="animate-fade-in">
              <h2 className="font-display text-2xl sm:text-3xl text-foreground mb-8 sm:mb-10">
                Get In Touch
              </h2>
              
              <div className="space-y-6 sm:space-y-8 mb-10 sm:mb-12">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-start gap-4 group">
                    <div className="w-11 h-11 sm:w-12 sm:h-12 bg-primary/8 border border-primary/10 rounded-sm flex items-center justify-center shrink-0 transition-all duration-500 group-hover:bg-primary/12 group-hover:border-primary/20">
                      <item.icon className="text-primary" size={20} />
                    </div>
                    <div>
                      <p className="text-[11px] tracking-luxury uppercase text-muted-foreground mb-1">{item.label}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.external ? EXTERNAL_TARGET : undefined}
                          rel={item.external ? "noopener noreferrer" : undefined}
                          onClick={(e) => {
                            if (!item.external || !item.href) return;
                            if (EXTERNAL_TARGET !== "_top") return;
                            e.preventDefault();
                            openExternal(item.href);
                          }}
                          className="text-foreground hover:text-primary transition-colors duration-500 flex items-center gap-2 text-sm sm:text-base"
                        >
                          {item.value}
                          {item.external && <ExternalLink size={14} className="text-muted-foreground" />}
                        </a>
                      ) : (
                        <p className="text-foreground text-sm sm:text-base">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* WhatsApp CTA */}
              <div className="p-6 sm:p-8 bg-card rounded-sm border border-border relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.02] to-transparent" />
                <div className="relative z-10">
                  <h3 className="font-display text-lg sm:text-xl text-foreground mb-3">
                    Quick Response via WhatsApp
                  </h3>
                  <p className="text-muted-foreground mb-5 text-sm font-light">
                    Need a quick response? Message us directly on WhatsApp.
                  </p>
                  <Button
                    asChild
                    className="tracking-luxury text-xs uppercase px-6 py-5"
                  >
                    <a
                      href={whatsappCtaUrl}
                      target={EXTERNAL_TARGET}
                      rel="noopener noreferrer"
                      onClick={(e) => {
                        if (EXTERNAL_TARGET !== "_top") return;
                        e.preventDefault();
                        openExternal(whatsappCtaUrl);
                      }}
                    >
                      <MessageCircle className="mr-2" size={16} />
                      Chat on WhatsApp
                    </a>
                  </Button>
                </div>
              </div>

              {/* Map */}
              <div className="mt-10 sm:mt-12">
                <h3 className="font-display text-lg sm:text-xl text-foreground mb-4">
                  Our Location
                </h3>
                <div className="block overflow-hidden rounded-sm border border-border hover:border-primary/20 transition-all duration-500">
                  <div className="aspect-video bg-secondary/50 flex items-center justify-center relative group">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3765.9772726726!2d73.1566!3d19.2166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be795c11e81f!2sVadavali%2C+Maharashtra!5e0!3m2!1sen!2sin!4v1"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="absolute inset-0 pointer-events-none"
                    />
                    <div className="absolute inset-0 bg-background/50 flex items-center justify-center opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500">
                      <Button asChild className="tracking-luxury text-xs uppercase">
                        <a
                          href={GOOGLE_MAPS_URL}
                          target={EXTERNAL_TARGET}
                          rel="noopener noreferrer"
                          onClick={(e) => {
                            if (EXTERNAL_TARGET !== "_top") return;
                            e.preventDefault();
                            openExternal(GOOGLE_MAPS_URL);
                          }}
                        >
                          <ExternalLink className="mr-2" size={16} />
                          Get Directions
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="p-6 sm:p-10 bg-card rounded-sm border border-border shadow-[var(--shadow-subtle)]">
                <h2 className="font-display text-xl sm:text-2xl text-foreground mb-2">
                  Send Us a Message
                </h2>
                <p className="text-muted-foreground mb-8 text-sm font-light">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-xs tracking-wide uppercase text-muted-foreground">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                        className="bg-secondary/40 border-border focus:border-primary/30 transition-all duration-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-xs tracking-wide uppercase text-muted-foreground">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@company.com"
                        required
                        className="bg-secondary/40 border-border focus:border-primary/30 transition-all duration-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-xs tracking-wide uppercase text-muted-foreground">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 99999 99999"
                        className="bg-secondary/40 border-border focus:border-primary/30 transition-all duration-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company" className="text-xs tracking-wide uppercase text-muted-foreground">Company Name</Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your Company Ltd."
                        className="bg-secondary/40 border-border focus:border-primary/30 transition-all duration-500"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-xs tracking-wide uppercase text-muted-foreground">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project requirements..."
                      rows={5}
                      required
                      className="bg-secondary/40 border-border focus:border-primary/30 transition-all duration-500 resize-none"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full tracking-luxury text-xs uppercase py-6 transition-all duration-500">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
