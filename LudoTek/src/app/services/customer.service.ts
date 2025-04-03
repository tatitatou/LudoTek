import { Injectable } from '@angular/core';
import { customer } from '../models/customer.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private Url = 'http://127.0.0.1:8000'

  constructor(private http: HttpClient) { }

  getCustomers(): Observable<customer[]> {
    return this.http.get<customer[]>(`${this.Url}/api/customer`);
  }

  getCustomer(id: number): Observable<customer> {
    return this.http.get<customer>(`${this.Url}/api/customer/${id}`);
  } 
}
