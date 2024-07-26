
import { withTitle } from "@/components/cards/with-title"
import { withLink } from "@/components/cards/with-link"

import { ImageCard } from "@/components/cards/image-card"
import { VideoCard } from "@/components/cards/video-card"

import { IProjectGridContent } from "../types"

const VideoCardWithTitle = withTitle(VideoCard)
const VideoCardWithTitleWithLink = withLink(VideoCardWithTitle)


const ImageCardWithTitle = withTitle(ImageCard)
const ImageCardWithTitleWithLink = withLink(ImageCardWithTitle)

export const GridContent = ({ id, type, data }: Omit<IProjectGridContent, 'isDragging'>) => {

    const renderGridContent = () => {
        switch (data.type) {
            case 'image':
                return (
                    <ImageCardWithTitleWithLink
                        title={data.title}
                        href={data.href}
                        target="_blank"
                        src={data.src}
                        alt={data.alt}
                    />
                )
            case 'video':
                return (
                    <VideoCardWithTitleWithLink
                        title={data.title}
                        href={data.href}
                        target="_blank"
                        src={data.src}
                    />
                )
            default:
                return <>Unsupported media type</>
        }
    }

    return (
        <>
            {renderGridContent()}
        </>
    )
}
