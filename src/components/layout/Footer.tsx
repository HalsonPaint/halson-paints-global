import { Link } from "react-router-dom";
import { Facebook, Instagram, MessageCircle, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: MessageCircle, href: "https://wa.me/919999999999", label: "WhatsApp" },
    { icon: Instagram, href: "https://instagram.com/halsonpaints", label: "Instagram" },
    { icon: Facebook, href: "https://facebook.com/halsonpaints", label: "Facebook" },
  ];

  return (
    <footer className="bg-charcoal border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary rounded flex items-center justify-center">
                <span className="text-primary-foreground font-display font-bold text-xl">HP</span>
              </div>
              <div>
                <h2 className="font-display text-xl font-bold text-foreground tracking-wide">
                  HALSON PAINTS
                </h2>
                <p className="text-xs text-muted-foreground tracking-widest uppercase">
                  Limited
                </p>
              </div>
            </div>
            <p className="text-muted-foreground max-w-md leading-relaxed">
              Pioneering Protection and Performance in Coatings. A distinguished manufacturer of 
              high-performance industrial and decorative paints, proudly headquartered in 
              Vadavali, Maharashtra.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-lg font-semibold text-foreground mb-6 tracking-wide">
              QUICK LINKS
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-muted-foreground hover:text-primary transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-display text-lg font-semibold text-foreground mb-6 tracking-wide">
              CONTACT
            </h3>
            <ul className="space-y-4">
              <li>
                <a 
                  href="https://maps.google.com/?q=G485+C49,+Vadavali,+Maharashtra+421312,+India"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <MapPin size={20} className="mt-0.5 shrink-0" />
                  <span>G485+C49, Vadavali, Maharashtra 421312, India</span>
                </a>
              </li>
              <li>
                <a 
                  href="tel:+919999999999"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Phone size={20} className="shrink-0" />
                  <span>+91 99999 99999</span>
                </a>
              </li>
              <li>
                <a 
                  href="mailto:info@halsonpaints.com"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail size={20} className="shrink-0" />
                  <span>info@halsonpaints.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Halson Paints Limited. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
