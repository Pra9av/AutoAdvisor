import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './home/login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './home/register/register.component';
import { PreferenceComponent } from './preference/preference.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path: 'home', component: HomeComponent },
  {path:'register',component:RegisterComponent},
  {path:'preference',component:PreferenceComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
