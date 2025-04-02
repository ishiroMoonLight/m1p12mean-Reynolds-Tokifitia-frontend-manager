import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffectEmployeeComponent } from './affect-employee.component';

describe('AffectEmployeeComponent', () => {
  let component: AffectEmployeeComponent;
  let fixture: ComponentFixture<AffectEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffectEmployeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AffectEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
