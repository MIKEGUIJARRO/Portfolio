import React, { FC, ReactNode } from 'react'

interface IWrapperCardProps {
    children: ReactNode
}

export const WrapperCard: FC<IWrapperCardProps> = ({ children }) => {
    return (
        <div className={'w-full h-full border border-slate-200 rounded-2xl overflow-hidden'}>
            {children}
        </div>
    )
}
