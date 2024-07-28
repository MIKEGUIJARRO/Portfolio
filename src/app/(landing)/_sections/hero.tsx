'use client'

import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

const itemVariants: Variants = {
    hidden: {
        opacity: 0,
        y: 10
    },
    visible: {
        opacity: 1,
        y: 0
    }
}

export function HeroSection() {
    return (
        <div className="h-screen m-auto flex flex-col lg:flex-row justify-center items-center gap-8">
            <div>
                <Image src={'/profile_pic.jpeg'} alt="Profile picture" width={400} height={800} className="object-cover w-64 h-96 rounded-3xl" />
                <div className="pt-2">
                    <Link href={'https://x.com/mikeguijarro'} target="_blank">
                        @mike_guijarro
                    </Link>
                </div>
            </div>
            <motion.div
                initial="hidden"
                animate="visible"
                variants={{ visible: { transition: { staggerChildren: 0.6 } } }}
                className="space-y-4 w-full max-w-lg text-center lg:text-start">
                <motion.h1
                    variants={itemVariants}
                    className="text-6xl lg:text-8xl font-bold uppercase">
                    Software Engineer
                </motion.h1>
                <motion.h2
                    variants={itemVariants}>
                    Currently building <Link href={'https://dartcom.io'} target="_blank">dartcom.io</Link> in public
                </motion.h2>
            </motion.div>
        </div>
    )
}