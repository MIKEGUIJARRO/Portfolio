'use client'

import Image from "next/image"
import Autoplay from "embla-carousel-autoplay"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

type logo = {
    key: string
    src: string
    alt: string
}

const logosArr: logo[] = [
    {
        key: 'dartcom',
        src: '/dartcom.svg',
        alt: 'Logo Dartcom',
    },
    {
        key: 'climateai',
        src: '/climateai.png',
        alt: 'Logo Climate Ai',
    },
    {
        key: 'tec',
        src: '/tec.svg',
        alt: 'Logo Tec de Monterrey',
    }
]

export const CarouselLogos = () => {
    return (
        <div className="space-y-8">
            <p className="text-center font-semibold text-xl">Built software at</p>
            <Carousel
                plugins={[
                    Autoplay({
                        delay: 2000,
                    }),
                ]}
            >
                <CarouselContent>
                    {
                        logosArr.map((logo) => (
                            <CarouselItem key={logo.key} className="flex md:basis-1/2 lg:basis-1/3 items-center justify-center">
                                <Image src={logo.src} alt={logo.alt} width={200} height={100} />
                            </CarouselItem>
                        ))
                    }
                </CarouselContent>
            </Carousel>
        </div>
    )
}
