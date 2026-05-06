import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyFeature } from './property-feature';

describe('PropertyFeature', () => {
  let component: PropertyFeature;
  let fixture: ComponentFixture<PropertyFeature>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PropertyFeature],
    }).compileComponents();

    fixture = TestBed.createComponent(PropertyFeature);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
