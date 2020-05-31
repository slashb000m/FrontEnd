import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigClosedReturnedTicketsComponent } from './config-closed-returned-tickets.component';

describe('ConfigClosedReturnedTicketsComponent', () => {
  let component: ConfigClosedReturnedTicketsComponent;
  let fixture: ComponentFixture<ConfigClosedReturnedTicketsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigClosedReturnedTicketsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigClosedReturnedTicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
