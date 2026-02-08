import { useState, useEffect, forwardRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
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

  return (
    <header 
      ref={ref}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 py-3 transition-all duration-700",
        isScrolled || isMobileMenuOpen
          ? "glass border-b border-border/50 shadow-[var(--shadow-subtle)]" 
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between min-h-[72px] md:grid md:grid-cols-[auto,1fr,auto] md:gap-6">
          {/* Logo */}
            <Link to="/" className="group flex-shrink-0 flex items-center">
              <img 
                src={halsonLogo} 
                alt="Halson Paints Logo" 
                className={cn(
                  "object-contain origin-left transform-gpu transition-transform duration-700",
                  "h-12 w-40 sm:h-14 sm:w-44 md:h-14 md:w-48 lg:h-16 lg:w-56",
                  isScrolled ? "scale-[0.92]" : "scale-100"
                )}
              />
            </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center justify-center gap-8 lg:gap-12">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "text-xs tracking-luxury uppercase transition-all duration-500 link-underline font-medium",
                  location.pathname === link.path
                    ? "text-primary"
                    : isScrolled 
                      ? "text-foreground/70 hover:text-foreground" 
                      : "text-foreground/60 hover:text-foreground"
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              type="button"
              variant="outline"
              onClick={() => navigate("/contact")}
              className="tracking-luxury text-[11px] uppercase border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-500"
            >
              Get Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-6 animate-fade-in">
            <nav className="flex flex-col gap-1 py-4 border-t border-border/50">
              {navLinks.map((link, index) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "text-xs tracking-luxury uppercase py-3 transition-colors duration-500",
                    "animate-fade-in",
                    location.pathname === link.path
                      ? "text-primary"
                      : "text-muted-foreground"
                  )}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {link.name}
                </Link>
              ))}
              <Button
                type="button"
                variant="outline"
                className="mt-4 tracking-luxury text-[11px] uppercase border-primary/20 text-primary animate-fade-in"
                style={{ animationDelay: `${navLinks.length * 50}ms` }}
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  navigate("/contact");
                }}
              >
                Get Quote
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
});

Header.displayName = "Header";

export default Header;
