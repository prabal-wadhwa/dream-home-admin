import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersComponent } from './users';

describe('Users', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsersComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should search users across their details', () => {
    component.filters.search = 'warner';

    component.applyFilters();

    expect(component.filteredUsers.map((user) => user.id)).toEqual(['#USR005']);
  });

  it('should filter users by status type and city', () => {
    component.filters.status = 'Active';
    component.filters.type = 'Buyer';
    component.filters.city = 'Dallas';

    component.applyFilters();

    expect(component.filteredUsers.map((user) => user.id)).toEqual(['#USR006']);
  });

  it('should clear all user filters', () => {
    component.filters.search = 'david';
    component.filters.status = 'Inactive';

    component.clearFilters();

    expect(component.filters).toEqual({
      search: '',
      status: '',
      type: '',
      city: '',
    });
    expect(component.filteredUsers.length).toBe(component.users.length);
  });
});
