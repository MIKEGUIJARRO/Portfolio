import { CarouselLogos } from "@/components/carousel-logos";
import { ProjectsSection } from "./(landing)/_sections/projects";
import { HeroSection } from "./(landing)/_sections/hero";
import { AboutMeSection } from "./(landing)/_sections/about-me";
import { FooterSection } from "./(landing)/_sections/footer";


export default function Home() {
  return (
    <main className="container">
      <HeroSection />
      <CarouselLogos />
      <div className="pt-80">
        <ProjectsSection />
      </div>
      <div className="pt-80">
        <AboutMeSection />
      </div>
      <div className="pt-80">
        <FooterSection />
      </div>
    </main>
  );
}
