import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './home/login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './home/register/register.component';
import { PreferenceComponent } from './preference/preference.component';
import { RecomendationComponent } from './recomendation/recomendation.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path: 'home', component: HomeComponent },
  {path:'register',component:RegisterComponent},
  {path:'preference',component:PreferenceComponent},
  {path:'recomendation',component:RecomendationComponent},
  {path:'form',component:FormComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
