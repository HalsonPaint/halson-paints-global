import { motion } from "framer-motion";
import { productCategories } from "@/data/products";
import puEnamelImg from "@/assets/products/pu-enamel.jpg";

const ProductHero = () => {
  const totalProducts = productCategories.reduce((acc, cat) => acc + cat.products.length, 0);

  return (
    <section className="relative min-h-[85vh] flex items-center hero-gradient noise-overlay overflow-hidden">
      {/* Ambient elements */}
      <div
        className="absolute top-1/3 left-1/4 w-[600px] h-[600px] rounded-full blur-[150px] opacity-15"
        style={{ background: "hsl(var(--accent) / 0.12)" }}
      />
      <div
        className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full blur-[120px] opacity-10"
        style={{ background: "hsl(var(--primary) / 0.2)" }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left: Text content */}
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="w-12 h-[1px] bg-accent/50" />
              <p className="text-white/40 text-[10px] tracking-[0.3em] uppercase font-medium">
                Product Portfolio
              </p>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="font-display text-5xl sm:text-6xl md:text-7xl text-white font-light leading-[1.05] mb-6"
            >
              Engineered for<br />
              <span className="text-gradient-gold">Performance</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-white/40 text-base sm:text-lg max-w-xl leading-relaxed font-light mb-10"
            >
              A comprehensive range of industrial and decorative coatings —
              formulated for superior protection, durability, and finish quality.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex items-center gap-8 sm:gap-12"
            >
              <div>
                <div className="font-display text-3xl sm:text-4xl text-white">{productCategories.length}</div>
                <div className="text-white/25 text-[10px] tracking-[0.2em] uppercase mt-1">Categories</div>
              </div>
              <div className="w-[1px] h-10 bg-white/10" />
              <div>
                <div className="font-display text-3xl sm:text-4xl text-white">{totalProducts}+</div>
                <div className="text-white/25 text-[10px] tracking-[0.2em] uppercase mt-1">Products</div>
              </div>
              <div className="w-[1px] h-10 bg-white/10" />
              <div>
                <div className="font-display text-3xl sm:text-4xl text-white">100%</div>
                <div className="text-white/25 text-[10px] tracking-[0.2em] uppercase mt-1">Quality Assured</div>
              </div>
            </motion.div>
          </div>

          {/* Right: Featured product image */}
          <motion.div
            className="order-1 lg:order-2 flex justify-center"
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative">
              {/* Glow behind product */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] rounded-full bg-white/[0.04] blur-[2px]" />
              </div>
              {/* Pedestal arch */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[320px] sm:w-[400px] h-[160px] sm:h-[200px] rounded-t-[50%] bg-white/[0.03]" />
              {/* Product image */}
              <img
                src={puEnamelImg}
                alt="Halson Paints Premium Product"
                className="relative z-10 w-[260px] sm:w-[320px] md:w-[380px] h-auto object-contain drop-shadow-2xl"
              />
              {/* Pedestal base */}
              <div className="relative z-10 mx-auto w-[200px] sm:w-[260px] h-3 rounded-[50%] bg-white/[0.06] mt-[-6px] blur-[1px]" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Side text */}
      <div className="absolute right-6 lg:right-12 top-1/2 -translate-y-1/2 hidden lg:block">
        <motion.p
          className="text-white/[0.06] text-[11px] tracking-[0.4em] uppercase"
          style={{ writingMode: "vertical-rl" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          Premium Coating Solutions
        </motion.p>
      </div>
    </section>
  );
};

export default ProductHero;
