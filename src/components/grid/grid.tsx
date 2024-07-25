'use client'

import '/node_modules/react-grid-layout/css/styles.css'
import '/node_modules/react-resizable/css/styles.css'
import './grid.css'

import { FC, useMemo, useState } from 'react'
import GridLayout, { ItemCallback, Layout, Responsive, WidthProvider } from "react-grid-layout"

import { GridItem } from './item'
import { IGridContent, IGridItem } from './types'

const ResponsiveGridLayout = WidthProvider(Responsive)

interface IGridProps {
    items: IGridItem[]
    GridContent: React.ComponentType<IGridContent>
}

export const Grid: FC<IGridProps> = ({ items, GridContent }) => {
    const [activeDraggedItem, setActiveDraggedItem] = useState<string | null>(null)
    const memoItemsLayout: Layout[] = useMemo(() => items.map((gridItem) => gridItem.layout), [items])

    /* Drag Handlers */
    const onDragStartHandler: ItemCallback = (layout, oldItem, newItem, placeholder, event, element) => {
        setActiveDraggedItem(oldItem.i)
    }

    const onDragStopHandler: ItemCallback = (layout, oldItem, newItem, placeholder, event, element) => {
        setTimeout(() => {
            setActiveDraggedItem(null)
        }, 200);
    }

    /* Drag Handler */
    const onDragHandler: ItemCallback = () => {
        console.log('onDragHandler')
    }

    return (
        <ResponsiveGridLayout
            className='layout'
            compactType={'vertical'}
            layouts={{ lg: memoItemsLayout, md: memoItemsLayout, sm: memoItemsLayout }}
            breakpoints={{ lg: 1024, md: 768, sm: 640 }}
            cols={{ lg: 4, md: 2, sm: 1 }}
            margin={[24, 24]}
            rowHeight={270}
            onDragStart={onDragStartHandler}
            onDragStop={onDragStopHandler}
            onDrag={onDragHandler}
            preventCollision={false}
            isResizable={false}>
            {items.map((item) => {
                const isDragging = activeDraggedItem ? activeDraggedItem === item.id : false
                return (
                    <GridItem
                        key={item.id}
                        isDragging={isDragging}>
                        <GridContent id={item.id} type={item.type} />
                    </GridItem>
                )
            })}
        </ResponsiveGridLayout>
    )
}
