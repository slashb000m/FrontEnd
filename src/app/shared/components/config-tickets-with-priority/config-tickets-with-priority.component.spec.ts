import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigTicketsWithPriorityComponent } from './config-tickets-with-priority.component';

describe('ConfigTicketsWithPriorityComponent', () => {
  let component: ConfigTicketsWithPriorityComponent;
  let fixture: ComponentFixture<ConfigTicketsWithPriorityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigTicketsWithPriorityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigTicketsWithPriorityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
