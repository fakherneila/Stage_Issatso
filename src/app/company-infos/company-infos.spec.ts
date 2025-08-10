import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyInfos } from './company-infos';

describe('CompanyInfos', () => {
  let component: CompanyInfos;
  let fixture: ComponentFixture<CompanyInfos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanyInfos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyInfos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
