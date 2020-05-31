import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigTimeResolutionTicketsComponent } from './config-time-resolution-tickets.component';

describe('ConfigTimeResolutionTicketsComponent', () => {
  let component: ConfigTimeResolutionTicketsComponent;
  let fixture: ComponentFixture<ConfigTimeResolutionTicketsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigTimeResolutionTicketsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigTimeResolutionTicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
