import { InitializeGoogleAnalytics, PageVisitor } from "@/lib/GoogleAnalytics";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function AboutMe() {
  useEffect(() => {
    InitializeGoogleAnalytics();
    PageVisitor();
  }, []);

  return (
    <>
      <div id="aboutme" className="mt-[100px] mb-5 mx-auto">
        <p className="my-6 mx-auto w-[50%] sm:max-w-[300px] text-[24px] font-semibold  p-1 text-center rounded">
          About Me
        </p>

        <p className="my-6 mx-auto w-[50%] sm:max-w-[300px] text-[20px] font-semibold bg-gradient-to-r from-violet-700 to-pink-600 p-1 text-center rounded-lg">
          Hello, I'm Keyru Nasir
        </p>
        <p className="my-6 mx-auto w-[80%] max-w-[500px] text-[18px] font-thin  p-3 text-center text-white rounded-lg border border-solid border-borderColor">
          I am Full-stack developer with excellent skills in both Frontend and
          Backend Tech stacks. As part of a team internship, I led the
          development of{" "}
          <Link
            className="text-blue-600 font-bold"
            to="https://calmify-ai-mental-health-app.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Calmify, an AI-powered mental health support app,
          </Link>{" "}
          which chosen as the Best App by the Go2Cod community. I served as the
          team leader, built the entire backend, and contributed to the frontend
          development, ensuring a seamless user experience.
        </p>
      </div>
    </>
  );
}
