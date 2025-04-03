import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-booking',
  standalone: false,
  templateUrl: './form-booking.component.html',
  styleUrl: './form-booking.component.scss'
})
export class FormBookingComponent implements OnInit{
  formulaire!: FormGroup;

  constructor(private formBuilder: FormBuilder){}

  ngOnInit(): void {
    this.formulaire = this.formBuilder.group({
      bookingDate: [null],
      bookingStatus: [null],
      gameId: [null],
      customerId: [null]
    })
  }
}
