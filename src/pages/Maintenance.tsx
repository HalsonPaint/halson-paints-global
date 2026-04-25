import { motion } from "framer-motion";
import halsonLogo from "@/assets/halson-logo-new.png";

const Maintenance = () => {
  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center px-6"
      style={{
        background: "linear-gradient(165deg, hsl(192 55% 12%) 0%, hsl(210 42% 8%) 100%)",
      }}
    >
      {/* Ambient glow */}
      <div
        className="absolute w-[300px] h-[300px] md:w-[600px] md:h-[600px] rounded-full opacity-60 pointer-events-none"
        style={{
          background: "radial-gradient(circle, hsl(192 50% 22% / 0.35) 0%, transparent 70%)",
        }}
      />

      {/* Gold accent line */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[1px] w-[280px]"
        style={{
          background: "linear-gradient(90deg, transparent, hsl(38 60% 50% / 0.4), transparent)",
        }}
      />

      <motion.div
        className="relative flex flex-col items-center gap-8 text-center max-w-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      >
        <img
          src={halsonLogo}
          alt="Halson Paints"
          className="h-20 md:h-28 w-auto drop-shadow-[0_0_40px_rgba(255,255,255,0.25)]"
        />

        <p
          className="text-[11px] tracking-[0.35em] uppercase"
          style={{ color: "hsl(38 55% 60%)" }}
        >
          Site Under Maintenance
        </p>

        <h1
          className="font-serif text-3xl md:text-5xl leading-tight"
          style={{ color: "hsl(0 0% 95%)", fontFamily: "'Playfair Display', serif" }}
        >
          We'll be back soon
        </h1>

        <p
          className="text-sm md:text-base leading-relaxed font-light max-w-md"
          style={{ color: "hsl(0 0% 70%)" }}
        >
          Our website is currently undergoing scheduled maintenance to bring you an even better experience. Thank you for your patience.
        </p>

        <div
          className="w-32 h-[2px] rounded-full overflow-hidden mt-2"
          style={{ background: "hsl(0 0% 100% / 0.08)" }}
        >
          <motion.div
            className="h-full rounded-full"
            style={{
              background: "linear-gradient(90deg, hsl(192 45% 35%), hsl(38 55% 55%))",
            }}
            animate={{ width: ["0%", "100%", "0%"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <p
          className="text-xs tracking-wider mt-4"
          style={{ color: "hsl(0 0% 50%)" }}
        >
          For urgent inquiries: <span style={{ color: "hsl(38 55% 60%)" }}>+91 8369657171</span>
        </p>
      </motion.div>

      {/* Corner accents */}
      {[
        "top-6 left-6 border-t border-l",
        "top-6 right-6 border-t border-r",
        "bottom-6 left-6 border-b border-l",
        "bottom-6 right-6 border-b border-r",
      ].map((pos, i) => (
        <div
          key={i}
          className={`absolute w-6 h-6 ${pos}`}
          style={{ borderColor: "hsl(38 60% 50% / 0.2)" }}
        />
      ))}
    </div>
  );
};

export default Maintenance;
