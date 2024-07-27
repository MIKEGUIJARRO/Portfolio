
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
                if (data.href) {
                    return (
                        <ImageCardWithTitleWithLink
                            title={data.title}
                            href={data.href}
                            target="_blank"
                            src={data.src}
                            alt={data.alt}
                        />
                    )
                }
                return (
                    <ImageCardWithTitle
                        title={data.title}
                        src={data.src}
                        alt={data.alt}
                    />
                )

            case 'video':
                if (data.href) {
                    return (
                        <VideoCardWithTitleWithLink
                            title={data.title}
                            href={data.href}
                            target="_blank"
                            src={data.src}
                        />
                    )
                }
                return (
                    <VideoCardWithTitle
                        title={data.title}
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
