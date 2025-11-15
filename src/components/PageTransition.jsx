import { motion } from "framer-motion";

export default function PageTransition() {
  const baseTransition = {
    duration: 1,
    ease: [0.4, 0, 0.2, 1],
  };

  return (
    <>
      {/* tan */}
      <motion.div
        className="fixed inset-0 z-[9999] bg-[#EBD5AB]"
        initial={{ x: "-0%" }}
        animate={{ x: "100%" }}
        exit={{ x: "-200%" }}
        transition={{
            ...baseTransition,
            delay: 0.1, // slight offset for layered effect
          }}
      />

       {/* green */}
      <motion.div
        className="fixed inset-0 z-[9998] bg-[#8BAE66]"
        initial={{ x: "-0%" }}
        animate={{ x: "100%" }}
        exit={{ x: "-200%" }}
        transition={{
          ...baseTransition,
          delay: 0.2, // slight offset for layered effect
        }}
      />
    </>
  );
}
