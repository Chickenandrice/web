"use client";

import { motion, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";

export default function Drag() {
  const ref = useRef(null);
  const { x, y, scale } = useFollowPointer(ref);

  return (
    <motion.div
      ref={ref}
      style={{
        ...ball,
        x,
        y,
        scale,               // ← still using scale
        position: "fixed",
        left: 0,
        top: 0,
        pointerEvents: "none",
      }}
    />
  );
}

const spring = { damping: 60, stiffness: 500 };

export function useFollowPointer(ref) {
  const x = useSpring(0, spring);
  const y = useSpring(0, spring);

  // ⭐ spring for size
  const scale = useSpring(1, { damping: 20, stiffness: 200 });

  const lastPos = useRef({ x: 0, y: 0 });
  const lastTime = useRef(Date.now());

  useEffect(() => {
    const handlePointerMove = ({ clientX, clientY }) => {
      if (!ref.current) return;

      const element = ref.current;
      const offsetX = element.offsetWidth / 2;
      const offsetY = element.offsetHeight / 2;

      // ---- Follow position ----
      x.set(clientX - offsetX);
      y.set(clientY - offsetY);

      // ---- Speed calculation ----
      const now = Date.now();
      const dt = now - lastTime.current;

      const dx = clientX - lastPos.current.x;
      const dy = clientY - lastPos.current.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      const speed = dist / (dt || 1); // avoid divide-by-zero

      // Map speed → scale (1 → 0.6)
      const min = 0.6;
      const max = 1;
      const mapped = Math.max(min, Math.min(max, max - speed * 1.5));

      scale.set(mapped);

      lastPos.current = { x: clientX, y: clientY };
      lastTime.current = now;
    };

    window.addEventListener("pointermove", handlePointerMove);
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, []);

  // ⭐ NEW: when no movement for a bit, reset scale back to 1
  useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now();
      const dt = now - lastTime.current;

      // if no movement for > 100ms, ease back to full size
      if (dt > 100) {
        scale.set(1);
      }
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return { x, y, scale };
}

/**
 * Styles
 */
const ball = {
  width: 50,
  height: 50,
  backgroundColor: "#8BAE66",
  borderRadius: "50%",
};
