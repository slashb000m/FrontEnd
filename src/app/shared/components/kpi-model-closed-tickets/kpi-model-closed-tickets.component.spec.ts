import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KpiModelClosedTicketsComponent } from './kpi-model-closed-tickets.component';

describe('KpiModelClosedTicketsComponent', () => {
  let component: KpiModelClosedTicketsComponent;
  let fixture: ComponentFixture<KpiModelClosedTicketsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KpiModelClosedTicketsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KpiModelClosedTicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
