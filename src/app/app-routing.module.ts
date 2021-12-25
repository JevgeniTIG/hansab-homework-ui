import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UsersComponent} from "./users/users.component";
import {CarsComponent} from "./cars/cars.component";
import {UserOverviewComponent} from "./users/user-overview/user-overview.component";
import {CarOverviewComponent} from "./cars/car-overview/car-overview.component";

const routes: Routes = [
  {path: 'users', component: UsersComponent},
  {path: 'cars', component: CarsComponent},
  {path: 'user-overview', component: UserOverviewComponent},
  {path: 'car-overview', component: CarOverviewComponent},
  {path: '', redirectTo: 'users', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
