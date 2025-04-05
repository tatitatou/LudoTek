import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ListGameComponent } from './list-game/list-game.component';
import { ListBookingComponent } from './list-booking/list-booking.component';
import { ListCustomerComponent } from './list-customer/list-customer.component';
import { FormBookingComponent } from './form-booking/form-booking.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormCustomerComponent } from './form-customer/form-customer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListBookingComponent,
    FormBookingComponent,
    FormCustomerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,  
    ListCustomerComponent,
    ListGameComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
