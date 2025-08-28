import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncadrementComponent } from './encadrement';

describe('EncadrementComponent', () => {
  let component: EncadrementComponent;
  let fixture: ComponentFixture<EncadrementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EncadrementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EncadrementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
