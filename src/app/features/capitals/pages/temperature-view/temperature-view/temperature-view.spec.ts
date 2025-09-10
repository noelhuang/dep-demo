import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemperatureView } from './temperature-view';

describe('TemperatureView', () => {
  let component: TemperatureView;
  let fixture: ComponentFixture<TemperatureView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemperatureView]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemperatureView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
