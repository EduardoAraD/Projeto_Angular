import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CardMatchComponent } from './card-match/card-match.component'

const routes: Routes = [
  // Home
  {
    path:'',
    component: HomeComponent
  },
  {
    path: '',
    component: CardMatchComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
