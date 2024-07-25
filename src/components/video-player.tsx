'use client'

import { FC, useCallback, useEffect, useRef, useState } from 'react';
import ReactPlayer from 'react-player';
import screenfull from 'screenfull';
import { Maximize, Minimize } from 'lucide-react';

import { Button } from './ui/button';

interface IVideoPlayerProps {
    url: string
}

export const VideoPlayer: FC<IVideoPlayerProps> = ({ url }) => {

    const [isFullscreen, setIsFullscreen] = useState(false)
    const [isClient, setIsClient] = useState(false);

    const refPlayer = useRef<ReactPlayer>(null)

    const handleScreenfullChange = useCallback(() => {
        setIsFullscreen(screenfull.isFullscreen)
    }, [])

    useEffect(() => {
        setIsClient(true)
        if (screenfull.isEnabled) {
            screenfull.on('change', handleScreenfullChange)
        }
        return () => {
            if (screenfull.isEnabled) {
                screenfull.on('change', handleScreenfullChange)
            }
        }
    }, [])

    const onFullScreen = useCallback(() => {
        if (refPlayer.current === null) {
            return
        }
        const videoElement = refPlayer.current.getInternalPlayer() as HTMLVideoElement;
        if (screenfull.isEnabled) {
            screenfull.request(videoElement)
        }
    }, [refPlayer.current])

    return (
        <div className='relative w-full h-full'>
            {isClient && <ReactPlayer
                ref={refPlayer}
                className='absolute inset-0 [&>video]:object-cover'
                width='100%'
                height='100%'
                loop={true}
                controls={false}
                playing={true}
                muted={!isFullscreen}
                config={{ file: { attributes: { controlsList: 'nodownload', disablePictureInPicture: true } } }}
                url={url}
            />}
            <Button
                className='absolute bottom-0 right-0 m-4 rounded-full'
                variant={'outline'}
                size="icon"
                onClick={onFullScreen}>
                {isFullscreen ? <Minimize /> : <Maximize />}
            </Button>
        </div>
    )
}
