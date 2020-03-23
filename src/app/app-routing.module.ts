import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CountriesComponent} from './countries/countries.component';
import {DashboardComponent} from './dashboard/dashboard.component';

const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'countries', component: CountriesComponent}
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
