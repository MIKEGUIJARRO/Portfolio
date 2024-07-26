import { Layout } from "react-grid-layout"

export type TGridItemTypes = 'square_1x1' | 'column_1x2' | 'row_2x1' | 'square_2x2' | 'rectangle_4_2'

export interface IGridItem<T> {
    id: string
    layout: Layout
    type: TGridItemTypes
    data: T
}

export interface IGridContent<T> {
    id: string
    type: TGridItemTypes
    isDragging: boolean
    data: T
}