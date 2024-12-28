import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  CircleUserRound,
  MenuIcon,
  FolderOpen,
  AtSign,
  Github,
  X,
  CodeXmlIcon,
  Copyright,
} from "lucide-react";

import useClickOutside from "./ClickOutsideNavbarMenu";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import ScrollIntoView from "react-scroll-into-view";
import { Phone } from "lucide-react";
import { Mail } from "lucide-react";
type Input = string;

const Portfolio: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const [openFrontendSkills, setOpenFrontendSkills] = useState<boolean>(false);
  const [openBackendSkills, setOpenBackendSkills] = useState<boolean>(false);
  const [openProgrammingSkills, setOpenProgrammingSkills] =
    useState<boolean>(false);
  const [openVersionControl, setOpenVersionControl] = useState<boolean>(false);
  const [name, setName] = useState<Input>("");
  const [email, setEmail] = useState<Input>("");
  const [message, setMessage] = useState<Input>("");
  const form = useRef<HTMLFormElement | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  useClickOutside({ menuRef, setMenuOpen });

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      toast.error("Missing configuration for email service");
      return;
    }
    if (!form.current) {
      return;
    }

    emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
      () => {
        setName("");
        setEmail("");
        setMessage("");
        toast.success("Message sent");
      },
      (error) => {
        toast.error("Failed to send Message");
      }
    );
  };

  return (
    <>
      <div className="bg-secondBgColor flex flex-row items-center md:justify-evenly m-auto w-full overflow-auto border border-solid border-borderColor z-999 fixed top-0 left-0 right-0">
        <Link
          className="text-nowrap p-[12px] no-underline text-[20px] text-center "
          to="/"
        >
          Keyru Nasir
        </Link>
        <ScrollIntoView
          smooth={true}
          scrollOptions={{
            behavior: "smooth",
            block: "start",
            inline: "start",
          }}
          selector="#aboutme"
        >
          <Link
            className="md:flex hidden gap-2 items-center text-nowrap  p-[12px] no-underline text-lg text-center"
            to="/about"
          >
            <CircleUserRound />
            About Me
          </Link>
        </ScrollIntoView>

        <ScrollIntoView
          alignToTop={true}
          smooth={true}
          scrollOptions={{
            behavior: "smooth",
            block: "start",
            inline: "start",
          }}
          selector="#skills"
        >
          <Link
            className="md:flex hidden gap-2 items-center text-nowrap  p-[12px] no-underline text-lg text-center"
            to="/about"
          >
            <CodeXmlIcon />
            Skills
          </Link>
        </ScrollIntoView>
        <ScrollIntoView
          alignToTop={true}
          smooth={true}
          scrollOptions={{
            behavior: "smooth",
            block: "start",
            inline: "start",
          }}
          selector="#projects"
        >
          <Link
            className="md:flex hidden gap-2 items-center text-nowrap p-[12px] no-underline text-lg text-center"
            to="/projects"
          >
            <FolderOpen />
            Projects
          </Link>
        </ScrollIntoView>
        <ScrollIntoView
          alignToTop={true}
          smooth={true}
          scrollOptions={{
            behavior: "smooth",
            block: "start",
            inline: "start",
          }}
          selector="#resume"
        >
          <Link
            className="md:flex hidden gap-2 items-center text-nowrap  p-[12px] no-underline text-lg text-center"
            to="/resume"
          >
            {" "}
            <Github />
            Github Link
          </Link>
        </ScrollIntoView>
        <ScrollIntoView
          alignToTop={true}
          smooth={true}
          scrollOptions={{
            behavior: "smooth",
            block: "start",
            inline: "start",
          }}
          selector="#contactme"
        >
          <Link
            className="md:flex hidden gap-2 items-center text-nowrap  p-[12px] no-underline text-lg text-center"
            to="/contact"
          >
            {" "}
            <AtSign />
            Contact Me
          </Link>
        </ScrollIntoView>

        {!menuOpen && (
          <MenuIcon
            onClick={() => {
              setMenuOpen(!menuOpen);
            }}
            size={30}
            className="md:hidden cursor-pointer absolute right-5"
          />
        )}
        {menuOpen && (
          <X
            onClick={() => {
              setMenuOpen(!menuOpen);
            }}
            size={30}
            className="md:hidden cursor-pointer absolute right-5"
          />
        )}
      </div>
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            ref={menuRef}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="bg-secondBgColor flex flex-col overflow-hidden md:hidden  mx-auto w-full  border border-solid border-borderColor z-999 fixed top-14 left-0 right-0"
          >
            <ScrollIntoView
              alignToTop={true}
              smooth={true}
              scrollOptions={{
                behavior: "smooth",
                block: "start",
                inline: "start",
              }}
              selector="#aboutme"
              onClick={() => {
                setMenuOpen(false);
              }}
            >
              <Link
                className="flex md:hidden gap-2 items-center text-nowrap  p-[12px] no-underline text-lg text-center"
                to="/about"
              >
                <CircleUserRound />
                About Me
              </Link>
            </ScrollIntoView>
            <ScrollIntoView
              alignToTop={true}
              smooth={true}
              scrollOptions={{
                behavior: "smooth",
                block: "start",
                inline: "start",
              }}
              selector="#skills"
              onClick={() => {
                setMenuOpen(false);
              }}
            >
              <Link
                className="flex md:hidden gap-2 items-center text-nowrap  p-[12px] no-underline text-lg text-center"
                to="/about"
              >
                <CodeXmlIcon />
                Skills
              </Link>
            </ScrollIntoView>
            <ScrollIntoView
              alignToTop={true}
              smooth={true}
              scrollOptions={{
                behavior: "smooth",
                block: "start",
                inline: "start",
              }}
              selector="#projects"
              onClick={() => {
                setMenuOpen(false);
              }}
            >
              <Link
                className="flex md:hidden gap-2 items-center text-nowrap p-[12px] no-underline text-lg text-center"
                to="/projects"
              >
                <FolderOpen />
                Projects
              </Link>
            </ScrollIntoView>
            <ScrollIntoView
              alignToTop={true}
              smooth={true}
              scrollOptions={{
                behavior: "smooth",
                block: "start",
                inline: "start",
              }}
              selector="#resume"
            >
              <Link
                className="flex md:hidden gap-2 items-center text-nowrap  p-[12px] no-underline text-lg text-center"
                to="/resume"
              >
                {" "}
                <Github />
                Github Link
              </Link>
            </ScrollIntoView>
            <ScrollIntoView
              alignToTop={true}
              smooth={true}
              scrollOptions={{
                behavior: "smooth",
                block: "start",
                inline: "start",
              }}
              selector="#contactme"
              onClick={() => {
                setMenuOpen(false);
              }}
            >
              <Link
                className="flex md:hidden gap-2 items-center text-nowrap  p-[12px] no-underline text-lg text-center"
                to="/contact"
              >
                {" "}
                <AtSign />
                Contact Me
              </Link>
            </ScrollIntoView>
          </motion.div>
        )}
      </AnimatePresence>

      <div id="aboutme" className="mt-[100px] mb-5 mx-auto">
        <p className="my-6 mx-auto w-[50%] sm:max-w-[300px] text-[20px] font-semibold  p-1 text-center rounded">
          About Me
        </p>

        <p className="my-6 mx-auto w-[50%] sm:max-w-[300px] text-md font-semibold bg-gradient-to-r from-violet-700 to-pink-600 p-1 text-center rounded">
          Hello, I'm Keyru Nasir
        </p>
        <p className="my-6 mx-auto w-[80%] max-w-[500px] text-md  p-3 text-center text-white rounded border border-solid border-borderColor">
          I am Full-stack developer with excellent skills in both Frontend and
          Backend Tech stacks.
        </p>
      </div>
      <p
        id="skills"
        className="my-6 mx-auto w-[50%] sm:max-w-[300px] text-[20px] font-semibold  p-1 text-center rounded"
      >
        Skills
      </p>
      <button
        onClick={() => {
          setOpen(!open);
          setOpenBackendSkills(false);
          setOpenFrontendSkills(false);
          setOpenProgrammingSkills(false);
          setOpenVersionControl(false);
        }}
        type="submit"
        className="block border border-solid border-borderColor rounded mt-[20px] mx-auto max-w-[500px] w-[80%] text-start py-2 px-5 text-white"
      >
        Special Skills
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
        }}
        type="submit"
        className="block border border-solid border-borderColor rounded my-[5px] mx-auto max-w-[500px] w-[80%] text-start py-2 px-5 text-white"
      >
        Programming Languages
      </button>
      <AnimatePresence>
        {openProgrammingSkills && (
          <>
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="border border-solid border-borderColor rounded  my-1 mx-auto max-w-[500px] w-[80%]  text-start bg-[#101012]"
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
        }}
        type="submit"
        className="block border border-solid border-borderColor rounded my-[5px] mx-auto max-w-[500px] w-[80%] text-start py-2 px-5 text-white"
      >
        Frontend Tech-stack
      </button>
      <AnimatePresence>
        {openFrontendSkills && (
          <>
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="border border-solid border-borderColor rounded my-1 mx-auto max-w-[500px] w-[80%]  text-start bg-[#101012]"
            >
              <ul className="py-1 px-5 text-white">
                <li className="py-1 border-b border-solid border-borderColor">
                  React
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
        }}
        type="submit"
        className="block border border-solid border-borderColor rounded my-[5px] mx-auto max-w-[500px] w-[80%] text-start py-2 px-5 text-white"
      >
        Backend and Database Tech-stack
      </button>
      <AnimatePresence>
        {openBackendSkills && (
          <>
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="border border-solid border-borderColor rounded my-1 mx-auto max-w-[500px] w-[80%]  text-start bg-[#101012]"
            >
              <ul className="py-1 px-5 text-white">
                <li className="py-1 border-b border-solid border-borderColor">
                  Node js
                </li>
                <li className="py-1 border-b border-solid border-borderColor">
                  Express
                </li>
                <li className="py-1 border-b border-solid border-borderColor">
                  MongoDB with Mongoose
                </li>
                <li className="py-1 border-b border-solid border-borderColor">
                  MySQL with Sequelize
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
        }}
        type="submit"
        className="block border border-solid border-borderColor rounded my-[5px] mx-auto max-w-[500px] w-[80%] text-start py-2 px-5 text-white"
      >
        Version control
      </button>
      <AnimatePresence>
        {openVersionControl && (
          <>
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="border border-solid border-borderColor rounded my-1 mx-auto max-w-[500px] w-[80%]  text-start bg-[#101012]"
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
      <div id="projects" className="mt-[20px] mb-5 mx-auto">
        <p className="my-6 mx-auto w-[50%] sm:max-w-[300px] text-[20px] font-semibold  p-1 text-center rounded">
          Projects
        </p>
        <div className="border border-solid border-borderColor w-[80%] max-w-[500px] my-[1px] mx-auto rounded">
          <p className="my-1 mx-auto w-[50%] sm:max-w-[300px] text-[20px] font-semibold  p-1 text-center rounded">
            Blog Platform
          </p>
          <p className="max-w-[500px] text-md px-5  py-3 text-start text-white">
            See Website demo:
            <a
              target="_blank"
              href="https://syntax-blog-platform-project.keyrunasir.com/"
              rel="noopener noreferrer"
              className="text-blue-600 text-wrap"
            >
              https://syntax-blog-platform-project.keyrunasir.com/
            </a>
          </p>
          <p className="max-w-[500px] text-md  px-5  py-3 text-start text-white">
            Github link:
            <a
              href="https://github.com/keyr-syntax/Blog-platform"
              rel="noopener"
              target="_blank"
              className="text-blue-600 text-wrap"
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
      <div id="resume" className="mt-[20px] mb-5 mx-auto">
        <p className="my-6 mx-auto w-[50%] sm:max-w-[300px] text-[20px] font-semibold  p-1 text-center rounded">
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
              className="text-blue-600 text-wrap"
            >
              https://github.com/keyr-syntax
            </a>
          </p>
        </p>
      </div>
      <div id="contactme" className="flex flex-col mb-[10px]">
        <p className="my-6 mx-auto w-[50%] sm:max-w-[300px] text-[20px] font-semibold  p-1 text-center rounded">
          Contact me
        </p>
        <p className="flex my-1 mx-auto w-[80%] sm:max-w-[300px] text-[20px] p-1 text-start rounded">
          <Phone size={30} className="mr-3" /> <span>0716967559</span>
        </p>
        <p className="flex mt-1 mb-3 mx-auto w-[80%] sm:max-w-[300px] text-[20px] p-1 text-start rounded">
          <Mail size={30} className="mr-3" /> <span>keyrsyntax@gmail.com</span>
        </p>
        <form
          ref={form}
          className="flex flex-col w-[80%] md:max-w-[500px] rounded-md mx-auto border border-solid border-borderColor py-10 px-[20px]"
          onSubmit={sendEmail}
        >
          <label className="py-1 mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="h-[40px] px-2 rounded-md text-white  bg-borderColor border border-solid border-borderColor focus:bg-borderColor focus:border focus:border-solid focus:border-white text-sm"
            type="text"
            name="from_name"
            placeholder="Write your name"
            value={name}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setName(e.target.value);
            }}
            required
          />
          <label className="py-1 mt-3 mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="h-[40px] text-sm px-2 rounded text-white bg-borderColor border border-solid border-borderColor focus:bg-borderColor focus:border focus:border-solid focus:border-white"
            type="text"
            name="user_email"
            placeholder="Write email address"
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setEmail(e.target.value);
            }}
            required
          />
          <label className="py-1 mt-3 mb-2" htmlFor="email">
            Message
          </label>
          <textarea
            className="text-white text-sm px-2 py-2 rounded bg-borderColor border border-solid border-borderColor focus:bg-borderColor focus:border focus:border-solid focus:border-white"
            name="message"
            placeholder="Write your message here"
            rows={3}
            value={message}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
              setMessage(e.target.value);
            }}
            required
          />
          <button
            className="mt-3 py-1 rounded mx-auto border border-solid border-borderColor w-[50%]"
            type="submit"
          >
            Submit
          </button>
        </form>
        <Toaster />
      </div>
      <p className="flex flex-row mt-8 mx-auto w-[80%] justify-center items-center sm:max-w-[300px] text-[18px] text-center rounded">
        <Copyright size={25} /> 2024 Keyru Nasir
      </p>
      <p className="my-2 mb-8 mx-auto w-[50%] sm:max-w-[300px] text-[18px]  gap-1 text-center rounded">
        All Rights Reserved
      </p>
    </>
  );
};

export default Portfolio;
