import { Component, OnInit } from '@angular/core';
import { Booking } from '../models/booking.model'; 
import { BookingService } from '../services/booking.service';

@Component({
  selector: 'app-list-booking',
  standalone: false,
  templateUrl: './list-booking.component.html',
  styleUrls: ['./list-booking.component.scss']
})
export class ListBookingComponent implements OnInit {
  bookings: Booking[] = [];
  

  searchTerm: string = '';

  selectedStatus: string = '';

  constructor(private bookingService: BookingService) {}

  ngOnInit() {
    this.bookingService.getBookings().subscribe(data => {
      this.bookings = data;
    });
  }


  get filteredBookings(): Booking[] {
    let filtered = this.bookings;


    if (this.searchTerm) {
      const term = this.searchTerm.toLowerCase();
      filtered = filtered.filter(booking =>
        (booking.customer?.name && booking.customer.name.toLowerCase().includes(term)) ||
        (booking.customer?.mail && booking.customer.mail.toLowerCase().includes(term)) ||
        (booking.customer?.phone && booking.customer.phone.toLowerCase().includes(term)) ||
        (booking.game?.title && booking.game.title.toLowerCase().includes(term))
      );
    }

    if (this.selectedStatus) {
      filtered = filtered.filter(booking =>
        booking.bookingStatus.toLowerCase() === this.selectedStatus.toLowerCase()
      );
    }

    return filtered;
  }
}
