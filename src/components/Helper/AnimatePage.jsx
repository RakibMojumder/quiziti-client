import React from "react";
import { motion } from "framer-motion";

const animations = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 1 },
};

const AnimatePage = ({ children }) => {
  return (
    <motion.div
      variants={animations}
      initial="initial"
      animate="animate"
      transition={{ duration: 0.8, ease: "easeIn" }}
      exit="exit"
    >
      {children}
    </motion.div>
  );
};

export default AnimatePage;
