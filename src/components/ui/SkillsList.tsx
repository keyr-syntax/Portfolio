import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import SkillsCarousel from "./SkillsCarousel";
export default function SkillsList() {
  const [open, setOpen] = useState<boolean>(false);
  const [openFrontendSkills, setOpenFrontendSkills] = useState<boolean>(false);
  const [openBackendSkills, setOpenBackendSkills] = useState<boolean>(false);
  const [openProgrammingSkills, setOpenProgrammingSkills] =
    useState<boolean>(false);
  const [openVersionControl, setOpenVersionControl] = useState<boolean>(false);
  const [openMobileApp, setOpenMobileApp] = useState<boolean>(false);

  return (
    <>
      <SkillsCarousel />
      <button
        onClick={() => {
          setOpen(!open);
          setOpenBackendSkills(false);
          setOpenFrontendSkills(false);
          setOpenProgrammingSkills(false);
          setOpenVersionControl(false);
          setOpenMobileApp(false);
        }}
        type="submit"
        className="block border border-solid border-borderColor rounded mt-[20px] mx-auto max-w-[500px] w-[80%] text-start py-2 px-5 text-white"
      >
        Special Skills{" "}
        {!open && <ChevronRight size={30} className="inline float-end" />}
        {open && <ChevronDown size={30} className="inline float-end" />}
      </button>
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="border border-solid border-borderColor rounded my-1 mx-auto max-w-[500px] w-[75%]  text-start bg-[#101012]"
            >
              <ul className="py-1 px-5 text-white">
                <li className="py-1 border-b border-solid border-borderColor">
                  Excellent communication skills
                </li>
                <li className="py-1 border-b border-solid border-borderColor">
                  Excellent in Team Work and Collaboration
                </li>
                <li className="py-1 border-b border-solid border-borderColor">
                  Excellent in Problem solving
                </li>
                <li className="py-1 border-b border-solid border-borderColor">
                  Dedicated to learning new Technologies
                </li>
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
      <button
        onClick={() => {
          setOpen(false);
          setOpenBackendSkills(false);
          setOpenFrontendSkills(false);
          setOpenProgrammingSkills(!openProgrammingSkills);
          setOpenVersionControl(false);
          setOpenMobileApp(false);
        }}
        type="submit"
        className="block border border-solid border-borderColor rounded my-[5px] mx-auto max-w-[500px] w-[80%] text-start py-2 px-5 text-white"
      >
        Programming Languages{" "}
        {!openProgrammingSkills && (
          <ChevronRight size={30} className="inline float-end" />
        )}
        {openProgrammingSkills && (
          <ChevronDown size={30} className="inline float-end" />
        )}
      </button>
      <AnimatePresence>
        {openProgrammingSkills && (
          <>
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="border border-solid border-borderColor rounded  my-1 mx-auto max-w-[500px] w-[75%]  text-start bg-[#101012]"
            >
              <ul className="py-1 px-5 text-white">
                <li className="py-1 border-b border-solid border-borderColor">
                  Typescript (Advanced)
                </li>
                <li className="py-1 border-b border-solid border-borderColor">
                  Javascript (Advanced)
                </li>
                <li className="py-1 border-b border-solid border-borderColor">
                  Python (Intermediate)
                </li>
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <button
        onClick={() => {
          setOpen(false);
          setOpenBackendSkills(false);
          setOpenFrontendSkills(!openFrontendSkills);
          setOpenProgrammingSkills(false);
          setOpenVersionControl(false);
          setOpenMobileApp(false);
        }}
        type="submit"
        className="block border border-solid border-borderColor rounded my-[5px] mx-auto max-w-[500px] w-[80%] text-start py-2 px-5 text-white"
      >
        Frontend Tech-stack{" "}
        {!openFrontendSkills && (
          <ChevronRight size={30} className="inline float-end" />
        )}
        {openFrontendSkills && (
          <ChevronDown size={30} className="inline float-end" />
        )}
      </button>
      <AnimatePresence>
        {openFrontendSkills && (
          <>
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="border border-solid border-borderColor rounded my-1 mx-auto max-w-[500px] w-[75%]  text-start bg-[#101012]"
            >
              <ul className="py-1 px-5 text-white">
                <li className="py-1 border-b border-solid border-borderColor">
                  React.js
                </li>
                <li className="py-1 border-b border-solid border-borderColor">
                  Next.js
                </li>
                <li className="py-1 border-b border-solid border-borderColor">
                  HTML
                </li>
                <li className="py-1 border-b border-solid border-borderColor">
                  Vanilla CSS
                </li>
                <li className="py-1 border-b border-solid border-borderColor">
                  Tailwind CSS
                </li>
                <li className="py-1 border-b border-solid border-borderColor">
                  Bootstrap CSS
                </li>
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
      <button
        onClick={() => {
          setOpen(false);
          setOpenBackendSkills(!openBackendSkills);
          setOpenFrontendSkills(false);
          setOpenProgrammingSkills(false);
          setOpenVersionControl(false);
          setOpenMobileApp(false);
        }}
        type="submit"
        className="block border border-solid border-borderColor rounded my-[5px] mx-auto max-w-[500px] w-[80%] text-start py-2 px-5 text-white"
      >
        Backend and Database
        {!openBackendSkills && (
          <ChevronRight size={30} className="inline float-end " />
        )}
        {openBackendSkills && (
          <ChevronDown size={30} className="inline float-end" />
        )}
      </button>
      <AnimatePresence>
        {openBackendSkills && (
          <>
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="border border-solid border-borderColor rounded my-1 mx-auto max-w-[500px] w-[75%] text-start bg-[#101012]"
            >
              <ul className="py-1 px-5 text-white">
                <li className="py-1 border-b border-solid border-borderColor">
                  Node js
                </li>
                <li className="py-1 border-b border-solid border-borderColor">
                  Express
                </li>
                <li className="py-1 border-b border-solid border-borderColor">
                  MongoDB
                </li>
                <li className="py-1 border-b border-solid border-borderColor">
                  MySQL
                </li>
                <li className="py-1 border-b border-solid border-borderColor">
                  Firebase
                </li>
                <li className="py-1 border-b border-solid border-borderColor">
                  Prisma ORM
                </li>
                <li className="py-1 border-b border-solid border-borderColor">
                  Mongoose ORM
                </li>
                <li className="py-1 border-b border-solid border-borderColor">
                  Sequelize ORM
                </li>
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
      <button
        onClick={() => {
          setOpen(false);
          setOpenBackendSkills(false);
          setOpenFrontendSkills(false);
          setOpenProgrammingSkills(false);
          setOpenVersionControl(!openVersionControl);
          setOpenMobileApp(false);
        }}
        type="submit"
        className="block border border-solid border-borderColor rounded my-[5px] mx-auto max-w-[500px] w-[80%] text-start py-2 px-5 text-white"
      >
        Version control{" "}
        {!openVersionControl && (
          <ChevronRight size={30} className="inline float-end" />
        )}
        {openVersionControl && (
          <ChevronDown size={30} className="inline float-end" />
        )}
      </button>
      <AnimatePresence>
        {openVersionControl && (
          <>
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="border border-solid border-borderColor rounded my-1 mx-auto max-w-[500px] w-[75%] text-start bg-[#101012]"
            >
              <ul className="py-1 px-5 text-white">
                <li className="py-1 border-b border-solid border-borderColor">
                  Git
                </li>
                <li className="py-1 border-b border-solid border-borderColor">
                  Github
                </li>
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
      <button
        onClick={() => {
          setOpenMobileApp(!openMobileApp);
          setOpen(false);
          setOpenBackendSkills(false);
          setOpenFrontendSkills(false);
          setOpenProgrammingSkills(false);
          setOpenVersionControl(false);
        }}
        type="submit"
        className="block border border-solid border-borderColor rounded my-[5px] mx-auto max-w-[500px] w-[80%] text-start py-2 px-5 text-white"
      >
        Mobile App{" "}
        {!openMobileApp && (
          <ChevronRight size={30} className="inline float-end" />
        )}
        {openMobileApp && (
          <ChevronDown size={30} className="inline float-end" />
        )}
      </button>
      <AnimatePresence>
        {openMobileApp && (
          <>
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="border border-solid border-borderColor rounded my-1 mx-auto max-w-[500px] w-[75%]  text-start bg-[#101012]"
            >
              <ul className="py-1 px-5 text-white">
                <li className="py-1 border-b border-solid border-borderColor">
                  React-native
                </li>
                <li className="py-1 border-b border-solid border-borderColor">
                  Expo framework
                </li>
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
