import { useState, useEffect, forwardRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import halsonLogo from "@/assets/halson-logo-new.png";

const navLinks = [
  { name: "About", path: "/" },
  { name: "Products", path: "/products" },
  { name: "Contact", path: "/contact" },
];

const Header = forwardRef<HTMLElement>((_, ref) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;

      window.requestAnimationFrame(() => {
        const scrolled = window.scrollY > 50;
        setIsScrolled((prev) => (prev === scrolled ? prev : scrolled));
        ticking = false;
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <motion.header 
      ref={ref}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 py-3 transition-all duration-700",
        isScrolled || isMobileMenuOpen
          ? "glass border-b border-border/40 shadow-[var(--shadow-subtle)]" 
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between min-h-[72px] md:grid md:grid-cols-[auto,1fr,auto] md:gap-6">
          {/* Logo */}
          <Link to="/" className="group flex-shrink-0 flex items-center">
            <motion.img 
              src={halsonLogo} 
              alt="Halson Paints Logo" 
              className={cn(
                "object-contain origin-left transform-gpu transition-transform duration-700",
                "h-12 w-40 sm:h-14 sm:w-44 md:h-14 md:w-48 lg:h-16 lg:w-56",
                isScrolled ? "scale-[0.92]" : "scale-100"
              )}
              whileHover={{ scale: isScrolled ? 0.95 : 1.02 }}
              transition={{ duration: 0.3 }}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center justify-center gap-10 lg:gap-14">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "relative text-[11px] tracking-[0.2em] uppercase transition-all duration-500 font-medium",
                  location.pathname === link.path
                    ? "text-primary"
                    : isScrolled 
                      ? "text-foreground/70 hover:text-foreground" 
                      : "text-foreground/60 hover:text-foreground"
                )}
              >
                {link.name}
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute -bottom-1.5 left-0 right-0 h-[1.5px] bg-primary"
                    transition={{ duration: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                type="button"
                variant="outline"
                onClick={() => navigate("/contact")}
                className="tracking-[0.2em] text-[11px] uppercase border-primary/25 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-500 px-6"
              >
                Get Quote
              </Button>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={20} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={20} />
                </motion.div>
              )}
            </AnimatePresence>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
              className="md:hidden overflow-hidden"
            >
              <nav className="flex flex-col gap-1 py-6 border-t border-border/40">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.path}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.08, duration: 0.3 }}
                  >
                    <Link
                      to={link.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={cn(
                        "text-[11px] tracking-[0.2em] uppercase py-3.5 block transition-colors duration-500 font-medium",
                        location.pathname === link.path
                          ? "text-primary"
                          : "text-muted-foreground"
                      )}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: navLinks.length * 0.08, duration: 0.3 }}
                >
                  <Button
                    type="button"
                    variant="outline"
                    className="mt-4 tracking-[0.2em] text-[11px] uppercase border-primary/20 text-primary w-full"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      navigate("/contact");
                    }}
                  >
                    Get Quote
                  </Button>
                </motion.div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
});

Header.displayName = "Header";

export default Header;
