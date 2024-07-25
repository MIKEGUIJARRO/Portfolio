import { CarouselLogos } from "@/components/carousel-logos";
import { Grid } from "@/components/grid/grid";
import Image from "next/image";


export default function Home() {
  return (
    <main className="container">
      <div className="h-screen m-auto flex justify-center items-center gap-8">
        <div>
          <Image src={'/profile_pic.jpeg'} alt="Profile picture" width={400} height={800} className="object-cover w-64 h-96 rounded-3xl" />
          <p>@mike_guijarro</p>
        </div>
        <div className="space-y-4 w-full max-w-lg">
          <h1 className="text-8xl font-bold uppercase">Software Engineer</h1>
          <h2>Currently building dartcom.io in public</h2>
        </div>
      </div>
      <CarouselLogos />
      <div className="pt-40">
        <Grid items={[
          {
            id: 'a',
            layout: { i: "a", x: 0, y: 0, w: 1, h: 1 },
            type: 'square'
          }
        ]} />
      </div>
      <div className="h-[800px]">

      </div>
    </main>
  );
}
