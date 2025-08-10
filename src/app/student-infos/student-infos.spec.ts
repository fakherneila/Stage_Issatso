import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentInfos } from './student-infos';

describe('StudentInfos', () => {
  let component: StudentInfos;
  let fixture: ComponentFixture<StudentInfos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentInfos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentInfos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
