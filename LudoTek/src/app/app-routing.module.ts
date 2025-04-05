import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListGameComponent } from './list-game/list-game.component';
import { ListBookingComponent } from './list-booking/list-booking.component';
import { ListCustomerComponent } from './list-customer/list-customer.component';
import { FormBookingComponent } from './form-booking/form-booking.component';
import { FormCustomerComponent } from './form-customer/form-customer.component';

const routes: Routes = [
  { path: '', component: ListGameComponent },
  { path: 'game', component: ListGameComponent },
  { path: 'booking', component: ListBookingComponent },
  { path: 'booking/add', component: FormBookingComponent },
  { path: 'customer', component: ListCustomerComponent },
  { path: 'customer/add', component: FormCustomerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
