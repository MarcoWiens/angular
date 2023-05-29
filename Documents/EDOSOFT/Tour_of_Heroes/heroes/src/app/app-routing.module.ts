import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppComponent } from './app.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  {
    path: 'heroes', //TODO: localhost:4200/heroes
    component: HeroesComponent
  },
  {
    path: 'dashboard', //TODO: localhost:4200/dashboard
    component: DashboardComponent
  },
  {
    path: 'details/:id', //TODO: localhost:4200/dashboard
    component: DetailsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
