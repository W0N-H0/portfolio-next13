"use client";
import {
  AiFillYoutube,
  AiFillEye,
  AiFillChrome,
  AiOutlineGithub,
} from "react-icons/ai";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ProjectCard = ({ name, githubUrl, image, deployUrl, order }) => {
  const ref = useRef(null);
  const isInView = useInView(ref);

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
      className="mb-4 p-4 border border-gray-200 rounded-lg shadow-md bg-light-bg"
    >
      <div className="w-full h-[86%] rounded-md shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
        <img
          src={image}
          alt={`${name} Image`}
          className="mb-2 rounded-md"
          style={{ objectFit: "fill" }}
        />
      </div>
      <h3 className="my-4 text-dark-blue font-bold text-xl">{` ${order}. ${name}`}</h3>
      <div className="flex gap-2 items-center w-full">
        <motion.a
          {...hoverMotion}
          href={githubUrl}
          target="_blank"
          className="text-dark-blue p-1 rounded-full text-xl"
        >
          <AiOutlineGithub className="text-3xl" />
        </motion.a>

        <motion.a
          {...hoverMotion}
          href={deployUrl}
          target="_blank"
          className="text-dark-blue hover:underline text-3xl"
        >
          <AiFillChrome />
        </motion.a>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
