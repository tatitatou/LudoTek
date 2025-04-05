import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BookingService } from '../services/booking.service';
import { CustomerService } from '../services/customer.service';
import { GameService } from '../services/game.service';
import { customer } from '../models/customer.model';
import { game } from '../models/game.model';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-form-booking',
  templateUrl: './form-booking.component.html',
  styleUrls: ['./form-booking.component.scss'],
  standalone: false
})
export class FormBookingComponent implements OnInit {
  formulaire!: FormGroup;
  customers: customer[] = []; 
  games: game[] = []; 


  constructor(private formBuilder: FormBuilder, private gameService: GameService, private customerService: CustomerService, private bookingService: BookingService, private router: Router) {}

  ngOnInit(): void {
    this.formulaire = this.formBuilder.group({
      bookingDate: [null, Validators.required], 
      bookingStatus: ['', Validators.required], 
      game: [null, Validators.required], 
      customer: [null, Validators.required] 
    });

    this.customerService.getCustomers().subscribe(data => {
      this.customers = data;
    });

    this.gameService.getGames().subscribe(data => {
      this.games = data;
    });
  }

  onSubmit() {
    if (this.formulaire.valid) {
      const formData = {
        bookingDate: this.formulaire.value.bookingDate,
        bookingStatus: this.formulaire.value.bookingStatus,
        gameId: this.formulaire.value.game,
        customerId: this.formulaire.value.customer
      };

      this.bookingService.addBooking(formData).subscribe({
        next: (res) => {
          this.router.navigate(['/booking']);
        },
        error: (err) => {
          console.error('❌ Erreur lors de l\'envoi de la réservation :', err);
        }
      });
    } else {
      console.warn('⚠️ Formulaire invalide', this.formulaire.errors);
    }
  }
  
  
  }

