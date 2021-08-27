import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortComponent } from './sort.component';

import { selectSort,quickSort } from './sortImplement';

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
    expect(selectSort([3, 2, 1])).toEqual([1, 2, 3]);
  });
  it('test quickSort', () => {
    expect(quickSort([3, 2, 1])).toEqual([1,2,3]);
  });
});
