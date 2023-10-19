"use client";
import ProjectCard from "./ProjectCard";
import { projects } from "@/constants/projects";
import SectionTitle from "./SectionTitle/SectionTitle";

const Projects = () => {
  return (
    <div
      className="w-full h-fit px-[40px] py-10 max-xs:px-[20px] relative bg-white"
      id="projects"
    >
      <div className="max-w-[1250px] m-auto">
        <SectionTitle title={"Projects"} />

        <div className="grid grid-cols-1 gap-4 mt-4">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              name={project.name}
              githubUrl={project.githubUrl}
              image={project.image}
              deployUrl={project.deployUrl}
              order={index + 1}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
