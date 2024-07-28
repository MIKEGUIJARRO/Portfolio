'use client'

import { FC } from "react"
import { GridContent } from "./grid-content"
import { IProjectGridContent } from "../types"
import { AnimationCard } from "@/components/cards/animation-card"
import { TooltipCard } from "@/components/cards/tooltip-card"
import { WrapperCard } from "../../../components/cards/wrapper-card"

export const GridContentWrapper: FC<IProjectGridContent> = ({ id, type, isDragging, data }) => {
    return (
        <AnimationCard>
            <TooltipCard>
                <WrapperCard shadowHidden={!isDragging}>
                    <GridContent id={id} type={type} data={data} />
                </WrapperCard>
            </TooltipCard>
        </AnimationCard>
    )
}