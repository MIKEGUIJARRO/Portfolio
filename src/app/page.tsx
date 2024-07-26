import Image from "next/image";

import { CarouselLogos } from "@/components/carousel-logos";
import { Grid } from "@/components/grid/grid";
import { GridContentWrapper } from "./(landing)/_components/grid-content-wrapper";
import { ProjectsSection } from "./(landing)/_sections/projects";
import { HeroSection } from "./(landing)/_sections/hero";


export default function Home() {
  return (
    <main className="container">
      <HeroSection />
      <CarouselLogos />
      <div className="pt-40">
        <ProjectsSection />
      </div>
      <div className="h-[800px]">

      </div>
    </main>
  );
}
