import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from '../pages/home-page/home-page.component';

const routes: Routes = [
    {
        path: 'home', pathMatch: 'full', component: HomePageComponent
    },
    {
        path: '', pathMatch: 'full', redirectTo:'home'
    },
    {
        path: '**', redirectTo:'home'
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
