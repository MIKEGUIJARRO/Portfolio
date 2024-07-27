import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
    return (
        <div className="h-screen m-auto flex justify-center items-center gap-8">
            <div>
                <Image src={'/profile_pic.jpeg'} alt="Profile picture" width={400} height={800} className="object-cover w-64 h-96 rounded-3xl" />
                <div className="pt-2">
                    <Link href={'https://x.com/mikeguijarro'} target="_blank">
                        @mike_guijarro
                    </Link>
                </div>
            </div>
            <div className="space-y-4 w-full max-w-lg">
                <h1 className="text-8xl font-bold uppercase">Software Engineer</h1>
                <h2>Currently building <Link href={'https://dartcom.io'} target="_blank">dartcom.io</Link> in public</h2>
            </div>
        </div>
    )
}