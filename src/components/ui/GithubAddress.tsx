import { Github } from "lucide-react";

export default function GithubAddress() {
  return (
    <>
      <div id="resume" className="mt-[20px] mb-5 mx-auto">
        <p className="my-6 mx-auto w-[50%] sm:max-w-[300px] text-[24px] font-semibold  p-1 text-center rounded">
          Github Link
        </p>

        <p className="my-6 mx-auto w-[80%] max-w-[500px] text-md  p-2 text-center text-white rounded border border-solid border-borderColor">
          Visit my github page to see source code of my projects
          <p className="flex gap-1 p-2 my-6 mx-auto w-[100%] max-w-[500px] text-md  text-center text-white rounded border border-solid border-borderColor">
            <Github size={30} />{" "}
            <a
              rel="noopener"
              target="_blank"
              href="https://github.com/keyr-syntax"
              className="text-blue-600 text-wrap break-words"
            >
              https://github.com/keyr-syntax
            </a>
          </p>
        </p>
      </div>
    </>
  );
}
