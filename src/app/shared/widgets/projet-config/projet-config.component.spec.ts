import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetConfigComponent } from './projet-config.component';

describe('ProjetConfigComponent', () => {
  let component: ProjetConfigComponent;
  let fixture: ComponentFixture<ProjetConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjetConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjetConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
