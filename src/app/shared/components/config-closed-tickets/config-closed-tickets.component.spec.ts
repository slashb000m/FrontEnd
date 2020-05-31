import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigClosedTicketsComponent } from './config-closed-tickets.component';

describe('ConfigClosedTicketsComponent', () => {
  let component: ConfigClosedTicketsComponent;
  let fixture: ComponentFixture<ConfigClosedTicketsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigClosedTicketsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigClosedTicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
