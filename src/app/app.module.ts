import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './routing/app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import { DiaHeaderComponent } from './components/dia-header/dia-header.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/info-pages/about-page/about-page.component';
import { AwarenessPageComponent } from './pages/info-pages/awareness-page/awareness-page.component';
import { SurveyPageComponent } from './pages/survey-page/survey-page.component'; 

@NgModule({
  declarations: [
    AppComponent,
    DiaHeaderComponent,
    HomePageComponent,
    AboutPageComponent,
    AwarenessPageComponent,
    SurveyPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
