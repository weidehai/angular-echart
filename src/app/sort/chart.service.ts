import { Injectable } from '@angular/core';
import * as echarts from 'echarts';

@Injectable({
  providedIn: 'root'
})
export class ChartService {

  constructor() { }

  bar<T>(input: Array<T>,options:{title: string,selector:string}) {
    const myChart = echarts.init(<HTMLElement>document.querySelector(options.selector));
    myChart.setOption({
      title: {
        text: options.title,
      },
      tooltip: {},
      xAxis: { data: input.map((item, index) => index + 1) },
      yAxis: {},
      series: [
        {
          name: '排序',
          type: 'bar',
          data: input,
        },
      ],
      label:{
        show:true,
        position: 'top',
      },
      animationDurationUpdate: 1000,
    });
    return myChart;
  }
}
