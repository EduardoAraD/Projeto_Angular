import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CardMatchComponent } from './card-match/card-match.component';
import { HeaderComponent } from './header/header.component';
import { TitleComponent } from './title/title.component';

const routes: Routes = [
  // Home
  {
    path:'',
    component: HomeComponent
  },
  {
    path: 'card',
    component: CardMatchComponent
  },
  {
    path: 'header',
    component: HeaderComponent
  },
  {
    path: 'title',
    component: TitleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
