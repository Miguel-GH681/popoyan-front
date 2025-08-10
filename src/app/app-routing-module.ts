import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Identification } from './pages/identification/identification';
import { Browser } from './pages/browser/browser';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
