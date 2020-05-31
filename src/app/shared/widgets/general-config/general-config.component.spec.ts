import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralConfigComponent } from './general-config.component';

describe('GeneralConfigComponent', () => {
  let component: GeneralConfigComponent;
  let fixture: ComponentFixture<GeneralConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
