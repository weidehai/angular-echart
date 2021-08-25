import { Component, OnInit } from '@angular/core';
import * as echarts from 'echarts';
import * as ifuncs from 'ifuncs';

function nantuta() {
  const myChart = echarts.init(<HTMLElement>document.querySelector('.nantuta'));
  myChart.setOption({
    backgroundColor: '#2c343c',
    visualMap: {
      show: false,
      min: 80,
      max: 600,
      inRange: {
        colorLightness: [0, 1],
      },
    },
    series: [
      {
        name: '访问来源',
        type: 'pie',
        radius: '55%',
        roseType: 'angle',
        data: [
          { value: 235, name: '视频广告' },
          { value: 274, name: '联盟广告' },
          { value: 310, name: '邮件营销' },
          { value: 335, name: '直接访问' },
          { value: 400, name: '搜索引擎' },
        ],
        itemStyle: {
          color: '#c23531',
          // 阴影的大小
          shadowBlur: 10,
          // 阴影水平方向上的偏移
          shadowOffsetX: 0,
          // 阴影垂直方向上的偏移
          shadowOffsetY: 0,
          // 阴影颜色
          shadowColor: 'rgba(0, 0, 0, 1)',
          emphasis: {
            shadowBlur: 200,
            shadowColor: 'rgba(0, 0, 0, 0.5)',
          },
        },
      },
    ],
  });
}

function bar() {
  const myChart = echarts.init(<HTMLElement>document.querySelector('.main'));
  myChart.setOption({
    title: {
      text: 'ECharts 入门示例',
    },
    grid: {
      right: '20%',
    },
    tooltip: {},
    xAxis: {
      data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
    },
    yAxis: {},
    dataset: {
      source: [
        ['衬衫', 1],
        ['羊毛衫', 2],
        ['雪纺衫', 3],
        ['裤子', 4],
        ['高跟鞋', 5],
        ['袜子', 6],
      ],
    },
    series: [
      {
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20],
        encode: { x: 0, y: 1 },
      },
    ],
  });
  setInterval(() => {
    let data = [];
    for (let i = 0; i < 6; i++) {
      data.push(ifuncs.getRandomInt(10, 100));
    }
    myChart.setOption({
      series: [{ name: '销量', data }],
    });
  }, 1000);
}

function dataZoom() {
  const myChart = echarts.init(
    <HTMLElement>document.querySelector('.data-zoom')
  );
  myChart.setOption({
    xAxis: {
      type: 'value',
    },
    yAxis: {
      type: 'value',
    },
    dataZoom: [
      {
        // 这个dataZoom组件，默认控制x轴。
        type: 'slider', // 这个 dataZoom 组件是 slider 型 dataZoom 组件
        start: 10, // 左边在 10% 的位置。
        end: 60, // 右边在 60% 的位置。
      },
      {
        // 这个dataZoom组件，也控制x轴。
        type: 'inside', // 这个 dataZoom 组件是 inside 型 dataZoom 组件
        start: 10, // 左边在 10% 的位置。
        end: 60, // 右边在 60% 的位置。
      },
    ],
    series: [
      {
        type: 'scatter', // 这是个『散点图』
        itemStyle: {
          opacity: 0.8,
        },
        symbolSize: function (val: any) {
          return val[2] * 40;
        },
        data: [
          ['14.616', '7.241', '0.896'],
          ['3.958', '5.701', '0.955'],
          ['2.768', '8.971', '0.669'],
          ['9.051', '9.710', '0.171'],
          ['14.046', '4.182', '0.536'],
          ['12.295', '1.429', '0.962'],
          ['4.417', '8.167', '0.113'],
          ['0.492', '4.771', '0.785'],
          ['7.632', '2.605', '0.645'],
          ['14.242', '5.042', '0.368'],
        ],
      },
    ],
  });
}
function dataZoom1() {
  const myChart = echarts.init(
    <HTMLElement>document.querySelector('.data-zoom1')
  );
  myChart.setOption({
    xAxis: {
      type: 'value',
    },
    yAxis: {
      type: 'value',
    },
    dataZoom: [
      {
        // 这个dataZoom组件，默认控制x轴。
        type: 'slider', // 这个 dataZoom 组件是 slider 型 dataZoom 组件
        start: 10, // 左边在 10% 的位置。
        end: 60, // 右边在 60% 的位置。
      },
      {
        // 这个dataZoom组件，也控制x轴。
        type: 'inside', // 这个 dataZoom 组件是 inside 型 dataZoom 组件
        start: 10, // 左边在 10% 的位置。
        end: 60, // 右边在 60% 的位置。
      },
    ],
    series: [
      {
        type: 'scatter', // 这是个『散点图』
        itemStyle: {
          opacity: 0.8,
        },
        symbolSize: function (val: any) {
          return val[2] * 40;
        },
        data: [
          ['14.616', '7.241', '0.896'],
          ['3.958', '5.701', '0.955'],
          ['2.768', '8.971', '0.669'],
          ['9.051', '9.710', '0.171'],
          ['14.046', '4.182', '0.536'],
          ['12.295', '1.429', '0.962'],
          ['4.417', '8.167', '0.113'],
          ['0.492', '4.771', '0.785'],
          ['7.632', '2.605', '0.645'],
          ['14.242', '5.042', '0.368'],
        ],
      },
    ],
  });
}
@Component({
  selector: 'app-echart-demo',
  templateUrl: './echart-demo.component.html',
  styleUrls: ['./echart-demo.component.scss'],
})
export class EchartDemoComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {
    bar();
    nantuta();
    dataZoom();
    dataZoom1()
  }
}
