import { IGridContent, IGridItem } from "@/components/grid/types"

type TProjectDataCommon = {
    title: string
    href?: string
    src: string
}

export type TProjectData =
    | {
        type: 'image'
        alt: string
    } & TProjectDataCommon
    | {
        type: 'video'
    } & TProjectDataCommon

export interface IProjectGridItem extends IGridItem<TProjectData> { }
export interface IProjectGridContent extends IGridContent<TProjectData> { }