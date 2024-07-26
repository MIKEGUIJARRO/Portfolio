import { cn } from '@/lib/utils'
import React, { useEffect, useState } from 'react'

interface IGridItemProps extends React.HTMLAttributes<HTMLDivElement> {
    isDragging: boolean
    isDraggingDelayed: boolean
}

export const GridItem = React.forwardRef<HTMLDivElement, IGridItemProps>(({ style, className, onMouseDown, onMouseUp, onTouchEnd, children, isDragging, isDraggingDelayed, ...props }, ref) => {

    return (
        <div
            ref={ref}
            style={{
                ...style,
                zIndex: isDraggingDelayed ? 20 : 10
            }}
            onMouseDown={onMouseDown}
            onMouseUp={onMouseUp}
            onTouchEnd={onTouchEnd}
            className={cn(className)}
            {...props}>
            <div className={`w-full h-full hover:cursor-grab transition-all duration-200 ${isDragging && 'scale-[1.10]'}`}>
                {children}
            </div>
        </div>
    )
})
