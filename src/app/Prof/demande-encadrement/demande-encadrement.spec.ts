import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandeEncadrementComponent } from './demande-encadrement';

describe('DemandeEncadrementComponent', () => {
  let component: DemandeEncadrementComponent;
  let fixture: ComponentFixture<DemandeEncadrementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemandeEncadrementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemandeEncadrementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
