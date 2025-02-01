import { ProjectCarousel } from "./ProjectCarousel";

export default function ProjectsList() {
  return (
    <>
      <div id="projects" className="mt-[20px] mb-5 mx-auto">
        <p className="my-6 mx-auto w-[50%] sm:max-w-[300px] text-[20px] font-semibold  p-1 text-center rounded">
          Projects
        </p>
        <ProjectCarousel />
      </div>
    </>
  );
}
