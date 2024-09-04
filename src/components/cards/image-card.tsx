'use client'

import Image from "next/image"
import { FC, useState } from "react"
import { Skeleton } from "../ui/skeleton"

export interface IImageCardProps {
    src: string
    alt: string
    isScaleHover?: boolean
}

export const ImageCard: FC<IImageCardProps> = ({ src, alt, isScaleHover = false }) => {

    const [isLoaded, setIsLoaded] = useState<boolean>(false)

    return (
        <div className={`w-full h-full transition-all duration-500 ${isScaleHover ? 'hover:scale-110' : ''}`}>
            {isLoaded ? <></> : <Skeleton className="w-full h-full" />}
            <Image
                onLoadingComplete={() => {
                    setIsLoaded(true)
                }}
                src={src}
                alt={alt}
                width={400}
                height={400}
                className="w-full h-full object-cover"
            />
        </div>
    )
}