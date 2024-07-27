import { Grid } from "@/components/grid/grid";
import { GridContentWrapper } from "../_components/grid-content-wrapper";
import { IProjectGridItem } from "../types";

export function AboutMeSection() {
    const items: IProjectGridItem[] = [
        {
            id: 'a',
            layout: { i: "a", x: 0, y: 0, w: 1, h: 2 },
            type: 'square_1x1',
            data: {
                type: 'video',
                src: 'https://d29p8yz5fxctco.cloudfront.net/assets/about-me/dartcom_walkthrough.mp4',
                href: 'https://www.instagram.com/reel/C83q2V0OC4T/?igsh=Zml4cHhtcThzNTlj',
                title: 'I build in public'
            }
        },
        {
            id: 'b',
            layout: { i: "b", x: 1, y: 0, w: 1, h: 1 },
            type: 'square_1x1',
            data: {
                type: 'image',
                src: 'https://d29p8yz5fxctco.cloudfront.net/assets/about-me/aws.jpeg',
                title: 'Learn to code at 15 yo',
                alt: 'Miguel learning to code at age 15'
            }
        },
        {
            id: 'c',
            layout: { i: "c", x: 2, y: 0, w: 2, h: 1 },
            type: 'square_1x1',
            data: {
                type: 'video',
                src: 'https://d29p8yz5fxctco.cloudfront.net/assets/about-me/grad_video.mp4',
                title: 'Graduated summer 2023'
            }
        },
        {
            id: 'd',
            layout: { i: "d", x: 2, y: 1, w: 1, h: 1 },
            type: 'square_1x1',
            data: {
                type: 'image',
                src: 'https://d29p8yz5fxctco.cloudfront.net/assets/about-me/hike_2.jpeg',
                title: 'Enjoy hiking',
                alt: 'Miguel enjoying a hike'
            }
        },
        {
            id: 'e',
            layout: { i: "e", x: 0, y: 2, w: 2, h: 1 },
            type: 'square_1x1',
            data: {
                type: 'image',
                src: 'https://d29p8yz5fxctco.cloudfront.net/assets/about-me/cai.JPG',
                title: 'Worked at a Stanford funded company',
                alt: 'Miguel working at a Stanford funded company'
            }
        },
        {
            id: 'f',
            layout: { i: "f", x: 3, y: 2, w: 1, h: 2 },
            type: 'square_1x1',
            data: {
                type: 'image',
                src: 'https://d29p8yz5fxctco.cloudfront.net/assets/about-me/bjj.JPG',
                title: 'I love BJJ',
                alt: 'Miguel practicing Brazilian Jiu-Jitsu'
            }
        },
        {
            id: 'g',
            layout: { i: "g", x: 1, y: 2, w: 2, h: 1 },
            type: 'square_1x1',
            data: {
                type: 'image',
                src: 'https://d29p8yz5fxctco.cloudfront.net/assets/about-me/grad_group.jpeg',
                title: 'Graduated from the #1 private college in mx',
                alt: 'Miguel and friends at graduation'
            }
        },
        {
            id: 'h',
            layout: { i: "h", x: 3, y: 2, w: 1, h: 2 },
            type: 'square_1x1',
            data: {
                type: 'image',
                src: 'https://d29p8yz5fxctco.cloudfront.net/assets/about-me/award.PNG',
                title: 'Awarded with the best entrepreneurial career',
                alt: 'Miguel receiving an award for best entrepreneurial career'
            }
        },
        {
            id: 'i',
            layout: { i: "i", x: 3, y: 1, w: 1, h: 1 },
            type: 'square_1x1',
            data: {
                type: 'image',
                src: 'https://d29p8yz5fxctco.cloudfront.net/assets/about-me/valedictorian.jpeg',
                title: 'Lowkey nerd (3.7 GPA)',
                alt: 'Miguel as a valedictorian with a 3.7 GPA'
            }
        },
        {
            id: 'j',
            layout: { i: "j", x: 2, y: 6, w: 1, h: 1 },
            type: 'square_1x1',
            data: {
                type: 'image',
                src: 'https://d29p8yz5fxctco.cloudfront.net/assets/about-me/goat.JPG',
                title: 'Cole is my favorite rapper',
                alt: 'Miguel\'s favorite rapper, J. Cole'
            }
        },
        {
            id: 'k',
            layout: { i: "k", x: 0, y: 6, w: 2, h: 2 },
            type: 'square_1x1',
            data: {
                type: 'image',
                src: 'https://d29p8yz5fxctco.cloudfront.net/assets/about-me/books.jpeg',
                title: 'Been reading for a while',
                alt: 'Miguel\'s collection of books'
            }
        },
    ]
    return (
        <div>
            <div>
                <h2 className="font-bold text-6xl ml-6 mb-4">About me</h2>
                <Grid items={items} GridContent={GridContentWrapper} />
            </div>
        </div>
    )
}
