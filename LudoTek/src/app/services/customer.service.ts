import { Injectable } from '@angular/core';
import { customer } from '../models/customer.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private Url = 'http://127.0.0.1:8000/api/customer'

  constructor(private http: HttpClient) { }

  getCustomers(): Observable<customer[]> {
    return this.http.get<customer[]>(`${this.Url}`);
  }

  getCustomer(id: number): Observable<customer> {
    return this.http.get<customer>(`${this.Url}/${id}`);
  } 

  addCustomer(customer: { name: string, mail: string, phone: string }): Observable<customer>{
    return this.http.post<customer>(this.Url, customer);
  }

}
