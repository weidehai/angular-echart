import { Injectable } from '@angular/core';
import sort from './sortImplement';
import { ChartService } from './chart.service';

@Injectable({
  providedIn: 'root',
})
export class SortService {
  constructor(private chartService: ChartService) {}

  addSortView<T>(
    data: Array<T>,
    options: { title: string; selector: string },
    sortName: string,
    ...rest:Array<unknown>
  ) {
    const echart = this.chartService.bar(data, options);
    const callback = (function () {
      let time = 1;
      return function (data: Array<T>) {
        let _data = data.map((item) => item);
        setTimeout(() => {
          echart.setOption({
            series: [
              {
                name: '排序',
                data: _data,
              },
            ],
          });
        }, time * 1000);
        time++;
      };
    })();
    const timeStart = Date.now();
    sort[sortName](data, callback,...rest);
    const timeEnd = Date.now();
    echart.setOption({
      title: {
        subtext: `排序耗时:${timeEnd - timeStart}ms`,
      },
    });
  }
}
