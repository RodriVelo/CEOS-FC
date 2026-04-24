import { motion, useMotionValue, useTransform, animate, useMotionValueEvent } from "framer-motion";
import { useEffect, useState } from "react";

export default function Counter({ from = 0, to = 100, duration = 2, prefix = "" }) {
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.floor(latest));

  const [value, setValue] = useState(from);

  // 🔑 Esto hace que React se actualice
  useMotionValueEvent(rounded, "change", (latest) => {
    setValue(latest);
  });

  useEffect(() => {
    const controls = animate(count, to, {
      duration,
      ease: "easeOut",
    });

    return controls.stop;
  }, [to, duration]);

  return (
    <motion.span>
      {prefix}{value}
    </motion.span>
  );
}