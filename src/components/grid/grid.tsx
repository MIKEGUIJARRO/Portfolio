'use client'

import '/node_modules/react-grid-layout/css/styles.css'
import '/node_modules/react-resizable/css/styles.css'
import './grid.css'

import { FC, useMemo, useState } from 'react'
import GridLayout, { ItemCallback, Layout } from "react-grid-layout"

import { GridItem } from './item'
import { IGridItem } from './types'

interface IGridProps {
    items: IGridItem[]
}

export const Grid: FC<IGridProps> = ({ items }) => {
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
        <GridLayout
            className='layout'
            compactType={'vertical'}
            layout={memoItemsLayout}
            cols={4}
            margin={[24, 24]}
            rowHeight={270}
            width={1200}
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
                        <div className='p-4 bg-red-100 w-full h-full'>
                            {item.id}
                        </div>
                    </GridItem>
                )
            })}
        </GridLayout>
    )
}
