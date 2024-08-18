import Image from "next/image"
import { FC } from "react"

export interface IImageCardProps {
    src: string
    alt: string
    isScaleHover?: boolean
}

export const ImageCard: FC<IImageCardProps> = ({ src, alt, isScaleHover = false }) => {
    return (
        <div className={`w-full h-full transition-all duration-500 ${isScaleHover ? 'hover:scale-110' : ''}`}>
            <Image
                src={src}
                alt={alt}
                width={400}
                height={400}
                className="w-full h-full object-cover"
            />
        </div>
    )
}
