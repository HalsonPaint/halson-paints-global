import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";

interface TextRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span" | "div";
}

const TextReveal = ({ children, className = "", delay = 0, as = "div" }: TextRevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  const Component = motion[as] as any;

  return (
    <div ref={ref} className="overflow-hidden">
      <Component
        className={className}
        initial={{ y: "100%", opacity: 0 }}
        animate={isInView ? { y: "0%", opacity: 1 } : {}}
        transition={{
          duration: 0.9,
          delay,
          ease: [0.25, 0.4, 0.25, 1],
        }}
      >
        {children}
      </Component>
    </div>
  );
};

export default TextReveal;
