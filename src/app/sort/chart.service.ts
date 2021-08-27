import { Injectable } from '@angular/core';
import * as echarts from 'echarts';
import {parseData} from './utils';


@Injectable({
  providedIn: 'root'
})
export class ChartService {

  constructor() { }

  bar(input: Array<number>,options:{title: string,selector:string}) {
    const myChart = echarts.init(<HTMLElement>document.querySelector(options.selector));
    myChart.setOption({
      title: {
        text: options.title
      },
      tooltip: {},
      xAxis: { data: input.map((item, index) => index + 1) },
      yAxis: {},
      series: [
        {
          name: '排序',
          type: 'bar',
          data: parseData(input),
        },
      ],
      animationDurationUpdate: 1000,
    });
    return myChart;
  }
}
