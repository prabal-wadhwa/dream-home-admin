import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewProperty } from './add-new-property';

describe('AddNewProperty', () => {
  let component: AddNewProperty;
  let fixture: ComponentFixture<AddNewProperty>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddNewProperty],
    }).compileComponents();

    fixture = TestBed.createComponent(AddNewProperty);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
