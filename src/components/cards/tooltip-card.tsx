'use client'

import React, { FC, ReactNode, useEffect, useState } from 'react'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { createPortal } from 'react-dom'

interface ITooltipCardProps {
    children: ReactNode
}

export const TooltipCard: FC<ITooltipCardProps> = ({ children }) => {
    const [portalElement, setPortalElement] = useState<HTMLElement | null>(null)

    useEffect(() => {
        const element = document.getElementById("tooltip-portal")
        setPortalElement(element)
    }, [])

    return (
        <TooltipProvider>
            <Tooltip delayDuration={1600}>
                <TooltipTrigger asChild>
                    <div className="w-full h-full">
                        {children}
                    </div>
                </TooltipTrigger>
                <TooltipContent>
                </TooltipContent>
                {portalElement && createPortal((
                    <TooltipContent>
                        <p className='text-lg'>
                            Grab me around! ✋
                        </p>
                    </TooltipContent>
                ), portalElement)
                }
            </Tooltip >
        </TooltipProvider>
    )
}
