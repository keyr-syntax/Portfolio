import { InitializeGoogleAnalytics, PageVisitor } from "@/lib/GoogleAnalytics";
import { useEffect } from "react";

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

        <p className="my-6 mx-auto w-[50%] sm:max-w-[300px] text-md font-semibold bg-gradient-to-r from-violet-700 to-pink-600 p-1 text-center rounded-lg">
          Hello, I'm Keyru Nasir
        </p>
        <p className="my-6 mx-auto w-[80%] max-w-[500px] text-[18px] font-thin  p-3 text-center text-white rounded-lg border border-solid border-borderColor">
          I am Full-stack developer as well as React-native mobile App developer
          with excellent skills in both Frontend and Backend Tech stacks.
        </p>
      </div>
    </>
  );
}
