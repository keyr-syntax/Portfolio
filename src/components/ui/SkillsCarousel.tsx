import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { ListOfSkills } from "@/lib/SkillsList";

export default function SkillsCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 1000, stopOnInteraction: false })
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
        // onMouseEnter={plugin.current.stop}
        // onMouseLeave={plugin.current.reset}
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
