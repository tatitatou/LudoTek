import { Component, Input } from '@angular/core';
import { customer } from '../models/customer.model';

@Component({
  selector: 'app-customer',
  standalone: false,
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.scss'
})
export class CustomerComponent {
  @Input() customer!: customer;
}
