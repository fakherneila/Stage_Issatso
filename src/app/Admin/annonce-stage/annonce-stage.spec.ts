import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnonceStageComponent } from './annonce-stage';

describe('AnnonceStageComponent', () => {
  let component: AnnonceStageComponent;
  let fixture: ComponentFixture<AnnonceStageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnnonceStageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnnonceStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
