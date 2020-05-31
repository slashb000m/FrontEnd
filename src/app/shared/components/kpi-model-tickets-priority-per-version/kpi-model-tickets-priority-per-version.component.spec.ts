import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KpiModelTicketsPriorityPerVersionComponent } from './kpi-model-tickets-priority-per-version.component';

describe('KpiModelTicketsPriorityPerVersionComponent', () => {
  let component: KpiModelTicketsPriorityPerVersionComponent;
  let fixture: ComponentFixture<KpiModelTicketsPriorityPerVersionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KpiModelTicketsPriorityPerVersionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KpiModelTicketsPriorityPerVersionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
