import { motion } from "framer-motion";
import { ReactNode } from "react";

interface MarqueeProps {
  children: ReactNode;
  speed?: number;
  className?: string;
  pauseOnHover?: boolean;
}

const Marquee = ({
  children,
  speed = 30,
  className = "",
  pauseOnHover = true,
}: MarqueeProps) => {
  return (
    <div
      className={`overflow-hidden ${className}`}
      style={{ maskImage: "linear-gradient(90deg, transparent, black 10%, black 90%, transparent)" }}
    >
      <motion.div
        className={`flex gap-12 items-center whitespace-nowrap w-max ${pauseOnHover ? "[&:hover]:animation-play-state-paused" : ""}`}
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          x: {
            duration: speed,
            repeat: Infinity,
            ease: "linear",
          },
        }}
      >
        {children}
        {children}
      </motion.div>
    </div>
  );
};

export default Marquee;
