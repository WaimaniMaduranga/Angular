import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HeroesComponent} from '../app/heroes/heroes.component';
import {DashboardComponent} from '../app/dashboard/dashboard.component';
const routes: Routes = [
{path:'',redirectTo:'/dashboard',pathMatch:'full'},//This is the Default Router
{path:'heroes',component:HeroesComponent},
{path:'dashboard',component:DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
