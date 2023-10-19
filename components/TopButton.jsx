"use client";

import { useEffect, useState } from "react";
import { BiUpArrow } from "react-icons/bi";

const TopButton = () => {
  const [isScrolling, setIsscrolling] = useState(false);
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
    <div
      className={` ${
        isScrolling
          ? " fixed bottom-7 right-7 z-50 bg-dark-red rounded-full px-3 py-3 shadow-2xl transition-all duration-700"
          : ""
      }`}
    >
      <a href="#home">
        <BiUpArrow color="white" size={"20px"} />
      </a>
    </div>
  );
};

export default TopButton;
