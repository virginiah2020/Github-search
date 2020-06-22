import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ProfileComponent } from './profile/profile.component';



const routes: Routes = [
  { path: 'profile', component: ProfileComponent},
  { path: 'landingpage', component: LandingPageComponent},
  { path:'**', component:LandingPageComponent},

  { path: '', redirectTo:"/landingpage", pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
