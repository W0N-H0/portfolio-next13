"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BsDiamondHalf } from "react-icons/bs";
const SectionTitle = ({ title }) => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <motion.div
      className="inline-block"
      ref={ref}
      initial={{ x: "-100px" }}
      animate={{ x: isInView ? 0 : "-100px" }}
      transition={{ duration: 0.5 }}
    >
      <p className="section-title">
        <BsDiamondHalf />
        {title}
      </p>
    </motion.div>
  );
};

export default SectionTitle;
