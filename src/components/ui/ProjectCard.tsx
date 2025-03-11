import { Projects } from "@/lib/Projects";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { TvMinimalPlay } from "lucide-react";
export default function ProjectCard() {
  return (
    <>
      <div className="flex flex-row justify-evenly gap-2 mx-auto w-[90%] flex-wrap">
        {" "}
        {Projects.map((project) => (
          <div
            key={project.id}
            className="flex flex-col border border-solid border-[rgb(255,255,255,0.2)] rounded-lg p-5 gap-2 w-[300px]"
          >
            <p className="text-center font-bold text-[22px]">{project.title}</p>
            <p className="text-[16px] font-thin">
              {project.projectDescription}
            </p>
            <div className="flex flex-row gap-2 my-2">
              <Link
                to={`${project.liveDemo}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 text-wrap break-words flex flex-row gap-2 border border-[rgb(255,255,255,0.2)] p-2 rounded"
              >
                <TvMinimalPlay size={22} />
                <span className="font-thin text-[16px]">Live Demo</span>
              </Link>
              <Link
                target="_blank"
                to={`${project.githubLink}`}
                rel="noopener noreferrer"
                className="text-blue-600 text-wrap break-words flex flex-row gap-2 border border-[rgb(255,255,255,0.2)] p-2 rounded"
              >
                <FaGithub size={22} />
                <span className="font-thin text-[16px]">Github Link</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
