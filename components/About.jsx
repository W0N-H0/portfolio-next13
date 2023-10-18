"use client";
import { useRef } from "react";
import SectionTitle from "./SectionTitle/SectionTitle";
import { motion, useInView } from "framer-motion";

const About = () => {
  const ref = useRef(null);
  const ref2 = useRef(null);
  const isInView = useInView(ref);
  const isInView2 = useInView(ref2);
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
            className="mt-6 text-gray-800 text--[20px] leading-10 text-justify font-bold"
            initial={{ x: "-20vw" }}
            animate={{ x: isInView ? 0 : "-20vw" }}
            transition={{ duration: 1 }}
          >
            안녕하세요🙇 주도적인 자세로 문제를 해결해 나가는 프론트엔드 개발자
            이원호입니다. <br />
            다양한 기능을 고민해보고 구현해 나가는 과정을 즐기는 개발자입니다.
            새로운 지식을 습득하는 과정을 기록하며 스스로의 성장을 인지하고 더
            많은 동기부여를 얻고 있습니다.
            <br /> 상대방의 생각을 공유하고 커뮤니케이션하며, 함께 일하고 하고
            싶은 개발자가 되고 싶습니다.
          </motion.div>
        </div>
      </div>
      <div className="mt-10 ">
        <div className="w-full" ref={ref2}>
          <ul className="flex justify-between flex-col gap-5 md:flex-row">
            <motion.li
              className="w-full shadow-sm"
              initial={{ x: "-30vw" }}
              animate={{ x: isInView2 ? 0 : "-30vw" }}
              transition={{ duration: 0.9 }}
            >
              {/*클릭시 프로젝트 섹션으로 이동하도록 수정** */}
              <div className="w-full text-center py-[30px] md:py-[60px] rounded-md bg-light-bg">
                <h3 className="text-[40px] mb-[3px] text-dark-red font-bold">
                  4+
                </h3>
                <span className="uppercase"> Projects</span>
              </div>
            </motion.li>
            <motion.li
              className="w-full shadow-sm"
              initial={{ x: "-30vw" }}
              animate={{ x: isInView2 ? 0 : "-30vw" }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-full text-center py-[30px] md:py-[60px] rounded-md bg-light-bg">
                <h3 className="text-[40px] mb-[3px] text-dark-red font-bold">
                  BootCamp Certificate
                </h3>
                <span className="uppercase">
                  software engineering - CodeState
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
