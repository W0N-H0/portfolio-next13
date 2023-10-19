"use client";
import SectionTitle from "./SectionTitle/SectionTitle";

const Projects = () => {
  return (
    <div
      className="w-full h-fit px-[40px] py-10 max-xs:px-[20px] relative bg-white"
      id="projects"
    >
      <div className="max-w-[1250px] m-auto">
        <SectionTitle title={"Projects"} />
        <div>프로젝트 섹션입니다.</div>
      </div>
    </div>
  );
};

export default Projects;
