import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanSoutenance } from './plan-soutenance';

describe('PlanSoutenance', () => {
  let component: PlanSoutenance;
  let fixture: ComponentFixture<PlanSoutenance>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlanSoutenance]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanSoutenance);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
