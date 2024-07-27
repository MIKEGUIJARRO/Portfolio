import { Grid } from "@/components/grid/grid";
import { GridContentWrapper } from "../_components/grid-content-wrapper";
import { IProjectGridItem } from "../types";

export function ProjectsSection() {
    const items: IProjectGridItem[] = [
        {
            id: 'a_1',
            layout: { i: "a_1", x: 0, y: 0, w: 3, h: 2 },
            type: 'square_1x1',
            data: {
                type: 'video',
                src: 'https://d29p8yz5fxctco.cloudfront.net/assets/demo-dartcom.mp4',
                href: 'https://github.com/Dartcom-Solutions',
                title: 'Talk to your databases with AI'
            }
        },
        {
            id: 'h_2',
            layout: { i: "h_2", x: 3, y: 0, w: 1, h: 2 },
            type: 'square_1x1',
            data: {
                type: 'image',
                src: 'https://d29p8yz5fxctco.cloudfront.net/assets/takeout.png',
                href: 'https://www.figma.com/design/YI9t7velfcrJDfGktIUUhw/Design-System-Pickup!?node-id=406-524&t=TSGsMmTOhSGHwsp5-1',
                title: 'Takeout design',
                alt: 'Image alt'
            }
        },
        {
            id: 'g_3',
            layout: { i: "g_3", x: 1, y: 13, w: 2, h: 2 },
            type: 'square_1x1',
            data: {
                type: 'image',
                src: 'https://d29p8yz5fxctco.cloudfront.net/assets/datadrive_1.png',
                href: 'https://github.com/MIKEGUIJARRO/DataDriveBackend?tab=readme-ov-file',
                title: 'Templating engine for google docs',
                alt: 'Image alt'
            }
        },
        {
            id: 'c_4',
            layout: { i: "c_4", x: 0, y: 4, w: 1, h: 1 },
            type: 'square_1x1',
            data: {
                type: 'image',
                src: 'https://d29p8yz5fxctco.cloudfront.net/assets/merkadito.png',
                href: 'https://github.com/MIKEGUIJARRO/Merkadito',
                title: 'Bodega landing',
                alt: 'Image alt'
            }
        },
        {
            id: 'f_5',
            layout: { i: "f_5", x: 2, y: 4, w: 1, h: 1 },
            type: 'square_1x1',
            data: {
                type: 'image',
                src: 'https://d29p8yz5fxctco.cloudfront.net/assets/old_portfolio_1.png',
                href: 'https://github.com/MIKEGUIJARRO/Portfolio',
                title: 'My old portfolio',
                alt: 'Image alt'
            }
        },
        {
            id: 'b',
            layout: { i: "b", x: 1, y: 5, w: 1, h: 1 },
            type: 'square_1x1',
            data: {
                type: 'image',
                src: 'https://d29p8yz5fxctco.cloudfront.net/assets/blog.png',
                href: 'https://github.com/MIKEGUIJARRO/BlogApp',
                title: 'Networking blog',
                alt: 'Image alt'
            }
        },
        {
            id: 'e',
            layout: { i: "e", x: 0, y: 7, w: 1, h: 2 },
            type: 'square_1x1',
            data: {
                type: 'image',
                src: 'https://d29p8yz5fxctco.cloudfront.net/assets/my_shop_3.png',
                href: 'https://github.com/MIKEGUIJARRO/ShopApp',
                title: 'Ecommerce app',
                alt: 'Image alt'
            }
        },
        {
            id: 'd',
            layout: { i: "d", x: 3, y: 12, w: 1, h: 1 },
            type: 'square_1x1',
            data: {
                type: 'image',
                src: 'https://d29p8yz5fxctco.cloudfront.net/assets/my_box_2.png',
                href: 'https://github.com/MIKEGUIJARRO/MyBox',
                title: 'Shipping dashboard',
                alt: 'Image alt'
            },
        },
        {
            id: 'i',
            layout: { i: "i", x: 1, y: 2, w: 3, h: 2 },
            type: 'square_1x1',
            data: {
                type: 'video',
                src: 'https://d29p8yz5fxctco.cloudfront.net/assets/recluta.mp4',
                href: 'https://github.com/MIKEGUIJARRO/ReclutaClient',
                title: 'Hiring platform',
            },
        }
    ]
    return (
        <div>
            <h2 className="font-bold text-6xl ml-6 mb-4">Personal projects</h2>
            <Grid items={items} GridContent={GridContentWrapper} />
        </div>
    )
}