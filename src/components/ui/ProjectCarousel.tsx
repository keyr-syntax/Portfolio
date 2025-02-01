import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Projects } from "@/lib/Projects";
import { Link } from "react-router-dom";

export function ProjectCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 1500, stopOnInteraction: true })
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full max-w-sm mx-auto"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {Projects.map((project) => (
          <CarouselItem key={project.id}>
            <div className="p-1">
              <Card>
                <CardContent className="flex flex-col gap-4">
                  <h4 className="text-center mt-4 text-[20px]">
                    {project.title}
                  </h4>
                  <p className="font-thin">{project.projectDescription}</p>
                  <Link
                    target="_blank"
                    to={`${project.liveDemo}`}
                    rel="noopener noreferrer"
                    className="text-blue-600 text-wrap break-words"
                  >
                    <span>Live Demo:</span> {project.liveDemo}
                  </Link>
                  <Link
                    target="_blank"
                    to={`${project.githubLink}`}
                    rel="noopener noreferrer"
                    className="text-blue-600 text-wrap break-words"
                  >
                    <span>Github Link:</span> {project.githubLink}
                  </Link>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
