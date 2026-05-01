import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stat-card',
  standalone: true,
  templateUrl: './stat-card.html',
  styleUrls: ['./stat-card.css'],
})
export class StatCardComponent {
  @Input() title = '';
  @Input() value = '';
  @Input() growth = '';
  @Input() icon = '';
  @Input() color = '#000';
}
