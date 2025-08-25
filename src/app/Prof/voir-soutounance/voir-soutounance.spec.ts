import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoirSoutounanceComponent } from './voir-soutounance';

describe('VoirSoutounanceComponent', () => {
  let component: VoirSoutounanceComponent;
  let fixture: ComponentFixture<VoirSoutounanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VoirSoutounanceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VoirSoutounanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
