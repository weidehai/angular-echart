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

function pic1() {
  const myChart = echarts.init(<HTMLElement>document.querySelector('.pictrue'));
  myChart.setOption({
    title: {
      text: '孤帆远影碧空尽,唯见长江天际流',
    },
    grid: {
      left: 0,
      right: 0,
      bottom: 0,
    },
    backgroundColor: {
      type: 'radial',
      x: 0.62,
      y: 0.45,
      r: 1,
      colorStops: [
        {
          offset: 0,
          color: '#fe9e80', // 0% 处的颜色
        },
        {
          offset: 1,
          color: '#9bc9f1', // 100% 处的颜色
        },
      ],
      global: false, // 缺省为 false
    },
    xAxis: [
      {
        data: new Array(15),
        boundaryGap: false,
        show: false,
      },
    ],
    yAxis: [
      {
        min: 0,
        max: 10,
        show: false,
      },
    ],
    series: [
      {
        type: 'line',
        areaStyle: {
          color: '#2a9c91',
          opacity: 0.4,
        },
        symbolSize: 0,
        lineStyle: {
          width: 0,
        },
        data: [5, 5, 5, 6.1, 6.2, 6.3, 6.4, 6, 4, 4, 4, 4, 4, 4, 4],
        silent: true,
      },
      {
        type: 'line',
        areaStyle: {
          color: '#2a9c91',
          opacity: 0.8,
        },
        data: [4, 4, 4, 4, 4, 4, 4, 4, 3, 4.5, 5, 6, 6.5, 7, 7.2],
        symbolSize: 0,
        lineStyle: {
          width: 0,
        },
        silent: true,
      },
      {
        type: 'line',
        areaStyle: {
          color: '#2dc3b5',
          opacity: 1,
        },
        data: [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
        symbolSize: 0,
        lineStyle: {
          width: 0,
        },
        silent: true,
      },
      {
        type: 'line',
        areaStyle: {
          color: '#0f6960',
          opacity: 1,
        },
        data: [6.5, 6, 6, 6, 5.8, 5.2, 4.8, 4.2, 2, 0, 0, 0, 0, 0, 0],
        symbolSize: 0,
        lineStyle: {
          width: 0,
        },
        silent: true,
      },
      {
        type: 'line',
        areaStyle: {
          color: '#2dc3b5',
          opacity: 1,
        },
        data: [
          2.8, 2.8, 2.8, 2.8, 2.8, 2.8, 2.8, 2.8, 2.8, 2.8, 2.8, 2.8, 2.8, 2.8,
          2.8,
        ],
        symbolSize: 0,
        lineStyle: {
          width: 0,
        },
        silent: true,
      },
      {
        type: 'line',
        areaStyle: {
          color: '#0f6960',
          opacity: 1,
        },
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 4, 4.8, 5, 5.5],
        symbolSize: 0,
        lineStyle: {
          width: 0,
        },
        silent: true,
      },
      {
        type: 'line',
        areaStyle: {
          color: '#2dc3b5',
          opacity: 0.8,
        },
        data: [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        symbolSize: 0,
        lineStyle: {
          width: 0,
        },
        silent: true,
      },
      {
        type: 'graph',
        layout: 'none',
        data: [
          {
            x: 0,
            y: 0,
            symbolSize: 100,
          },
        ],
        itemStyle: {
          color: '#ff5722',
          shadowColor: '#ff5722',
          shadowBlur: 100,
        },
        silent: true,
        left: '35%',
        top: '6%',
        z: 3,
      },
      {
        type: 'graph',
        layout: 'none',
        data: [
          {
            x: 0,
            y: 0,
            symbolSize: 50,
          },
        ],
        itemStyle: {
          color: '#333',
        },
        silent: true,
        left: '38%',
        top: '25%',
        z: 3,
        symbol:
          'path://M27.310007,2.749997l22.5,0c-2.485281,0 -4.5,14.326891 -4.5,32.000002c0,17.673113 2.014718,32 4.5,32l-22.5,0l0,0c-2.485281,0 -4.5,-14.326889 -4.5,-32c0,-17.673111 2.014718,-32.000002 4.5,-32.000002z M12.75,70.184998l47,0l-11,10l-30,-1l-6,-9z',
      },
      {
        type: 'graph',
        width:100,
        height:50,
        left: 700,
        top: 440,
        data: [
          {
            symbolSize: 0,
            x: 100,
            y: 100,
            name: 'first-bird-left',
          },
          {
            symbolSize: 2,
            x: 110,
            y: 103,
            name: 'first-bird',
          },
          {
            symbolSize: 0,
            x: 120,
            y: 100,
            name: 'first-bird-right',
          },
          {
            symbolSize: 0,
            x: 123,
            y: 104,
            name: 'second-bird-left',
          },
          {
            symbolSize: 2,
            x: 133,
            y: 108,
            name: 'second-bird',
          },
          {
            symbolSize: 0,
            x: 143,
            y: 104,
            name: 'second-bird-right',
          },
          {
            symbolSize: 0,
            x: 107,
            y: 110,
            name: 'third-bird-left',
          },
          {
            symbolSize: 2,
            x: 114,
            y: 112,
            name: 'third-bird',
          },
          {
            symbolSize: 0,
            x: 121,
            y: 110,
            name: 'third-bird-right',
          },
        ],
        links: [
          {
            source: 'first-bird-left',
            target: 'first-bird',
          },
          {
            source: 'first-bird',
            target: 'first-bird-right',
          },
          {
            source: 'second-bird-left',
            target: 'second-bird',
          },
          {
            source: 'second-bird',
            target: 'second-bird-right',
          },
          {
            source: 'third-bird-left',
            target: 'third-bird',
          },
          {
            source: 'third-bird',
            target: 'third-bird-right',
          },
        ],
        lineStyle: {
          width: 1,
          curveness: 0.3,
          color: '#333',
        },
        itemStyle: {
          color: '#555',
        },
        silent: true,
        z: 4,
      },
    ],
  });
}

function graph() {
  const myChart = echarts.init(<HTMLElement>document.querySelector('.graph'));
  myChart.setOption({
    series: [
      {
        type: 'graph',
        layout: 'none',
        symbolSize: 10,
        data: [
          {
            name: '1',
            x: 0,
            y: 0,
            value: 10,
          },
          {
            name: '2',
            x: 20,
            y: 10,
            value: 20,
            itemStyle: {
              color: 'red',
            },
          },
          {
            name: '3',
            x: 40,
            y: 0,
            value: 20,
            itemStyle: {
              color: 'red',
            },
          },
          {
            name: '4',
            x: 10,
            y: 15,
            value: 20,
            itemStyle: {
              color: 'red',
            },
          },
          {
            name: '5',
            x: 30,
            y: 20,
            value: 20,
            itemStyle: {
              color: 'red',
            },
          },
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
    pic1();
    graph();
  }
}
