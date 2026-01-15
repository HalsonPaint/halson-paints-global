import { forwardRef } from "react";
import { Link } from "react-router-dom";
import { openExternal } from "@/lib/openExternal";
import { EXTERNAL_TARGET } from "@/lib/external";

const Footer = forwardRef<HTMLElement>((_, ref) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer ref={ref} className="bg-foreground text-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        {/* Main Footer */}
        <div className="py-12 sm:py-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12 lg:gap-20">
          {/* Brand */}
          <div className="sm:col-span-2 md:col-span-1">
            <h2 className="font-display text-xl sm:text-2xl mb-4 sm:mb-6">HALSON PAINTS</h2>
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
                  href="https://maps.google.com/maps/dir/?api=1&destination=19.516522417018077,73.10859087116381"
                  target={EXTERNAL_TARGET}
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    // In normal browsing, let the browser handle <a target>.
                    if (EXTERNAL_TARGET !== "_top") return;
                    e.preventDefault();
                    openExternal(
                      "https://maps.google.com/maps/dir/?api=1&destination=19.516522417018077,73.10859087116381",
                    );
                  }}
                  className="hover:text-background transition-colors duration-500"
                >
                  G485+C49, Vadavali, Maharashtra 421312, India
                </a>
              </li>
              <li>
                <a 
                  href="https://wa.me/918369657171"
                  target={EXTERNAL_TARGET}
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    // In normal browsing, let the browser handle <a target>.
                    if (EXTERNAL_TARGET !== "_top") return;
                    e.preventDefault();
                    openExternal("https://wa.me/918369657171");
                  }}
                  className="hover:text-background transition-colors duration-500"
                >
                  +91 8369657171
                </a>
              </li>
              <li>
                <a 
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=newtechnocoats@gmail.com"
                  target={EXTERNAL_TARGET}
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    // In normal browsing, let the browser handle <a target>.
                    if (EXTERNAL_TARGET !== "_top") return;
                    e.preventDefault();
                    openExternal(
                      "https://mail.google.com/mail/?view=cm&fs=1&to=newtechnocoats@gmail.com",
                    );
                  }}
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
            © {currentYear} Halson Paints Private Limited
          </p>
          <div className="flex items-center gap-6">
            <a 
              href="https://wa.me/918369657171"
              target={EXTERNAL_TARGET}
              rel="noopener noreferrer"
              onClick={(e) => {
                // In normal browsing, let the browser handle <a target>.
                if (EXTERNAL_TARGET !== "_top") return;
                e.preventDefault();
                openExternal("https://wa.me/918369657171");
              }}
              className="hover:scale-110 transition-transform"
              title="WhatsApp"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 175.216 175.552"
                className="w-6 h-6"
              >
                <defs>
                  <linearGradient id="whatsapp-gradient-footer" x1="85.915" x2="86.535" y1="32.567" y2="137.092" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stopColor="#57d163"/>
                    <stop offset="1" stopColor="#23b33a"/>
                  </linearGradient>
                </defs>
                <path fill="url(#whatsapp-gradient-footer)" d="M87.184 25.227c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.313-6.179 22.558 23.146-6.069 2.235 1.324c9.387 5.571 20.15 8.517 31.126 8.523h.023c33.707 0 61.14-27.426 61.153-61.135a60.75 60.75 0 0 0-17.895-43.251 60.75 60.75 0 0 0-43.235-17.928z"/>
                <path fill="#fff" d="M68.772 55.603c-1.378-3.061-2.828-3.123-4.137-3.176l-3.524-.043c-1.226 0-3.218.46-4.902 2.3s-6.435 6.287-6.435 15.332 6.588 17.785 7.506 19.013 12.718 20.381 31.405 27.75c15.529 6.124 18.689 4.906 22.061 4.6s10.877-4.447 12.408-8.74 1.532-7.971 1.073-8.74-1.685-1.226-3.525-2.146-10.877-5.367-12.562-5.981-2.91-.919-4.137.921-4.746 5.979-5.819 7.206-2.144 1.381-3.984.462-7.76-2.861-14.784-9.124c-5.465-4.873-9.154-10.891-10.228-12.73s-.114-2.835.808-3.751c.825-.82 1.838-2.147 2.759-3.22s1.224-1.84 1.836-3.065.307-2.301-.153-3.22-4.032-10.011-5.666-13.647z"/>
              </svg>
            </a>
            <a 
              href="https://facebook.com/halsonpaints" 
              target={EXTERNAL_TARGET}
              rel="noopener noreferrer"
              onClick={(e) => {
                // In normal browsing, let the browser handle <a target>.
                if (EXTERNAL_TARGET !== "_top") return;
                e.preventDefault();
                openExternal("https://facebook.com/halsonpaints");
              }}
              className="hover:scale-110 transition-transform"
              title="Facebook"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="#1877F2"
              >
                <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.326v21.348C0 23.403.597 24 1.326 24h11.495v-9.294H9.692V11.01h3.129V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.313h3.587l-.467 3.696h-3.12V24h6.116C23.403 24 24 23.403 24 22.674V1.326C24 .597 23.403 0 22.675 0z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = "Footer";

export default Footer;
