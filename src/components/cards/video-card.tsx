import { FC } from "react"
import { VideoPlayer } from "../video-player"

export interface IVideoCardProps {
    src: string
}

export const VideoCard: FC<IVideoCardProps> = ({ src }) => {
    return (
        <div className="w-full h-full">
            <VideoPlayer url={src} />
        </div>
    )
}
