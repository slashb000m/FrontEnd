import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KpiModelTimeResolutionTicketComponent } from './kpi-model-time-resolution-ticket.component';

describe('KpiModelTimeResolutionTicketComponent', () => {
  let component: KpiModelTimeResolutionTicketComponent;
  let fixture: ComponentFixture<KpiModelTimeResolutionTicketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KpiModelTimeResolutionTicketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KpiModelTimeResolutionTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
