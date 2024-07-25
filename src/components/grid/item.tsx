import { cn } from '@/lib/utils'
import React, { useEffect, useState } from 'react'

interface IGridItemProps extends React.HTMLAttributes<HTMLDivElement> {
    isDragging: boolean
}

export const GridItem = React.forwardRef<HTMLDivElement, IGridItemProps>(({ style, className, onMouseDown, onMouseUp, onTouchEnd, children, isDragging, ...props }, ref) => {

    const [isDragged, setIsDragged] = useState<boolean>(false)

    const onMouseDownHandler = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (onMouseDown) {
            onMouseDown(event)
        }
        setIsDragged(true)
    }

    const onMouseUpHandler = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (onMouseUp) {
            onMouseUp(event)
        }
        setIsDragged(false)
    }

    const onTouchEndHandler = (event: React.TouchEvent<HTMLDivElement>) => {
        if (onTouchEnd) {
            onTouchEnd(event)
        }
        setIsDragged(false)
    }


    return (
        <div
            ref={ref}
            onMouseDown={onMouseDownHandler}
            onMouseUp={onMouseUpHandler}
            onTouchEnd={onTouchEndHandler}
            style={{
                ...style,
                zIndex: isDragging ? 20 : 10
            }}
            className={cn(className)}
            {...props}>
            <div className={`rounded-2xl overflow-hidden w-full h-full hover:cursor-grab transition-shadow duration-200 ${isDragged && 'shadow-2xl'}`}>
                {children}
            </div>
        </div>
    )
})
