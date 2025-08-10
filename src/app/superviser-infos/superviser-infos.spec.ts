import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperviserInfos } from './superviser-infos';

describe('SuperviserInfos', () => {
  let component: SuperviserInfos;
  let fixture: ComponentFixture<SuperviserInfos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuperviserInfos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuperviserInfos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
