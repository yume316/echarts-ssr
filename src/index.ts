import {ChartType, Config, ChartHandler, CreateCanvas} from './interface';
import Gif from "gif.js";
import {EchartsHandler} from "./charts-handler/echarts";
let {createCanvas} = require('canvas');

const LOCAL_HANDLER_MAP = {
    [ChartType.Echarts]: EchartsHandler
};
const DEFAULT_OPTIONS = {
    title: {
        text: 'test'
    },
    tooltip: {},
    legend: {
        data: ['test']
    },
    xAxis: {
        data: ["a", "b", "c", "d", "f", "g"]
    },
    yAxis: {},
    series: [{
        name: 'test',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
    }]
};

export default class EchartsSSR {
    config: Config;
    defaultConfig: Config = {
        width: 500,
        height: 500,
        path: '',
        chartType: ChartType.Echarts,
        options: DEFAULT_OPTIONS,
    };
    canvas: any;
    chart: any;
    chartHandler: ChartHandler;
    createCanvas: CreateCanvas;

    constructor(config: Config) {
        this.config = Object.assign({}, this.defaultConfig, config);
        const {width, height, customChartHandler, chartType} = this.config;
        this.createCanvas = this.config.createCanvas || createCanvas;
        this.canvas = this.createCanvas(width, height);
        this.chartHandler = customChartHandler || LOCAL_HANDLER_MAP[chartType];
    }

    render(): void {
        let {canvas} = this;
        let {options, renderGif} = this.config;
        this.chart = this.chartHandler.chartRender({options, canvas, renderGif});
    }

    export(): any {
        let {chart} = this;
        let {path, renderGif} = this.config;
        return this.chartHandler.chartExporter({chart, path, renderGif});
    }
}