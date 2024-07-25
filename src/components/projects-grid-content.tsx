'use client'

import { FC } from "react"
import { IGridContent } from "./grid/types"

export const ProjectsGridContent: FC<IGridContent> = ({ id }) => {
    return (
        <div className="w-full h-full bg-red-50 rounded-2xl p-4">
            {id}
        </div>
    )
}
