import Image from "next/image"
import { FC } from "react"

export interface IImageCardProps {
    src: string
    alt: string
}

export const ImageCard: FC<IImageCardProps> = ({ src, alt }) => {
    return (
        <div className="w-full h-full">
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
