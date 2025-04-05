import { Injectable } from '@angular/core';
import { Booking } from '../models/booking.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  
  private readonly apiUrl = 'http://127.0.0.1:8000/api/booking'; 

  constructor(private http: HttpClient) { }

  // Récupérer toutes les réservations
  getBookings(): Observable<Booking[]> {
    return this.http.get<Booking[]>(this.apiUrl);
  }

  // Récupérer une réservation par ID
  getBooking(id: number): Observable<Booking> {
    return this.http.get<Booking>(`${this.apiUrl}/${id}`);
  } 

  addBooking(booking: { bookingDate: Date, bookingStatus: string, customerId: number, gameId: number }): Observable<Booking> {
    return this.http.post<Booking>(this.apiUrl, booking);
  }
}
