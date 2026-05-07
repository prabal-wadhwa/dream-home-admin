import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllMeetingsTable } from './all-meetings-table';

describe('AllMeetingsTable', () => {
  let component: AllMeetingsTable;
  let fixture: ComponentFixture<AllMeetingsTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllMeetingsTable],
    }).compileComponents();

    fixture = TestBed.createComponent(AllMeetingsTable);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
