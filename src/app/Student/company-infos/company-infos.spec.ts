import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyInfosComponent } from './company-infos';
import { FormsModule } from '@angular/forms';


describe('CompanyInfosComponent', () => {
  let component: CompanyInfosComponent;
  let fixture: ComponentFixture<CompanyInfosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [CompanyInfosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyInfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
