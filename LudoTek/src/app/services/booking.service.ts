import { Injectable } from '@angular/core';
import { booking } from '../models/booking.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  private Url = 'http://127.0.0.1:8000'

  constructor(private http: HttpClient) { }

  getGames(): Observable<booking[]> {
    return this.http.get<booking[]>(`${this.Url}/api/booking`);
  }

  getGame(id: number): Observable<booking> {
    return this.http.get<booking>(`${this.Url}/api/booking/${id}`);
  } 
}
