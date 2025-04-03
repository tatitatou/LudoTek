import { Component } from '@angular/core';
import { customer } from '../models/customer.model'; 
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-list-customer',
  standalone: false,
  templateUrl: './list-customer.component.html',
  styleUrl: './list-customer.component.scss'
})
export class ListCustomerComponent {
  listcustomer!: customer[];
  
  constructor(private CustomerService: CustomerService) {}

  ngOnInit(): void {
    this.CustomerService.getCustomers().subscribe((data) => {
      this.listcustomer = data;
    });
  }
}
