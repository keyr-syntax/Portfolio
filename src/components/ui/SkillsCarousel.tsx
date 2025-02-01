import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
const ListOfSkills = [
  {
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    name: "Typescript",
    id: 1,
  },
  {
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    name: "Javascript",
    id: 2,
  },
  {
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    name: "Python",
    id: 3,
  },
  {
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    name: "React",
    id: 4,
  },
  {
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    name: "Next.js",
    id: 5,
  },
  {
    image:
      "https://www.techuz.com/static/e33ed070a6f3885cfe9444f6baf97500/6172c/Tailwind-logo.webp",
    name: "Tailwind",
    id: 6,
  },
  {
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    name: "Bootstrap",
    id: 7,
  },
  {
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    name: "HTML",
    id: 8,
  },
  {
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    name: "CSS",
    id: 9,
  },

  {
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    name: "Node.js",
    id: 10,
  },

  {
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    name: "Express",
    id: 11,
  },
  {
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    name: "MongoDB",
    id: 12,
  },
  {
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    name: "MySQL",
    id: 13,
  },

  {
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
    name: "Firebase",
    id: 14,
  },
  {
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    name: "GitHub",
    id: 15,
  },
  {
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    name: "Git",
    id: 16,
  },
  {
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
    name: "Vercel",
    id: 17,
  },
];

export default function SkillsCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 1000, stopOnInteraction: true })
  );
  return (
    <>
      <p
        id="skills"
        className="mt-6 mx-auto w-[50%] sm:max-w-[300px] text-[20px] font-semibold  p-1 text-center rounded"
      >
        Skills
      </p>
      <Carousel
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        className="w-full max-w-lg justify-center items-center mx-auto mb-10 mt-5"
      >
        <CarouselContent>
          {ListOfSkills.map((skill) => (
            <CarouselItem key={skill.id} className="basis-1/3">
              <div className="flex flex-row gap-3">
                <Card className=" w-48 h-48">
                  <CardContent className="flex items-center justify-center p-6 ">
                    <img
                      className="max-h-full max-w-full object-contain"
                      src={skill.image}
                      alt={skill.name}
                    />
                  </CardContent>
                  <CardFooter className="text-center">{skill.name}</CardFooter>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </>
  );
}
