import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeposerRapport } from './deposer-rapport';

describe('DeposerRapport', () => {
  let component: DeposerRapport;
  let fixture: ComponentFixture<DeposerRapport>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeposerRapport]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeposerRapport);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
