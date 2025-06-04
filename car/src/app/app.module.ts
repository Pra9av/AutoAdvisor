import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from '../environments/environment.development';
import { FormsModule } from '@angular/forms';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './home/login/login.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { RegisterComponent } from './home/register/register.component';
import { CommonModule } from '@angular/common';
import { SliderComponent } from './home/slider/slider.component';
import { provideHttpClient } from '@angular/common/http';
import { RecomendationComponent } from './recomendation/recomendation.component';
import { PreferenceComponent } from './preference/preference.component';
import { FormComponent } from './form/form.component';

import { UploadComponent } from './upload/upload.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
   


    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    CommonModule,
    SliderComponent,
    RecomendationComponent,
    PreferenceComponent,
    FormComponent,
    UploadComponent



],
  providers: [
    provideFirebaseApp(() => initializeApp({ projectId: "autoadvisor-8ffb0", appId: "1:779761401151:web:54bb45efc6f7c80c91678a", storageBucket: "autoadvisor-8ffb0.firebasestorage.app", apiKey: "AIzaSyDPdhH1StN0wYUg-tEbBuirfg3LrQFq1u4", authDomain: "autoadvisor-8ffb0.firebaseapp.com", messagingSenderId: "779761401151", measurementId: "G-2W38W9J4QN" })),
    provideAuth(() => getAuth()),

    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
    provideHttpClient()

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
