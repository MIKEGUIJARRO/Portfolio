import { Layout } from "react-grid-layout"

export type GridItemTypes = 'square_1x1' | 'column_1x2' | 'row_2x1' | 'square_2x2' | 'rectangle_4_2'

export interface IGridItem {
    id: string
    layout: Layout
    type: GridItemTypes
}

export interface IGridContent {
    id: string
    type: GridItemTypes
}