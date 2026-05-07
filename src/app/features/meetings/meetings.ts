import { Component } from '@angular/core';
import { allMeetingData } from '../../utils/constant';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';
import { AllBookingsTable } from '../../shared/components/all-bookings-table/all-bookings-table';
import { AllMeetingsTable } from '../../shared/components/all-meetings-table/all-meetings-table';

interface meetingRow {
  meetingId: string;
  propertyName: string;
  propertyLocation: string;
  propertyImage: string;
  status: string;
  bookedOn: string;
  type: string;
  clientName: string;
  clientEmail: string;
  clientPhoneNumber: string;
}

interface bookingFilters {
  search: string;
  status: string;
  type: string;
  city: string;
}

@Component({
  selector: 'app-meetings',
  imports: [FormsModule, NgFor, AllMeetingsTable],
  templateUrl: './meetings.html',
  styleUrl: './meetings.css',
})
export class Meetings {
  allMeetingData = allMeetingData;

  filteredMeetingData: meetingRow[] = [...this.allMeetingData];
  statusOptions = this.getUniqueOptions('status');
  cityOptions = this.getUniqueOptions('propertyLocation');
  typeOptions = this.getUniqueOptions('type');

  filters: bookingFilters = {
    search: '',
    status: '',
    city: '',
    type: '',
  };

  applyFilters() {
    const search = this.normalize(this.filters.search);
    const status = this.normalize(this.filters.status);
    const city = this.normalize(this.filters.city);
    const type = this.normalize(this.filters.type);

    this.filteredMeetingData = this.allMeetingData.filter((meeting) => {
      const searchableText = [
        meeting.meetingId,
        meeting.propertyName,
        meeting.clientName,
        meeting.bookedOn,
        meeting.status,
        meeting.type,
        meeting.propertyName,
        meeting.bookedOn,
        meeting.clientEmail,
      ]
        .map((value) => this.normalize(value))
        .join(' ');

      return (
        (!search || searchableText.includes(search)) &&
        (!status || this.normalize(meeting.status) === status) &&
        (!type || this.normalize(meeting.type) === type) &&
        (!city || this.normalize(meeting.propertyLocation) === city)
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
    this.filteredMeetingData = [...this.allMeetingData];
  }

  hasActiveFilters() {
    return Object.values(this.filters).some((value) => value.trim());
  }

  private getUniqueOptions(key: keyof Pick<meetingRow, 'status' | 'type' | 'propertyLocation'>) {
    return Array.from(new Set(this.allMeetingData.map((meeting) => meeting[key]))).sort();
  }

  private normalize(value: string) {
    return value.trim().toLowerCase();
  }
}
