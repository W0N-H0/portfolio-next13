"use client";
import {
  AiFillYoutube,
  AiFillEye,
  AiFillChrome,
  AiOutlineGithub,
  AiOutlineSearch,
} from "react-icons/ai";
import { GoEyeClosed } from "react-icons/go";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";

const ProjectCard = ({
  name,
  githubUrl,
  image,
  deployUrl,
  order,
  body,
  detail,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const [showDetail, setShowDetail] = useState(false);
  console.log(showDetail);

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
      <div className="w-full h-[86%] rounded-md shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
        <img
          src={image}
          alt={`${name} Image`}
          className="rounded-md"
          style={{ objectFit: "fill" }}
        />
      </div>
      <h3 className="my-4 text-dark-blue font-bold text-xl">{` ${order}. ${name}`}</h3>
      <div className="mb-2" dangerouslySetInnerHTML={{ __html: body }}></div>
      <motion.button
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 15,
        }}
        whileHover={{ scale: 1.1 }}
        className="flex mx-2 mb-2 py-2  bg-dark-blue rounded-md text-white font-bold w-[180px] justify-center"
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
            <div dangerouslySetInnerHTML={{ __html: detail }} />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex gap-2 items-center w-full ">
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
      </div>
    </motion.div>
  );
};

export default ProjectCard;
