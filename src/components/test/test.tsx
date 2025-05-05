import { useState } from "react";
import { ChevronRight, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import SkillsCarousel from "../ui/SkillsCarousel";

const skillsData = [
  {
    title: "Special Skills",
    skills: [
      "Excellent communication skills",
      "Excellent in Team Work and Collaboration",
      "Excellent in Problem solving",
      "Dedicated to learning new Technologies",
    ],
  },
  {
    title: "Programming Languages",
    skills: [
      "Typescript (Advanced)",
      "Javascript (Advanced)",
      "Python (Intermediate)",
    ],
  },
  {
    title: "Frontend Tech-stack",
    skills: [
      "React.js",
      "Next.js",
      "HTML",
      "Vanilla CSS",
      "Tailwind CSS",
      "Bootstrap CSS",
    ],
  },
  {
    title: "Backend and Database",
    skills: [
      "Node.js",
      "Express",
      "MongoDB",
      "MySQL",
      "Firebase",
      "Prisma ORM",
      "Mongoose ORM",
      "Sequelize ORM",
    ],
  },
  {
    title: "Version Control",
    skills: ["Git", "GitHub"],
  },
];

interface AccordionItemProps {
  title: string;
  skills: string[];
}

function AccordionItem({ title, skills }: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="block border border-solid border-borderColor rounded my-[5px] mx-auto max-w-[500px] w-[80%] text-start py-2 px-5 text-white"
      >
        {title}
        {isOpen ? (
          <ChevronDown size={30} className="inline float-end" />
        ) : (
          <ChevronRight size={30} className="inline float-end" />
        )}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="border border-solid border-borderColor rounded my-1 mx-auto max-w-[500px] w-[75%] text-start bg-[#101012]"
          >
            <ul className="py-1 px-5 text-white">
              {skills.map((skill, index) => (
                <li
                  key={index}
                  className="py-1 border-b border-solid border-borderColor"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default function SkillsList() {
  return (
    <>
      <SkillsCarousel />
      {skillsData.map((item, index) => (
        <AccordionItem key={index} title={item.title} skills={item.skills} />
      ))}
    </>
  );
}
