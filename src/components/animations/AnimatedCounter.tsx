import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";

interface AnimatedCounterProps {
  value: string;
  className?: string;
}

const AnimatedCounter = ({ value, className = "" }: AnimatedCounterProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [hasAnimated, setHasAnimated] = useState(false);

  // Extract numeric part and suffix
  const match = value.match(/^(\d+)(.*)$/);
  const numericValue = match ? parseInt(match[1], 10) : 0;
  const suffix = match ? match[2] : value;
  const isNumeric = !!match;

  const springValue = useSpring(0, {
    duration: 2000,
    bounce: 0,
  });

  const displayValue = useTransform(springValue, (v) => Math.round(v));
  const [displayNum, setDisplayNum] = useState(0);

  useEffect(() => {
    const unsubscribe = displayValue.on("change", (v) => setDisplayNum(v));
    return unsubscribe;
  }, [displayValue]);

  useEffect(() => {
    if (isInView && !hasAnimated && isNumeric) {
      springValue.set(numericValue);
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated, numericValue, springValue, isNumeric]);

  if (!isNumeric) {
    return (
      <motion.span
        ref={ref}
        className={className}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
      >
        {value}
      </motion.span>
    );
  }

  return (
    <span ref={ref} className={className}>
      {displayNum}
      {suffix}
    </span>
  );
};

export default AnimatedCounter;
