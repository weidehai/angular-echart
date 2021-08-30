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
    this.sortService.addSortView([23, 10, 34, 31, 6, 59, 30, 20, 9, 63, 40, 39, 43, 6], {title: '选择排序',selector:".select"},'selectSort')
    this.sortService.addSortView([23, 10, 34, 31, 6, 59, 30, 20, 9, 63, 40, 39, 43, 6], {title: '冒泡排序',selector:".bubble"},'bubbleSort')
    this.sortService.addSortView([23, 10, 34, 31, 6, 59, 30, 20, 9, 63, 40, 39, 43, 6], {title: '快速排序',selector:".quick"},'quickSort')
    this.sortService.addSortView([23, 10, 34, 31, 6, 59, 30, 20, 9, 63, 40, 39, 43, 6], {title: '插入排序',selector:".insert"},'insertOrder')
    this.sortService.addSortView([23, 10, 34, 31, 6, 59, 30, 20, 9, 63, 40, 39, 43, 6], {title: '希尔排序',selector:".hill"},'hillSort')
    this.sortService.addSortView([23, 10, 34, 31, 6, 59, 30, 20, 9, 63, 40, 39, 43, 6], {title: '归并排序',selector:".multiple"},'multipleOrder')
    this.sortService.addSortView([23, 10, 34, 31, 6, 59, 30, 20, 9, 63, 40, 39, 43, 6], {title: '堆排序',selector:".heap"},'stackSort')
  }
}
