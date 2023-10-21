"use client";

import { useEffect, useState } from "react";
import { BiUpArrow } from "react-icons/bi";
import { motion } from "framer-motion";

const TopButton = () => {
  const [isScrolling, setIsscrolling] = useState(false);
  const hoverMotion = {
    transition: {
      type: "spring",
      stiffness: 500,
      damping: 15,
    },
    whileHover: { scale: 1.2 },
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsscrolling(true);
      } else {
        setIsscrolling(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <motion.div
      {...hoverMotion}
      className={` ${
        isScrolling
          ? " fixed bottom-7 right-7 z-50 bg-dark-red rounded-full px-3 py-3 shadow-2xl"
          : ""
      }`}
    >
      <a href="#home">
        <BiUpArrow color="white" size={"25px"} />
      </a>
    </motion.div>
  );
};

export default TopButton;
