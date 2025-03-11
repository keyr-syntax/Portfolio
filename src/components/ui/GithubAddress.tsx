import { ShieldCheck, MailOpen } from "lucide-react";
import { Link } from "react-router-dom";

export default function GithubAddress() {
  return (
    <>
      <div id="resume" className="mt-[20px] mb-5 mx-auto">
        <p className="my-6 mx-auto w-[50%] sm:max-w-[300px] text-[24px] font-semibold  p-1 text-center rounded">
          Certificates and Achievements
        </p>

        <p className="my-6 mx-auto w-[80%] max-w-[500px] text-[20px]  p-2 text-center text-white rounded border border-solid border-borderColor">
          <p className="flex flex-row justify-start items-center gap-2 p-2 my-6 mx-auto w-[100%] max-w-[500px] text-md  text-center text-white rounded border border-solid border-borderColor">
            <ShieldCheck className="bg-green-600 rounded" size={30} />{" "}
            <Link
              rel="noopener"
              target="_blank"
              to="https://drive.google.com/file/d/1yoQwPQ4MdoBRjlbvdldSGJY3rO-I7GfA/view?usp=sharing"
              className="text-blue-600 text-wrap break-words"
            >
              Certificate
            </Link>
          </p>
          <p className="flex flex-row justify-start items-center gap-2 p-2 my-6 mx-auto w-[100%] max-w-[500px] text-md  text-center text-white rounded border border-solid border-borderColor">
            <MailOpen className="bg-green-600 rounded" size={30} />{" "}
            <Link
              rel="noopener"
              target="_blank"
              to="https://drive.google.com/file/d/1Z4R5ePqEza1FY-OQtHevW_mSOYfLyrXS/view?usp=sharing"
              className="text-blue-600 text-wrap break-words text-start"
            >
              Letter of Recommendation
            </Link>
          </p>
        </p>
      </div>
    </>
  );
}
