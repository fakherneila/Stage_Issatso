import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandeEncadrement } from './demande-encadrement';

describe('DemandeEncadrement', () => {
  let component: DemandeEncadrement;
  let fixture: ComponentFixture<DemandeEncadrement>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemandeEncadrement]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemandeEncadrement);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
