import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CountriesComponent} from './countries/countries.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {CountryComponent} from './country/country.component';
import {UlkelerComponent} from './ulkeler/ulkeler.component';

const routes: Routes = [
  {path:'', redirectTo:'/dashboard',pathMatch:'full'},
  {path:'country/:id', component: CountryComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'ulkeler', component: UlkelerComponent},
  {path: 'countries', component: CountriesComponent}
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
