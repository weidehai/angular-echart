import { Injectable } from '@angular/core';
import { selectSort,bubbleSort,quickSort,insertOrder,hillSort,multipleOrder,stackSort } from './sortImplement';
import {ChartService} from './chart.service';

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
        let _data = data.map(item=>item);
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
    const timeStart = Date.now()
    selectSort(data, callback);
    const timeEnd = Date.now()
    echart.setOption({
      title:{
        subtext: `排序耗时:${timeEnd-timeStart}ms`,
      }
    })
  }

  addBubbleSort(data:Array<number>,options:{title: string,selector:string}) {
    const echart = this.chartService.bar(data, options)
    const callback = (function () {
      let time = 1;
      return function (data: Array<number>) {
        let _data = data.map(item=>item);
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
    const timeStart = Date.now()
    bubbleSort(data, callback);
    const timeEnd = Date.now()
    echart.setOption({
      title:{
        subtext: `排序耗时:${timeEnd-timeStart}ms`,
      }
    })
  }

  addQuickSort(data:Array<number>,options:{title: string,selector:string}) {
    const echart = this.chartService.bar(data, options)
    const callback = (function () {
      let time = 1;
      return function (data: Array<number>) {
        let _data = data.map(item=>item);
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
    const timeStart = Date.now()
    quickSort(data, callback);
    const timeEnd = Date.now()
    echart.setOption({
      title:{
        subtext: `排序耗时:${timeEnd-timeStart}ms`,
      }
    })
  }

  addInsertOrder(data:Array<number>,options:{title: string,selector:string}){
    const echart = this.chartService.bar(data, options)
    const callback = (function () {
      let time = 1;
      return function (data: Array<number>) {
        let _data = data.map(item=>item);
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
    const timeStart = Date.now()
    insertOrder(data, callback);
    const timeEnd = Date.now()
    echart.setOption({
      title:{
        subtext: `排序耗时:${timeEnd-timeStart}ms`,
      }
    })
  }

  addHillSort(data:Array<number>,options:{title: string,selector:string}){
    const echart = this.chartService.bar(data, options)
    const callback = (function () {
      let time = 1;
      return function (data: Array<number>) {
        let _data = data.map(item=>item);
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
    const timeStart = Date.now()
    hillSort(data, 4,callback);
    const timeEnd = Date.now()
    echart.setOption({
      title:{
        subtext: `排序耗时:${timeEnd-timeStart}ms`,
      }
    })
  }
  addMultipleOrder(data:Array<number>,options:{title: string,selector:string}){
    const echart = this.chartService.bar(data, options)
    const callback = (function () {
      let time = 1;
      return function (data: Array<number>) {
        let _data = data.map(item=>item);
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
    const timeStart = Date.now()
    multipleOrder(data,callback);
    const timeEnd = Date.now()
    echart.setOption({
      title:{
        subtext: `排序耗时:${timeEnd-timeStart}ms`,
      }
    })
  }
  addStackSort(data:Array<number>,options:{title: string,selector:string}){
    const echart = this.chartService.bar(data, options)
    const callback = (function () {
      let time = 1;
      return function (data: Array<number>) {
        let _data = data.map(item=>item);
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
    const timeStart = Date.now()
    stackSort(data,callback);
    const timeEnd = Date.now()
    echart.setOption({
      title:{
        subtext: `排序耗时:${timeEnd-timeStart}ms`,
      }
    })
  }

}
