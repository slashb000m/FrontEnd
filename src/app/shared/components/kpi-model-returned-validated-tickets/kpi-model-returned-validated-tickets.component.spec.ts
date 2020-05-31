import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KpiModelReturnedValidatedTicketsComponent } from './kpi-model-returned-validated-tickets.component';

describe('KpiModelReturnedValidatedTicketsComponent', () => {
  let component: KpiModelReturnedValidatedTicketsComponent;
  let fixture: ComponentFixture<KpiModelReturnedValidatedTicketsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KpiModelReturnedValidatedTicketsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KpiModelReturnedValidatedTicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
