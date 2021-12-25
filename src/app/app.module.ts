import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NavigationComponent} from "./navigation/navigation.component";
import {MatToolbarModule} from "@angular/material/toolbar";
import {UsersComponent} from "./users/users.component";
import {CarsComponent} from "./cars/cars.component";
import {HttpClientModule} from "@angular/common/http";
import {UserOverviewComponent} from "./users/user-overview/user-overview.component";
import {CarOverviewComponent} from "./cars/car-overview/car-overview.component";
import {MatDividerModule} from "@angular/material/divider";
import {MatFormFieldModule} from "@angular/material/form-field";
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    UsersComponent,
    CarsComponent,
    UserOverviewComponent,
    CarOverviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    HttpClientModule,
    MatDividerModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
