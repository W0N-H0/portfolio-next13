"use client";

import Image from "next/image";
import Link from "next/link";
import "@/app/mainAnimations.css";
import CustomTypewriter from "./typewriter/typewriter";
import { motion } from "framer-motion";

const Main = () => {
  const hoverMotion = {
    transition: {
      type: "spring",
      stiffness: 500,
      damping: 15,
    },
    whileHover: { scale: 1.15 },
  };

  return (
    <section className="w-full  h-fit bg-light-bg relative px-[40px] py-16 max-xs:px-[20px]">
      <div className="flex items-center justify-between h-full max-w-[1250px] mx-auto max-md:flex-col max-md:gap-10">
        <div className="flex flex-col gap-5 z-40 max-md:order-2">
          <div className="text-4xl xl:text-6xl">
            <h1> Hi, I&apos;m WONHO </h1>

            <span className="font-bold text-dark-red">
              <CustomTypewriter />
            </span>
            <div className="flex">
              <h2 className="pt-2 xl:pt-0">from Korea</h2>
              <Image
                src="/assets/koreaflag.png"
                width={80}
                height={70}
                alt="koreaflag"
                className="z-10 ml-4 xl:pt-1"
              />
            </div>
            <p className="mt-5 text-xl">
              Front-end Developer. Coffee-fueled coder. Embracing new tech with
              a smile
            </p>
          </div>
          <div className="flex gap-4 max-md:justify-center font-bold">
            <Link href="#projects">
              <motion.button
                {...hoverMotion}
                className="bg-dark-blue text-white px-2 lg:px-4 py-2 rounded-md hover:bg-dark-blue/75 cursor-pointer"
              >
                Projects
              </motion.button>
            </Link>
            <Link href="#contact">
              <motion.button
                {...hoverMotion}
                className="bg-dark-blue text-white px-2 lg:px-4 py-2 rounded-md hover:bg-dark-blue/75 cursor-pointer"
              >
                Let&apos;s Talk
              </motion.button>
            </Link>
          </div>
        </div>
        <Image
          src="/assets/profile.png"
          width={300}
          height={400}
          alt="profile"
          className="z-10 rounded-xl"
          loading="eager"
          placeholder="blur"
          blurDataURL="/assets/blurImage.png"
        />
      </div>
      {/*Main 부분 배경 도형 렌더링을 위한 요소*/}
      <ul className="bg-squares">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </section>
  );
};

export default Main;
