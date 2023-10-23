"use client";
import { useRef, useState } from "react";
import SectionTitle from "./SectionTitle/SectionTitle";
import { motion, useInView } from "framer-motion";

const About = () => {
  const ref = useRef(null);
  const ref2 = useRef(null);
  const isInView = useInView(ref);
  const isInView2 = useInView(ref2);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isFlipped2, setIsFlipped2] = useState(false);

  return (
    <section
      className="w-full h-fit px-[40px] py-10 max-xs:px-[20px] relative bg-white"
      id="about"
    >
      <div className="max-w-[1240px] mx-auto">
        <SectionTitle title={"About Me"} />
        <div className="mt-7">
          <motion.div
            ref={ref}
            className="mt-6 text-gray-800 text-[16px] leading-10 text-justify font-bold"
            initial={{ x: "-20vw" }}
            animate={{ x: isInView ? 0 : "-20vw" }}
            transition={{ duration: 1 }}
          >
            <p className="text-[20px] mb-2">
              안녕하세요! 주도적인 자세로 문제를 해결해 나가는 프론트엔드 개발자
              <span className=" ml-2">이원호</span>
              입니다.
            </p>
            <p>
              경영학부를 졸업하고, 채권관리 금융회사에서 사이드 업무로 회사
              홈페이지 업무를 담당하며, 유저의 관점에서 웹을 관리하고 개선했던
              경험을 통해 웹 개발에 대해 흥미를 갖게 되었습니다.
            </p>
            <p className="mb-2">
              이후 UI/UX를 직접 구축해 보고 싶은 열정이 생겨 프론트엔드 개발에
              입문하였고, 현재까지 JavaScript 언어와 React.js, Next.js를
              기반으로 프로젝트를 진행한 경험이 있습니다.
            </p>
            다양한 기능을 고민해보고 구현해 나가는 과정을 즐기는 개발자입니다.
            개발 과정에서 직면한 다양한 문제를 해결하고 새로운 지식을 습득하는
            과정속에서 스스로의 성장을 이루어 나가며, 이를 통해 더 많은
            동기부여를 얻고 있습니다.
            <br /> 앞으로도 끊임없이 관찰하고 고민하는 개발자의 여정에 있어서,
            항상 배움을 소중히 여기는 자세를 바탕으로 성장해 나갈 목표를 가지고
            있습니다.
          </motion.div>
        </div>
      </div>
      <div className="mt-10 ">
        <div className="w-full" ref={ref2}>
          <ul className="flex justify-between flex-col gap-5 md:flex-row">
            <motion.li
              className="w-full shadow-sm"
              initial={{ x: "-30vw", rotateY: 0 }}
              animate={{
                x: isInView2 ? 0 : "-30vw",
                rotateY: isFlipped ? 180 : 0,
              }}
              transition={{ duration: 0.6 }}
              onMouseEnter={() => setIsFlipped(true)}
              onMouseLeave={() => setIsFlipped(false)}
            >
              <a href="#projects">
                <div
                  className="w-full text-center py-[30px] md:py-[60px] rounded-md bg-light-bg"
                  style={{
                    transform: isFlipped ? "rotateY(180deg)" : "rotateY(0)",
                  }}
                >
                  <h3 className="text-[40px] mb-[3px] text-dark-red font-bold tracking-[0.2em]">
                    {isFlipped ? " CLICK " : "4+"}
                  </h3>
                  <span className="uppercase">
                    <span className="uppercase">
                      {isFlipped ? <> SHOW Projects List</> : "Projects"}
                    </span>
                  </span>
                </div>
              </a>
            </motion.li>
            <motion.li
              className="w-full shadow-sm"
              initial={{ x: "-30vw", rotateY: 0 }}
              animate={{
                x: isInView2 ? 0 : "-30vw",
                rotateY: isFlipped2 ? 180 : 0,
              }}
              transition={{ duration: 0.6 }}
              onMouseEnter={() => setIsFlipped2(true)}
              onMouseLeave={() => setIsFlipped2(false)}
            >
              <div
                className="w-full text-center py-[30px] md:py-[60px] rounded-md bg-light-bg "
                style={{
                  transform: isFlipped2 ? "rotateY(180deg)" : "rotateY(0)",
                }}
              >
                <h3 className="text-[40px] mb-[3px] text-dark-red font-bold">
                  {isFlipped2
                    ? "Business Administration"
                    : "BootCamp Certificate"}
                </h3>
                <span className="uppercase">
                  {isFlipped2
                    ? "Hankuk University of Foreign Studies"
                    : "software engineering - CodeState"}
                </span>
              </div>
            </motion.li>

            <motion.li
              className="w-full shadow-sm"
              initial={{ x: "-30vw" }}
              animate={{ x: isInView2 ? 0 : "-30vw" }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-full text-center py-[30px] md:py-[60px] rounded-md bg-light-bg">
                <h3 className="text-[40px] mb-[3px] text-dark-red font-bold">
                  6 Month
                </h3>
                <span className="uppercase"> Experience</span>
              </div>
            </motion.li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
