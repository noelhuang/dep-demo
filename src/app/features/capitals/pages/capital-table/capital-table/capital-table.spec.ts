import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapitalTable } from './capital-table';

describe('CapitalTable', () => {
  let component: CapitalTable;
  let fixture: ComponentFixture<CapitalTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CapitalTable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CapitalTable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
