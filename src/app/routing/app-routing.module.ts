import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from '../pages/home-page/home-page.component';
import { AboutPageComponent } from '../pages/info-pages/about-page/about-page.component';
import { AwarenessPageComponent } from '../pages/info-pages/awareness-page/awareness-page.component';
import { SurveyPageComponent } from '../pages/survey-page/survey-page.component';

const routes: Routes = [
    {
        path: 'home', 
        pathMatch: 'full', 
        component: HomePageComponent
    },
    {
        path: 'about', 
        pathMatch: 'full', 
        component: AboutPageComponent
    },
    {
        path: 'awareness',
        pathMatch: 'full', 
        component: AwarenessPageComponent
    },
    {
        path: 'survey',
        pathMatch: 'full', 
        component: SurveyPageComponent
    },
    {
        path: '', 
        pathMatch: 'full', 
        redirectTo:'home'
    },
    {
        path: '**', 
        redirectTo:'home'
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
