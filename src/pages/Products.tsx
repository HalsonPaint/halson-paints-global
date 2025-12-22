import { useState } from "react";
import { ChevronDown, MessageCircle, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import { productCategories, type Category, type Product } from "@/data/products";
import { cn } from "@/lib/utils";

const WHATSAPP_NUMBER = "919999999999"; // Placeholder - replace with actual number

const ProductCard = ({ product, categoryName }: { product: Product; categoryName: string }) => {
  const handleEnquiry = () => {
    const message = encodeURIComponent(
      `Hi, I'm interested in the following product:\n\n` +
      `*Product:* ${product.name}\n` +
      `*Category:* ${categoryName}\n` +
      `*Description:* ${product.description}\n\n` +
      `Please provide more details and pricing.`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  return (
    <div className="p-4 bg-secondary/50 rounded-lg border border-border hover:border-primary/30 transition-all group">
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <h4 className="font-display font-semibold text-foreground group-hover:text-primary transition-colors">
            {product.name}
          </h4>
          <p className="text-sm text-muted-foreground mt-1">
            {product.description}
          </p>
        </div>
        <Button
          onClick={handleEnquiry}
          size="sm"
          className="shrink-0 font-display tracking-wide"
        >
          <MessageCircle size={16} className="mr-2" />
          Enquiry
        </Button>
      </div>
    </div>
  );
};

const CategoryAccordion = ({ category, isOpen, onToggle }: { 
  category: Category; 
  isOpen: boolean; 
  onToggle: () => void;
}) => {
  return (
    <div className="border border-border rounded-lg overflow-hidden bg-card animate-fade-in">
      <button
        onClick={onToggle}
        className="w-full p-6 flex items-center justify-between text-left hover:bg-secondary/30 transition-colors"
      >
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
            <Package className="text-primary" size={24} />
          </div>
          <div>
            <h3 className="font-display text-xl font-semibold text-foreground">
              {category.name}
            </h3>
            <p className="text-sm text-muted-foreground mt-1">
              {category.description}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-sm text-muted-foreground hidden sm:block">
            {category.products.length} products
          </span>
          <ChevronDown 
            className={cn(
              "text-muted-foreground transition-transform duration-300",
              isOpen && "rotate-180"
            )} 
            size={24} 
          />
        </div>
      </button>

      <div className={cn(
        "overflow-hidden transition-all duration-300",
        isOpen ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
      )}>
        <div className="p-6 pt-0 space-y-3">
          {category.products.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              categoryName={category.name} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const Products = () => {
  const [openCategories, setOpenCategories] = useState<Set<string>>(new Set());

  const toggleCategory = (categoryId: string) => {
    setOpenCategories((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(categoryId)) {
        newSet.delete(categoryId);
      } else {
        newSet.add(categoryId);
      }
      return newSet;
    });
  };

  const expandAll = () => {
    setOpenCategories(new Set(productCategories.map((c) => c.id)));
  };

  const collapseAll = () => {
    setOpenCategories(new Set());
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 bg-secondary/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.02%22%3E%3Cpath d=%22M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in">
              Our <span className="text-gradient">Products</span>
            </h1>
            <p className="text-xl text-muted-foreground animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Comprehensive range of industrial and decorative coatings engineered 
              for superior protection and lasting performance.
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Controls */}
          <div className="flex items-center justify-between mb-8">
            <p className="text-muted-foreground">
              <span className="text-foreground font-semibold">{productCategories.length}</span> categories, 
              <span className="text-foreground font-semibold ml-1">
                {productCategories.reduce((acc, cat) => acc + cat.products.length, 0)}
              </span> products
            </p>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" onClick={expandAll} className="font-display tracking-wide">
                Expand All
              </Button>
              <Button variant="outline" size="sm" onClick={collapseAll} className="font-display tracking-wide">
                Collapse All
              </Button>
            </div>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            {productCategories.map((category, index) => (
              <div key={category.id} style={{ animationDelay: `${index * 0.05}s` }}>
                <CategoryAccordion
                  category={category}
                  isOpen={openCategories.has(category.id)}
                  onToggle={() => toggleCategory(category.id)}
                />
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 text-center p-8 bg-card rounded-lg border border-border">
            <h3 className="font-display text-2xl font-semibold text-foreground mb-4">
              Can't find what you're looking for?
            </h3>
            <p className="text-muted-foreground mb-6">
              We offer custom formulations tailored to your specific requirements.
            </p>
            <Button 
              onClick={() => {
                const message = encodeURIComponent(
                  `Hi, I'm looking for a custom paint solution. Please contact me to discuss my requirements.`
                );
                window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
              }}
              size="lg" 
              className="font-display tracking-wider"
            >
              <MessageCircle className="mr-2" />
              Request Custom Solution
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Products;
