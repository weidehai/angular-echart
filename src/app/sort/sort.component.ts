import { Component, OnInit } from '@angular/core';
import {SortService} from './sort.service';


@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.scss'],
})
export class SortComponent implements OnInit {
  constructor(private sortService:SortService) {}

  ngOnInit(): void {
    let data = [23, 10, 34, 31, 6, 59, 30, 20, 9, 63, 40, 39, 43, 6];
    this.sortService.addSelectSort(data, {title: '选择排序',selector:".select"})
    this.sortService.addBubbleSort([23, 10, 34, 31, 6, 59, 30, 20, 9, 63, 40, 39, 43, 6], {title: '冒泡排序',selector:".bubble"})
    this.sortService.addQuickSort([23, 10, 34, 31, 6, 59, 30, 20, 9, 63, 40, 39, 43, 6], {title: '快速排序',selector:".quick"})
    this.sortService.addInsertOrder([23, 10, 34, 31, 6, 59, 30, 20, 9, 63, 40, 39, 43, 6], {title: '插入排序',selector:".insert"})
    this.sortService.addHillSort([23, 10, 34, 31, 6, 59, 30, 20, 9, 63, 40, 39, 43, 6], {title: '希尔排序',selector:".hill"})
    this.sortService.addMultipleOrder([23, 10, 34, 31, 6, 59, 30, 20, 9, 63, 40, 39, 43, 6], {title: '归并排序',selector:".multiple"})
    this.sortService.addStackSort([23, 10, 34, 31, 6, 59, 30, 20, 9, 63, 40, 39, 43, 6], {title: '堆排序',selector:".heap"})
  }
}
