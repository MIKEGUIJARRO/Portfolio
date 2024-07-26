import { Grid } from "@/components/grid/grid";
import { GridContentWrapper } from "../_components/grid-content-wrapper";
import { IProjectGridItem } from "../types";

export function ProjectsSection() {
    const items: IProjectGridItem[] = [
        {
            id: 'a',
            layout: { i: "a", x: 0, y: 0, w: 3, h: 2 },
            type: 'square_1x1',
            data: {
                type: 'video',
                src: 'https://d29p8yz5fxctco.cloudfront.net/assets/demo-dartcom.mp4',
                href: 'https://tailwindcss.com/docs/text-transform',
                title: 'Demo Video'
            }
        },
        {
            id: 'b',
            layout: { i: "b", x: 1, y: 0, w: 1, h: 1 },
            type: 'square_1x1',
            data: {
                type: 'image',
                src: 'https://images.pexels.com/photos/19278623/pexels-photo-19278623/free-photo-of-mar-hombre-surfero-oceano.jpeg',
                href: 'https://github.com/contentful/contentful.js',
                title: 'Demo Image',
                alt: 'Image alt'
            }
        }
    ]
    return (
        <Grid items={items} GridContent={GridContentWrapper} />
    )
}