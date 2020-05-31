import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReusableChartComponent } from './reusable-chart.component';

describe('ReusableChartComponent', () => {
  let component: ReusableChartComponent;
  let fixture: ComponentFixture<ReusableChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReusableChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReusableChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
