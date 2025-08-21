import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoirSoutounance } from './voir-soutounance';

describe('VoirSoutounance', () => {
  let component: VoirSoutounance;
  let fixture: ComponentFixture<VoirSoutounance>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VoirSoutounance]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VoirSoutounance);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
