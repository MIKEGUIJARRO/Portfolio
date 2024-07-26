import Image from "next/image";

export function HeroSection() {
    return (
        <div className="h-screen m-auto flex justify-center items-center gap-8">
            <div>
                <Image src={'/profile_pic.jpeg'} alt="Profile picture" width={400} height={800} className="object-cover w-64 h-96 rounded-3xl" />
                <p className="mt-2">@mike_guijarro</p>
            </div>
            <div className="space-y-4 w-full max-w-lg">
                <h1 className="text-8xl font-bold uppercase">Software Engineer</h1>
                <h2>Currently building dartcom.io in public</h2>
            </div>
        </div>
    )
}