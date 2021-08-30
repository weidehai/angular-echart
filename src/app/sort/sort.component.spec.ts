import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortComponent } from './sort.component';

import sort from './sortImplement';

describe('SortComponent', () => {
  let component: SortComponent;
  let fixture: ComponentFixture<SortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SortComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('test bubbleSort', () => {
    expect(sort.selectSort([3, 2, 1])).toEqual([1, 2, 3]);
  });
  it('test quickSort', () => {
    expect(sort.quickSort([3, 2, 1])).toEqual([1,2,3]);
  });
  it('test insertOrder', () => {
    expect(sort.insertOrder([3, 2, 1])).toEqual([1,2,3]);
  });
  it('test hillSort', () => {
    expect(sort.hillSort([3, 2, 1])).toEqual([1,2,3]);
  });

  it('test hillSort', () => {
    expect(sort.hillSort([23, 10, 34, 31, 6, 59, 30, 20, 9, 63, 40, 39, 43, 6])).toEqual([6,6,9,10,20,23,30,31,34,39,40,43,59,63]);
  });

  it('test multipleOrder', () => {
    expect(sort.multipleOrder([3, 2, 1])).toEqual([1,2,3]);
  });

  it('test multipleOrder', () => {
    expect(sort.multipleOrder([23, 10, 34, 31, 6, 59, 30, 20, 9, 63, 40, 39, 43, 6])).toEqual([6,6,9,10,20,23,30,31,34,39,40,43,59,63]);
  });
  it('test stackSort', () => {
    expect(sort.stackSort([3,2,1])).toEqual([1,2,3]);
  });
  it('test stackSort', () => {
    expect(sort.stackSort([23, 10, 34, 31, 6, 59, 30, 20, 9, 63, 40, 39, 43, 6])).toEqual([6,6,9,10,20,23,30,31,34,39,40,43,59,63]);
  });

});
