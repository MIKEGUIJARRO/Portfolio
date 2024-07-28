'use client'

import { motion, Variants } from "framer-motion";
import { FC, useState } from "react";

const cardVariants: Variants = {
    below_offscreen: {
        y: 800,
        opacity: 0,
    },
    onscreen: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            bounce: 0.26,
            duration: 1
        }
    }
}

interface IAnimationCardProps {
    children: React.ReactNode
}

export const AnimationCard: FC<IAnimationCardProps> = ({ children }) => {
    return (
        <motion.div
            className="w-full h-full"
            initial="below_offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.6 }}>
            <motion.div
                className="w-full h-full"
                variants={cardVariants}>
                {children}
            </motion.div>
        </motion.div>
    )
}
