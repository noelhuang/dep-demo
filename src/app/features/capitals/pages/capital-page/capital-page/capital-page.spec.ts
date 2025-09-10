import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapitalPage } from './capital-page';

describe('CapitalPage', () => {
  let component: CapitalPage;
  let fixture: ComponentFixture<CapitalPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CapitalPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CapitalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
