import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListGameComponent } from './list-game/list-game.component';
import { GameComponent } from './game/game.component';
import { BookingComponent } from './booking/booking.component';
import { ListBookingComponent } from './list-booking/list-booking.component';

const routes: Routes = [
  { path: '', component: ListGameComponent },
  { path: 'game', component: ListGameComponent },
  { path: 'game/:id', component: GameComponent },
  { path: 'booking', component: ListBookingComponent },
  { path: 'booking/:id', component: BookingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
