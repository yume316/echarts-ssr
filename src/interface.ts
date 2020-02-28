export enum ChartType {
    Echarts = 'echarts',
    AntV = 'antv'
}

export interface Config {
    width: number,
    height: number,
    path: string,
    renderGif?: boolean,
    createCanvas?: CreateCanvas,
    options: object, // echarts options
    chartType?: ChartType,
    customChartHandler?: ChartHandler,
}

export interface ChartOptions {
    animation?: boolean
}

interface RenderParams {
    options: ChartOptions,
    canvas: any,
    width?: number,
    height?: number,
    renderGif?: boolean
}

export interface ChartRender {
    (renderParams: RenderParams): object;
}

interface ExportParams {
    chart: any,
    path?: string,
    renderGif?: boolean
}

export interface ChartExporter {
    (exportParams: ExportParams): object;
}

export interface ChartHandler {
    chartRender: ChartRender,
    chartExporter: ChartExporter
}

export interface CreateCanvas {
    (width: number, height: number): any;
}