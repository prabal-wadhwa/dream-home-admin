import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { userData } from '../../utils/constant';
import { NgFor } from '@angular/common';
import { UsersTableComponent } from '../../shared/components/all-users-table/all-users-table';

interface UserRow {
  id: string;
  name: string;
  avatar: string;
  email: string;
  phone: string;
  status: string;
  type: string;
  city: string;
  date: string;
}

interface UserFilters {
  search: string;
  status: string;
  type: string;
  city: string;
}

@Component({
  selector: 'app-users',
  imports: [NgFor, UsersTableComponent, FormsModule],
  templateUrl: './users.html',
  styleUrl: './users.css',
})
export class UsersComponent {
  users: UserRow[] = userData;

  filteredUsers: UserRow[] = [...this.users];
  statusOptions = this.getUniqueOptions('status');
  typeOptions = this.getUniqueOptions('type');
  cityOptions = this.getUniqueOptions('city');

  filters: UserFilters = {
    search: '',
    status: '',
    type: '',
    city: '',
  };

  applyFilters() {
    const search = this.normalize(this.filters.search);
    const status = this.normalize(this.filters.status);
    const type = this.normalize(this.filters.type);
    const city = this.normalize(this.filters.city);

    this.filteredUsers = this.users.filter((user) => {
      const searchableText = [
        user.id,
        user.name,
        user.email,
        user.phone,
        user.status,
        user.type,
        user.city,
        user.date,
      ]
        .map((value) => this.normalize(value))
        .join(' ');

      return (
        (!search || searchableText.includes(search)) &&
        (!status || this.normalize(user.status) === status) &&
        (!type || this.normalize(user.type) === type) &&
        (!city || this.normalize(user.city) === city)
      );
    });
  }

  clearFilters() {
    this.filters = {
      search: '',
      status: '',
      type: '',
      city: '',
    };
    this.filteredUsers = [...this.users];
  }

  hasActiveFilters() {
    return Object.values(this.filters).some((value) => value.trim());
  }

  private getUniqueOptions(key: keyof Pick<UserRow, 'status' | 'type' | 'city'>) {
    return Array.from(new Set(this.users.map((user) => user[key]))).sort();
  }

  private normalize(value: string) {
    return value.trim().toLowerCase();
  }
}
