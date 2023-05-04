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
import { IdentificationSurveyFormComponent } from './components/survey/identification-survey-form/identification-survey-form.component';
import { LifestyleSurveyFormComponent } from './components/survey/lifestyle-survey-form/lifestyle-survey-form.component';
import { SymptomsSurveyFormComponent } from './components/survey/symptoms-survey-form/symptoms-survey-form.component';
import {MatDialogModule} from '@angular/material/dialog';
import { LoginFormComponent } from './components/auth/login-form/login-form.component'; 

@NgModule({
  declarations: [
    AppComponent,
    DiaHeaderComponent,
    HomePageComponent,
    AboutPageComponent,
    AwarenessPageComponent,
    SurveyPageComponent,
    IdentificationSurveyFormComponent,
    LifestyleSurveyFormComponent,
    SymptomsSurveyFormComponent,
    LoginFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatDialogModule,
    MatTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
