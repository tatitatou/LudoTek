import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import { HeaderComponent } from './header/header.component';
import { ListGameComponent } from './list-game/list-game.component';
import { BookingComponent } from './booking/booking.component';
import { CustomerComponent } from './customer/customer.component';
import { ListBookingComponent } from './list-booking/list-booking.component';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    HeaderComponent,
    ListGameComponent,
    BookingComponent,
    CustomerComponent,
    ListBookingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
