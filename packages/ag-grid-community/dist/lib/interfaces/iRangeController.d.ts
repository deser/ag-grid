// Type definitions for ag-grid-community v21.2.2
// Project: http://www.ag-grid.com/
// Definitions by: Niall Crosby <https://github.com/ag-grid/>
import { Column } from "../entities/column";
import { CellPosition } from "../entities/cellPosition";
import { GridPanel } from "../gridPanel/gridPanel";
import { RowPosition } from "../entities/rowPosition";
import { CellComp } from "../rendering/cellComp";
export interface IRangeController {
    removeAllCellRanges(): void;
    getCellRangeCount(cell: CellPosition): number;
    isCellInAnyRange(cell: CellPosition): boolean;
    isCellInSpecificRange(cell: CellPosition, range: CellRange): boolean;
    isContiguousRange(cellRange: CellRange): boolean;
    isMoreThanOneCell(): boolean;
    onDragStart(mouseEvent: MouseEvent): void;
    onDragStop(): void;
    onDragging(mouseEvent: MouseEvent): void;
    getCellRanges(): CellRange[] | null;
    setRangeToCell(cell: CellPosition, appendRange?: boolean): void;
    setCellRange(params: CellRangeParams): void;
    addCellRange(params: CellRangeParams): void;
    extendLatestRangeInDirection(key: number): CellPosition | undefined;
    extendLatestRangeToCell(cell: CellPosition): void;
    registerGridComp(gridPanel: GridPanel): void;
    getRangeStartRow(cellRange: CellRange): RowPosition;
    getRangeEndRow(cellRange: CellRange): RowPosition;
}
export interface ISelectionHandle {
    getGui(): HTMLElement;
    destroy(): void;
    getType(): string;
    refresh(cellComp: CellComp): void;
}
export declare enum CellRangeType {
    VALUE = 0,
    DIMENSION = 1
}
export interface CellRange {
    id?: string;
    type?: CellRangeType;
    startRow?: RowPosition;
    endRow?: RowPosition;
    columns: Column[];
    startColumn: Column;
}
export interface CellRangeParams {
    rowStartIndex?: number;
    rowStartPinned?: string;
    rowEndIndex?: number;
    rowEndPinned?: string;
    columnStart?: string | Column;
    columnEnd?: string | Column;
    columns?: (string | Column)[];
}
/** @deprecated */
export interface RangeSelection {
    start: CellPosition;
    end: CellPosition;
    columns: Column[] | null;
}
/** @deprecated */
export interface AddRangeSelectionParams {
    rowStart: number;
    floatingStart: string;
    rowEnd: number;
    floatingEnd: string;
    columnStart: string | Column;
    columnEnd: string | Column;
}
