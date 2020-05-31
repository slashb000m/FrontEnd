import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KpiDisplayerComponent } from './kpi-displayer.component';

describe('KpiDisplayerComponent', () => {
  let component: KpiDisplayerComponent;
  let fixture: ComponentFixture<KpiDisplayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KpiDisplayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KpiDisplayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
