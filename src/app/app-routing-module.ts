import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Identification } from './pages/identification/identification';
import { Browser } from './pages/browser/browser';
import { Families } from './pages/families/families';
import { Statistics } from './pages/statistics/statistics';
import { PlantBot } from './pages/plant-bot/plant-bot';

const routes: Routes = [
  {
    path: '',
    component: Home
  },
  {
    path:"identification",
    component: Identification
  },
  {
    path:"browser",
    component: Browser
  },
  {
    path:"families",
    component: Families
  },
  {
    path:"plant-bot",
    component: PlantBot
  },
  {
    path:"statistics",
    component: Statistics
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
