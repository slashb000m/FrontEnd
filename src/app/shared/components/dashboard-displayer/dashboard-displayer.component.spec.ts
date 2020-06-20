import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardDisplayerComponent } from './dashboard-displayer.component';

describe('DashboardDisplayerComponent', () => {
  let component: DashboardDisplayerComponent;
  let fixture: ComponentFixture<DashboardDisplayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardDisplayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardDisplayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
