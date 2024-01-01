import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Powerbi3Component } from './powerbi3.component';

describe('Powerbi3Component', () => {
  let component: Powerbi3Component;
  let fixture: ComponentFixture<Powerbi3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Powerbi3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Powerbi3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
