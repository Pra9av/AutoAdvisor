import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './home/login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './home/register/register.component';
import { PreferenceComponent } from './preference/preference.component';
import { RecomendationComponent } from './recomendation/recomendation.component';
import { FormComponent } from './form/form.component';
import { AdminComponent } from './home/admin/admin.component';
import { AdminAuthGuard } from './home/admin/Guard/adminguard.guard';
import { CarnewsComponent } from './home/carnews/carnews.component';
import { EmicalculatorComponent } from './emicalculator/emicalculator.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path: 'home', component: HomeComponent },
  {path:'register',component:RegisterComponent},
  {path:'preference',component:PreferenceComponent},
  {path:'recomendation',component:RecomendationComponent},
  {path:'form',component:FormComponent},
  { path: 'admin', component: AdminComponent, canActivate: [AdminAuthGuard] },
  {path:'emicalc',component:EmicalculatorComponent}
  // {path:'carnews',component:CarnewsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
