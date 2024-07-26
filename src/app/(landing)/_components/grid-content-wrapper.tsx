'use client'

import { FC } from "react"
import { WrapperCard } from "../../../components/cards/wrapper-card"
import { GridContent } from "./grid-content"
import { IProjectGridContent } from "../types"

export const GridContentWrapper: FC<IProjectGridContent> = ({ id, type, isDragging, data }) => {
    return (
        <WrapperCard shadowHidden={!isDragging}>
            <GridContent id={id} type={type} data={data} />
        </WrapperCard>
    )
}