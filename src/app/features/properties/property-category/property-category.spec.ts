import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyCategory } from './property-category';

describe('PropertyCategory', () => {
  let component: PropertyCategory;
  let fixture: ComponentFixture<PropertyCategory>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PropertyCategory],
    }).compileComponents();

    fixture = TestBed.createComponent(PropertyCategory);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
