import { CarouselLogos } from "@/components/carousel-logos";
import { ProjectsSection } from "./(landing)/_sections/projects";
import { HeroSection } from "./(landing)/_sections/hero";
import { AboutMeSection } from "./(landing)/_sections/about-me";


export default function Home() {
  return (
    <main className="container">
      <HeroSection />
      <CarouselLogos />
      <div className="pt-40">
        <ProjectsSection />
      </div>
      <div className="pt-40">
        <AboutMeSection />
      </div>
    </main>
  );
}
