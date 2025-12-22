import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "About Us", path: "/" },
  { name: "Products", path: "/products" },
  { name: "Contact Us", path: "/contact" },
];

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-12 h-12 bg-primary rounded flex items-center justify-center">
              <span className="text-primary-foreground font-display font-bold text-xl">HP</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="font-display text-xl font-bold text-foreground tracking-wide">
                HALSON PAINTS
              </h1>
              <p className="text-xs text-muted-foreground tracking-widest uppercase">
                Limited
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "font-display text-sm font-medium tracking-wider uppercase transition-colors hover:text-primary",
                  location.pathname === link.path
                    ? "text-primary"
                    : "text-foreground"
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button asChild className="font-display tracking-wider">
              <Link to="/contact">Get Quote</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "font-display text-lg font-medium tracking-wider uppercase py-2 transition-colors",
                    location.pathname === link.path
                      ? "text-primary"
                      : "text-foreground"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <Button asChild className="mt-2 font-display tracking-wider">
                <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                  Get Quote
                </Link>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
