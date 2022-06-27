import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CoursefinderComponent } from './components/coursefinder/coursefinder.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';

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
