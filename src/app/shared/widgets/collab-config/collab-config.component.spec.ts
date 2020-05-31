import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollabConfigComponent } from './collab-config.component';

describe('CollabConfigComponent', () => {
  let component: CollabConfigComponent;
  let fixture: ComponentFixture<CollabConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollabConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollabConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
