import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListGameComponent } from './list-game/list-game.component';
import { GameComponent } from './game/game.component';
import { ListBookingComponent } from './list-booking/list-booking.component';
import { ListCustomerComponent } from './list-customer/list-customer.component';
import { CustomerComponent } from './customer/customer.component';
import { FormBookingComponent } from './form-booking/form-booking.component';

const routes: Routes = [
  { path: '', component: ListGameComponent },
  { path: 'game', component: ListGameComponent },
  { path: 'game/:id', component: GameComponent },
  { path: 'booking', component: ListBookingComponent },
  { path: 'booking/add', component: FormBookingComponent },
  { path: 'customer', component: ListCustomerComponent },
  { path: 'customer/:id', component: CustomerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
