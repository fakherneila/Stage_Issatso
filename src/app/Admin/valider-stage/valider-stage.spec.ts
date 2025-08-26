import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValiderStage } from './valider-stage';

describe('ValiderStage', () => {
  let component: ValiderStage;
  let fixture: ComponentFixture<ValiderStage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValiderStage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValiderStage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
