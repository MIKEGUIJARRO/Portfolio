import React, { FC, ReactNode } from 'react'

interface ITooltipPortalProps {
    children: ReactNode
}

export const TooltipPortal: FC<ITooltipPortalProps> = ({ children }) => {
    return (
        <div id="tooltip-portal" >
            {children}
        </div>
    )
}
