import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Main Footer */}
        <div className="py-20 grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
          {/* Brand */}
          <div className="md:col-span-1">
            <h2 className="font-display text-2xl mb-6">HALSON PAINTS</h2>
            <p className="text-background/60 leading-relaxed text-sm max-w-xs">
              A distinguished manufacturer of high-performance industrial and decorative paints, 
              headquartered in Vadavali, Maharashtra.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xs tracking-luxury uppercase text-background/40 mb-6">
              Navigation
            </h3>
            <ul className="space-y-4">
              {[
                { name: "About Us", path: "/" },
                { name: "Products", path: "/products" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    className="text-background/70 hover:text-background transition-colors duration-500 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs tracking-luxury uppercase text-background/40 mb-6">
              Contact
            </h3>
            <ul className="space-y-4 text-sm text-background/70">
              <li>
                <a 
                  href="https://maps.google.com/?q=G485+C49,+Vadavali,+Maharashtra+421312,+India"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-background transition-colors duration-500"
                >
                  Vadavali, Maharashtra 421312
                </a>
              </li>
              <li>
                <a 
                  href="tel:+919999999999"
                  className="hover:text-background transition-colors duration-500"
                >
                  +91 99999 99999
                </a>
              </li>
              <li>
                <a 
                  href="mailto:newtechnocoats@gmail.com"
                  className="hover:text-background transition-colors duration-500"
                >
                  newtechnocoats@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-background/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-background/40 text-xs">
            © {currentYear} Halson Paints Limited
          </p>
          <div className="flex items-center gap-6">
            <a 
              href="https://wa.me/919999999999" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xs text-background/40 hover:text-background transition-colors duration-500 tracking-luxury uppercase"
            >
              WhatsApp
            </a>
            <a 
              href="https://instagram.com/halsonpaints" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xs text-background/40 hover:text-background transition-colors duration-500 tracking-luxury uppercase"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
