import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffectPieceComponent } from './affect-piece.component';

describe('AffectPieceComponent', () => {
  let component: AffectPieceComponent;
  let fixture: ComponentFixture<AffectPieceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffectPieceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AffectPieceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
