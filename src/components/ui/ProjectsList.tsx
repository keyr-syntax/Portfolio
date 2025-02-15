import ProjectCard from "./ProjectCard";

export default function ProjectsList() {
  return (
    <>
      <div id="projects" className="mt-[20px] mb-5 mx-auto">
        <p className="my-6 mx-auto w-[50%] sm:max-w-[300px] text-[24px] font-semibold  p-1 text-center rounded">
          Projects
        </p>
        <ProjectCard />
      </div>
    </>
  );
}
