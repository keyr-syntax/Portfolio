import { useRef, useState } from "react";

import useClickOutside from "./ClickOutsideNavbarMenu";

import { Link } from "react-router-dom";
import {
  CircleUserRound,
  MenuIcon,
  FolderOpen,
  AtSign,
  Github,
  X,
  CodeXmlIcon,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import ScrollIntoView from "react-scroll-into-view";
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const menuRef = useRef<HTMLDivElement>(null);
  useClickOutside({ menuRef, setMenuOpen });

  return (
    <>
      <div className="bg-secondBgColor flex flex-row items-center md:justify-evenly m-auto w-full overflow-auto border border-solid border-borderColor z-1000 fixed top-0 left-0 right-0">
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
              onClick={() => {
                setMenuOpen(false);
              }}
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
    </>
  );
}
