import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import halsonLogo from "@/assets/halson-logo-new.png";

const SplashScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [phase, setPhase] = useState<"logo" | "reveal" | "exit">("logo");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("reveal"), 1400);
    const t2 = setTimeout(() => setPhase("exit"), 3000);
    const t3 = setTimeout(onComplete, 3800);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase !== "exit" ? null : null}
      <motion.div
        className="fixed inset-0 z-[9999] flex items-center justify-center"
        style={{
          background: "linear-gradient(165deg, hsl(192 55% 12%) 0%, hsl(210 42% 8%) 100%)",
        }}
        initial={{ opacity: 1 }}
        animate={phase === "exit" ? { opacity: 0, scale: 1.02 } : { opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        onAnimationComplete={() => {
          if (phase === "exit") onComplete();
        }}
      >
        {/* Ambient glow */}
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full"
          style={{
            background: "radial-gradient(circle, hsl(192 50% 22% / 0.3) 0%, transparent 70%)",
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 2, opacity: 1 }}
          transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1] }}
        />

        {/* Gold accent line */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[1px]"
          style={{
            background: "linear-gradient(90deg, transparent, hsl(38 60% 50% / 0.5), transparent)",
          }}
          initial={{ width: 0 }}
          animate={phase === "reveal" ? { width: 280 } : { width: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        />

        <div className="relative flex flex-col items-center gap-6">
          {/* Logo */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.85, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          >
            <img
              src={halsonLogo}
              alt="Halson Paints"
              className="h-20 md:h-28 w-auto drop-shadow-[0_0_40px_rgba(255,255,255,0.25)]"
            />
          </motion.div>

          {/* Tagline */}
          <motion.div
            className="overflow-hidden"
            initial={{ height: 0 }}
            animate={phase === "reveal" ? { height: "auto" } : { height: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.p
              className="text-[11px] tracking-[0.35em] uppercase"
              style={{ color: "hsl(38 55% 60%)" }}
              initial={{ opacity: 0, y: 12 }}
              animate={phase === "reveal" ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            >
              Colour. Craft. Legacy.
            </motion.p>
          </motion.div>

          {/* Loading bar */}
          <motion.div
            className="w-32 h-[2px] rounded-full overflow-hidden mt-2"
            style={{ background: "hsl(0 0% 100% / 0.08)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <motion.div
              className="h-full rounded-full"
              style={{
                background: "linear-gradient(90deg, hsl(192 45% 35%), hsl(38 55% 55%))",
              }}
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
            />
          </motion.div>
        </div>

        {/* Corner accents */}
        {[
          "top-6 left-6 border-t border-l",
          "top-6 right-6 border-t border-r",
          "bottom-6 left-6 border-b border-l",
          "bottom-6 right-6 border-b border-r",
        ].map((pos, i) => (
          <motion.div
            key={i}
            className={`absolute w-6 h-6 ${pos}`}
            style={{ borderColor: "hsl(38 60% 50% / 0.15)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 + i * 0.1, duration: 0.5 }}
          />
        ))}
      </motion.div>
    </AnimatePresence>
  );
};

export default SplashScreen;
