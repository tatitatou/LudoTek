import { Component, OnInit } from '@angular/core';
import { Booking } from '../models/booking.model'; 
import { BookingService } from '../services/booking.service';

@Component({
  selector: 'app-list-booking',
  standalone: false,
  templateUrl: './list-booking.component.html',
  styleUrls: ['./list-booking.component.scss'] // Correction ici
})
export class ListBookingComponent implements OnInit {
  bookings: Booking[] = []; // Utilisation d'une initialisation propre

  constructor(private bookingService: BookingService) {} // Correction de la variable (camelCase)

  ngOnInit() {
    this.bookingService.getBookings().subscribe(data => {
      this.bookings = data; // Assigne bien les données
    });
  }
}
