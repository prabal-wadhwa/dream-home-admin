import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersTableComponent } from './all-users-table';

describe('AllUsersTable', () => {
  let component: UsersTableComponent;
  let fixture: ComponentFixture<UsersTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsersTableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UsersTableComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should reset pagination when rows change', () => {
    fixture.componentRef.setInput('rows', [
      { id: '1', name: 'John Doe', status: 'Active' },
      { id: '2', name: 'David Wilson', status: 'Inactive' },
    ]);
    fixture.detectChanges();

    component.pageNumber = 2;

    fixture.componentRef.setInput('rows', [{ id: '2', name: 'David Wilson', status: 'Inactive' }]);
    fixture.detectChanges();

    expect(component.pageNumber).toBe(0);
  });
});
