import {ChartHandler} from "../interface";
import echarts from "echarts";
let fs = require('fs');

export const EchartsHandler : ChartHandler = {
    chartRender({options, canvas, renderGif}){
        echarts.setCanvasCreator(() => canvas);
        let chart = echarts.init(canvas);
        if (!renderGif) {
            options.animation = false;
        }
        chart.setOption(options);
        return chart
    },
    chartExporter({chart, path, renderGif}){
        if (path) {
            try {
                fs.writeFileSync(path, chart.getDom().toBuffer());
                console.log("Create Img:" + path)
            } catch (err) {
                console.error("Error: Write File failed" + err.message)
            }
        } else {
            return chart.getDom().toBuffer();
        }
    }
}