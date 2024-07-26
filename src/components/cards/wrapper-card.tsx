import React, { FC, ReactNode } from 'react'

interface IWrapperCardProps {
    children: ReactNode
    shadowHidden?: boolean
}

export const WrapperCard: FC<IWrapperCardProps> = ({ children, shadowHidden = false }) => {
    return (
        <div className={`w-full h-full border border-slate-200 rounded-2xl overflow-hidden transition-all duration-200 ${!shadowHidden && 'shadow-2xl'}`}>
            {children}
        </div>
    )
}
