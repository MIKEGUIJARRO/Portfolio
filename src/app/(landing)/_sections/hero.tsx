'use client'

import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { ImageCard } from "@/components/cards/image-card";

const itemVariants: Variants = {
    hidden: {
        opacity: 0,
        y: 20
    },
    visible: {
        opacity: 1,
        y: 0
    }
}

export function HeroSection() {
    return (
        <div className="h-screen m-auto flex flex-col lg:flex-row justify-center items-center gap-8">
            <motion.div
                initial="hidden"
                animate="visible"
                variants={{ visible: { transition: { staggerChildren: 2 } } }}>
                <motion.div variants={itemVariants}>
                    <div className="object-cover w-64 h-96 rounded-3xl overflow-hidden">
                        <ImageCard
                            alt="Profile picture"
                            src="/profile_pic.jpeg"
                        />
                    </div>
                </motion.div>
                <motion.div variants={itemVariants} className="pt-2">
                    <Link href={'https://x.com/mikeguijarro'} target="_blank">
                        @mike_guijarro
                    </Link>
                </motion.div>
            </motion.div>
            <motion.div
                initial="hidden"
                animate="visible"
                variants={{ visible: { transition: { staggerChildren: 1 } } }}
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