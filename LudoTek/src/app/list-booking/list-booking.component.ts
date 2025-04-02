import { Component } from '@angular/core';
import { booking } from '../models/booking.model'; 
import { BookingService } from '../services/booking.service';

@Component({
  selector: 'app-list-booking',
  standalone: false,
  templateUrl: './list-booking.component.html',
  styleUrl: './list-booking.component.scss'
})
export class ListBookingComponent {
  listbooking!: booking[];
  
  constructor(private BookingService: BookingService) {}

  ngOnInit(): void {
    this.BookingService.getGames().subscribe((data) => {
      this.listbooking = data;
    });
  }
}
