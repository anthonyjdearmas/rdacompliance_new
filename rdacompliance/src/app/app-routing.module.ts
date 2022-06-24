import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CoursefinderComponent } from './coursefinder/coursefinder.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'coursefinder', component: CoursefinderComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: '**', redirectTo: '' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// ADD COMPONENTS TO THIS ARRAY TO BE ROUTED
export const RoutingComponents = [HomeComponent, CoursefinderComponent]
