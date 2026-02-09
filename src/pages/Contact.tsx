import { MapPin, Phone, Mail, Clock, MessageCircle, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Layout from "@/components/layout/Layout";
import ScrollReveal from "@/components/animations/ScrollReveal";
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
      <section className="pt-28 pb-16 sm:pt-36 sm:pb-20 page-hero relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-primary/[0.03] rounded-full blur-[100px]" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <ScrollReveal>
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="w-12 h-[1px] bg-accent/40" />
                <p className="text-[10px] tracking-[0.3em] uppercase text-accent font-medium">
                  Reach Out
                </p>
                <div className="w-12 h-[1px] bg-accent/40" />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h1 className="font-display text-5xl sm:text-6xl md:text-7xl text-foreground mb-5 sm:mb-7">
                Contact <span className="text-gradient">Us</span>
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-base sm:text-lg text-muted-foreground px-4 sm:px-0 font-light max-w-xl mx-auto leading-relaxed">
                Get in touch with our team for enquiries, custom solutions, 
                or to discuss your project requirements.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 sm:py-28">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact Info */}
            <div>
              <ScrollReveal>
                <h2 className="font-display text-3xl sm:text-4xl text-foreground mb-10 sm:mb-12">
                  Get In Touch
                </h2>
              </ScrollReveal>
              
              <div className="space-y-7 sm:space-y-9 mb-12 sm:mb-14">
                {contactInfo.map((item, index) => (
                  <ScrollReveal key={item.label} delay={index * 0.1}>
                    <div className="flex items-start gap-5 group">
                      <motion.div 
                        className="w-12 h-12 sm:w-14 sm:h-14 bg-primary/6 border border-primary/10 rounded-sm flex items-center justify-center shrink-0 transition-all duration-500 group-hover:bg-primary/10 group-hover:border-primary/20"
                        whileHover={{ scale: 1.05 }}
                      >
                        <item.icon className="text-primary" size={20} />
                      </motion.div>
                      <div>
                        <p className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground mb-1.5 font-medium">{item.label}</p>
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
                  </ScrollReveal>
                ))}
              </div>

              {/* WhatsApp CTA */}
              <ScrollReveal delay={0.4}>
                <div className="p-7 sm:p-10 bg-card rounded-sm border border-border relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.02] to-transparent transition-all duration-700 group-hover:from-primary/[0.04]" />
                  <div className="absolute top-0 left-0 w-16 h-[2px] bg-gradient-to-r from-accent/40 to-transparent" />
                  <div className="relative z-10">
                    <h3 className="font-display text-xl sm:text-2xl text-foreground mb-3">
                      Quick Response via WhatsApp
                    </h3>
                    <p className="text-muted-foreground mb-6 text-sm font-light">
                      Need a quick response? Message us directly on WhatsApp.
                    </p>
                    <Button
                      asChild
                      className="tracking-[0.2em] text-[11px] uppercase px-8 py-6"
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
              </ScrollReveal>

              {/* Map */}
              <ScrollReveal delay={0.5}>
                <div className="mt-12 sm:mt-14">
                  <h3 className="font-display text-xl sm:text-2xl text-foreground mb-5">
                    Our Location
                  </h3>
                  <div className="block overflow-hidden rounded-sm border border-border hover:border-primary/15 transition-all duration-500">
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
                        <Button asChild className="tracking-[0.2em] text-[11px] uppercase">
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
              </ScrollReveal>
            </div>

            {/* Contact Form */}
            <ScrollReveal delay={0.2} direction="right">
              <motion.div 
                className="p-7 sm:p-12 bg-card rounded-sm border border-border shadow-[var(--shadow-elevated)] relative overflow-hidden"
                whileHover={{ boxShadow: "var(--shadow-dramatic)" }}
                transition={{ duration: 0.5 }}
              >
                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-primary/[0.04] to-transparent" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-accent/[0.03] to-transparent" />
                
                <div className="relative z-10">
                  <h2 className="font-display text-2xl sm:text-3xl text-foreground mb-2">
                    Send Us a Message
                  </h2>
                  <p className="text-muted-foreground mb-10 text-sm font-light">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground font-medium">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          required
                          className="bg-secondary/30 border-border/60 focus:border-primary/30 transition-all duration-500 h-12"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground font-medium">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@company.com"
                          required
                          className="bg-secondary/30 border-border/60 focus:border-primary/30 transition-all duration-500 h-12"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground font-medium">Phone Number</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+91 99999 99999"
                          className="bg-secondary/30 border-border/60 focus:border-primary/30 transition-all duration-500 h-12"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company" className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground font-medium">Company Name</Label>
                        <Input
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Your Company Ltd."
                          className="bg-secondary/30 border-border/60 focus:border-primary/30 transition-all duration-500 h-12"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground font-medium">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your project requirements..."
                        rows={5}
                        required
                        className="bg-secondary/30 border-border/60 focus:border-primary/30 transition-all duration-500 resize-none"
                      />
                    </div>

                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full tracking-[0.2em] text-[11px] uppercase py-7 transition-all duration-500 relative overflow-hidden group"
                    >
                      <span className="relative z-10">Send Message</span>
                    </Button>
                  </form>
                </div>
              </motion.div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
