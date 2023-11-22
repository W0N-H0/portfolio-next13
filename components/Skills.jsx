"use client";
import { skills } from "@/constants/skills";
import React, { useRef } from "react";
import SectionTitle from "./SectionTitle/SectionTitle";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const Skills = () => {
  const ref2 = useRef(null);
  const isInView2 = useInView(ref2);
  return (
    <section
      className="w-full h-fit px-5 py-10 max-xs:px-[20px] relative bg-white"
      id="skills"
    >
      <div className="max-w-[1250px] mx-auto">
        <SectionTitle title={"Skills"} />
      </div>
      <div ref={ref2} className="max-w-[1250px] mx-auto">
        {skills.map((category, idx) => (
          <motion.div
            initial={{ x: "-20vw" }}
            animate={{ x: isInView2 ? 0 : "-20vw" }}
            transition={{ duration: 0.6 + (idx * 3) / 10 }}
            key={idx}
            className="px-5 py-5 max-xs:px-[20px]"
          >
            <h2 className="text-xl font-bold mb-2 mt-2 py-2 px-1 text-shadow">
              - {category.category}
            </h2>
            <div className="grid grid-cols-3 xs:grid-cols-5 gap-3">
              {category.items.map((item) => (
                <motion.div
                  transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 15,
                  }}
                  whileHover={{ scale: 1.1 }}
                  key={item.id}
                  className="p-4 rounded-md text-center flex flex-col items-center hover:shadow-2xl justify-start"
                >
                  {item.src ? (
                    <Image
                      src={item.src}
                      alt={item.title}
                      className="rounded-md min-h-[60px]"
                      width={60}
                      height={60}
                    />
                  ) : (
                    <item.icon
                      className="text-6xl"
                      style={{ color: item.color }}
                    />
                  )}
                  <span className="font-bold">{item.title}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
