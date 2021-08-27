import { Injectable } from '@angular/core';
import { selectSort,bubbleSort,quickSort } from './sortImplement';
import {ChartService} from './chart.service';
import {parseData} from './utils';

@Injectable({
  providedIn: 'root'
})
export class SortService {

  constructor(private chartService:ChartService) { }

  addSelectSort(data:Array<number>,options:{title: string,selector:string}) {
    const echart = this.chartService.bar(data, options)
    const callback = (function () {
      let time = 1;
      return function (data: Array<number>) {
        let _data = parseData(data);
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
    selectSort(data, callback);
  }

  addBubbleSort(data:Array<number>,options:{title: string,selector:string}) {
    const echart = this.chartService.bar(data, options)
    const callback = (function () {
      let time = 1;
      return function (data: Array<number>) {
        let _data = parseData(data);
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
    bubbleSort(data, callback);
  }

  addQuickSort(data:Array<number>,options:{title: string,selector:string}) {
    const echart = this.chartService.bar(data, options)
    const callback = (function () {
      let time = 1;
      return function (data: Array<number>) {
        let _data = parseData(data);
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
    quickSort(data, callback);
  }

}
