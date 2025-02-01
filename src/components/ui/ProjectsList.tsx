export default function ProjectsList() {
  return (
    <>
      <div id="projects" className="mt-[20px] mb-5 mx-auto">
        <p className="my-6 mx-auto w-[50%] sm:max-w-[300px] text-[20px] font-semibold  p-1 text-center rounded">
          Projects
        </p>
        <div className="border border-solid border-borderColor w-[80%] max-w-[500px] my-[1px] mx-auto rounded">
          <p className="my-1 mx-auto w-[50%] sm:max-w-[300px] text-[20px] font-semibold  p-1 text-center rounded">
            Blog Platform
          </p>
          <p className="max-w-[500px] text-md px-5  py-3 text-start text-white text-nowrap">
            See Website demo:
            <a
              target="_blank"
              href="https://syntax-blog-platform-project.keyrunasir.com/"
              rel="noopener noreferrer"
              className="text-blue-600 text-wrap break-words"
            >
              https://syntax-blog-platform-project.keyrunasir.com/
            </a>
          </p>
          <p className="max-w-[500px] text-md  px-5  py-3 text-start text-white text-nowrap">
            Github link:
            <a
              href="https://github.com/keyr-syntax/Blog-platform"
              rel="noopener"
              target="_blank"
              className="text-blue-600 text-wrap break-words"
            >
              https://github.com/keyr-syntax/Blog-platform
            </a>
          </p>
          <p className=" max-w-[500px] text-md px-5  py-3 text-start text-white">
            This blog platform is built by using Javascript, React, Bootstrap,
            Express and MySQL database.The Blog website is equipped with
            advanced features and functionality
          </p>
        </div>
      </div>
    </>
  );
}
