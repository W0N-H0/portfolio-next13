"use client";
import {
  AiFillYoutube,
  AiFillEye,
  AiFillChrome,
  AiOutlineGithub,
  AiOutlineSearch,
} from "react-icons/ai";
import { GoEyeClosed } from "react-icons/go";
import { TbBrandYoutubeFilled } from "react-icons/tb";
import Image from "next/image";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";

const ProjectCard = ({
  name,
  githubUrl,
  image,
  deployUrl,
  youtubeUrl,
  order,
  body,
  detail,
  skills,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const [showDetail, setShowDetail] = useState(false);
  // 문자열에서 특정 주소 부분 추출
  // "assets/projects/BiBi2.png"에서 "assets/projects/" 다음의 부분을 추출 Image 태그를 사용하기 위함
  const imagePath = image.split("assets/projects/")[1];

  const handleShowDetail = () => {
    setShowDetail(!showDetail);
  };

  const hoverMotion = {
    transition: {
      type: "spring",
      stiffness: 500,
      damping: 15,
    },
    whileHover: { scale: 1.5 },
  };

  return (
    <motion.div
      ref={ref}
      initial={{ y: "-10vh" }}
      animate={{ y: isInView ? 0 : "-10vh" }}
      transition={{ duration: 0.5 }}
      className="flex flex-col mb-6 p-4 border border-gray-200 rounded-lg shadow-md bg-light-bg z-1"
    >
      <div className="rounded-md shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
        <Image
          src={`/assets/projects/${imagePath}`}
          alt={`${name} Image`}
          className="rounded-md"
          height={800}
          width={1400}
        />
      </div>
      <h3 className="my-4 text-dark-blue font-bold text-xl">{` ${order}. ${name}`}</h3>
      <div className="mb-2" dangerouslySetInnerHTML={{ __html: body }}></div>
      <motion.button
        {...hoverMotion}
        whileHover={{ ...hoverMotion.whileHover, scale: 1.1 }}
        className="flex mb-2 py-2  bg-dark-blue rounded-md text-white font-bold w-[180px] justify-center"
        onClick={handleShowDetail}
      >
        {showDetail ? (
          <>
            <GoEyeClosed className="text-xl mr-2" />
            Hide...
          </>
        ) : (
          <>
            <AiOutlineSearch className="text-2xl mr-2" />
            Show Details...
          </>
        )}
      </motion.button>

      <AnimatePresence>
        {showDetail && detail && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div
              className="border-[2px] rounded-md shadow-sm"
              dangerouslySetInnerHTML={{ __html: detail }}
            />
            <div className="flex flex-wrap mt-4">
              {skills &&
                skills.map((skill, index) => {
                  return (
                    <motion.span
                      {...hoverMotion}
                      whileHover={{ ...hoverMotion.whileHover, scale: 1.1 }}
                      key={index}
                      className="p-2 mr-2 mb-2 bg-dark-blue text-white rounded-md"
                    >
                      {skill}
                    </motion.span>
                  );
                })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex gap-2 items-center w-full mt-1">
        <motion.a
          {...hoverMotion}
          href={githubUrl}
          target="_blank"
          className="relative text-dark-blue p-1 rounded-full text-xl group"
        >
          <AiOutlineGithub className="text-3xl" />
          <span className="social-icon-description2">Github Link</span>
        </motion.a>

        <motion.a
          {...hoverMotion}
          href={deployUrl}
          target="_blank"
          className="relative text-dark-blue hover:underline text-xl group"
        >
          <AiFillChrome className="text-3xl" />
          <span className="social-icon-description2">Deploy Link</span>
        </motion.a>

        {youtubeUrl ? (
          <motion.a
            {...hoverMotion}
            href={youtubeUrl}
            target="_blank"
            className="relative text-dark-blue hover:underline text-xl group ml-1"
          >
            <TbBrandYoutubeFilled className="text-3xl" />
            <span className="social-icon-description2">Youtube Link</span>
          </motion.a>
        ) : null}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
