import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PythonRcceComponent } from './python-rcce.component';

describe('PythonRcceComponent', () => {
  let component: PythonRcceComponent;
  let fixture: ComponentFixture<PythonRcceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PythonRcceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PythonRcceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
