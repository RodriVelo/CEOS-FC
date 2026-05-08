import { motion, useMotionValue, useTransform, animate, useMotionValueEvent, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function Counter({ from = 0, to = 100, duration = 2, prefix = "" }) {
  const ref = useRef(null);
  // 👇 once: true → anima solo la primera vez que aparece
  const isInView = useInView(ref, { once: true, margin: "0px 0px -50px 0px" });

  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.floor(latest));
  const [value, setValue] = useState(from);

  useMotionValueEvent(rounded, "change", (latest) => {
    setValue(latest);
  });

  useEffect(() => {
    if (!isInView) return; // 👈 espera hasta que sea visible
    const controls = animate(count, to, { duration, ease: "easeOut" });
    return controls.stop;
  }, [isInView, to, duration]);

  return (
    <motion.span ref={ref}>
      {prefix}{value}
    </motion.span>
  );
}