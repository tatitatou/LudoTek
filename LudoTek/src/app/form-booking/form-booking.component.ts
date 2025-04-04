import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BookingService } from '../services/booking.service';
import { CustomerService } from '../services/customer.service';
import { GameService } from '../services/game.service';

@Component({
  selector: 'app-form-booking',
  templateUrl: './form-booking.component.html',
  styleUrls: ['./form-booking.component.scss'],
  imports: [ReactiveFormsModule]
})
export class FormBookingComponent implements OnInit {
  formulaire!: FormGroup;
  customers: any[] = []; // Liste des clients
  games: any[] = [];


  constructor(private formBuilder: FormBuilder, private gameService: GameService, private customerService: CustomerService) {}

  ngOnInit(): void {
    this.formulaire = this.formBuilder.group({
      bookingDate: [null, Validators.required], // Date obligatoire
      bookingStatus: ['', Validators.required], // Statut obligatoire
      game: [null, Validators.required], // Lien vers le jeu
      customer: [null, Validators.required] // Lien vers le client
    });

    this.customerService.getCustomers().subscribe(data => {
      this.customers = data;
    });

    this.gameService.getGames().subscribe(data => {
      this.games = data;
    });
  }

  // Méthode pour soumettre le formulaire
  onSubmit() {
    if (this.formulaire.valid) {
      console.log('Formulaire soumis :', this.formulaire.value);
      // Ici, tu peux envoyer les données à ton service via HTTP
    } else {
      console.log('Formulaire invalide');
    }
  }
}
