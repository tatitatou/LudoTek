import { Component, Input } from '@angular/core';
import { booking } from '../models/booking.model';

@Component({
  selector: 'app-booking',
  standalone: false,
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.scss'
})
export class BookingComponent {
  @Input() booking!: booking;
}
