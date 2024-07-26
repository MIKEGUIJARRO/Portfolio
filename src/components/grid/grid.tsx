'use client'

import '/node_modules/react-grid-layout/css/styles.css'
import '/node_modules/react-resizable/css/styles.css'
import './grid.css'

import { useMemo, useState } from 'react'
import { ItemCallback, Layout, Responsive, WidthProvider } from "react-grid-layout"

import { GridItem } from './item'
import { IGridContent, IGridItem } from './types'

const ResponsiveGridLayout = WidthProvider(Responsive)

interface IGridProps<T> {
    items: IGridItem<T>[]
    GridContent: React.ComponentType<IGridContent<T>>
}

export function Grid<T>({ items, GridContent }: IGridProps<T>) {

    const [activeDraggedItem, setActiveDraggedItem] = useState<string | null>(null)
    const [activeDraggedItemDelayed, setActiveDraggedItemDelayed] = useState<string | null>(null)

    const memoItemsLayout: Layout[] = useMemo(() => items.map((gridItem) => gridItem.layout), [items])

    /* Drag Handlers */
    const onDragStartHandler: ItemCallback = (layout, oldItem, newItem, placeholder, event, element) => {
        setActiveDraggedItem(oldItem.i)
        setActiveDraggedItemDelayed(oldItem.i)
    }

    const onDragStopHandler: ItemCallback = (layout, oldItem, newItem, placeholder, event, element) => {
        setActiveDraggedItem(null)
        setTimeout(() => {
            setActiveDraggedItemDelayed(null)
        }, 200)
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
            preventCollision={false}
            isResizable={false}>
            {items.map((item) => {
                const isDraggingDelayed = activeDraggedItemDelayed ? activeDraggedItemDelayed === item.id : false
                const isDragging = activeDraggedItem ? activeDraggedItem === item.id : false
                return (
                    <GridItem
                        key={item.id}
                        isDragging={isDragging}
                        isDraggingDelayed={isDraggingDelayed}
                    >
                        <GridContent id={item.id} type={item.type} isDragging={isDragging} data={item.data} />
                    </GridItem>
                )
            })}
        </ResponsiveGridLayout>
    )
}
