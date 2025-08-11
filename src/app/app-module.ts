import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Identification } from './pages/identification/identification';
import { Browser } from './pages/browser/browser';
import { Families } from './pages/families/families';
import { PlantBot } from './pages/plant-bot/plant-bot';
import { Statistics } from './pages/statistics/statistics';
import { Home } from './pages/home/home';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { PlantDetail } from './pages/plant-detail/plant-detail';

@NgModule({
  declarations: [
    App,
    Identification,
    Browser,
    Families,
    PlantBot,
    Statistics,
    Home,
    PlantDetail
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    NgxChartsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
