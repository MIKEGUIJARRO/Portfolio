import { Layout } from "react-grid-layout"

export type GridItemTypes = 'square' | 'column' | 'row' | 'bigSquare' | 'bigColumn' | 'bigRow'

export interface IGridItem {
    id: string
    layout: Layout
    type: GridItemTypes
}
