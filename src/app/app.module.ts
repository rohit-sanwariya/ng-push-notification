import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getMessaging, provideMessaging } from '@angular/fire/messaging';
import { ServiceWorkerModule } from '@angular/service-worker';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp({"projectId":"push-notification-dotnet","appId":"1:179158154095:web:9d870962092b058351c69a","storageBucket":"push-notification-dotnet.appspot.com","apiKey":"AIzaSyDScEFfXl68KSzpqQAbBMpVq90KmfEi9No","authDomain":"push-notification-dotnet.firebaseapp.com","messagingSenderId":"179158154095","measurementId":"G-X89H96GVD2"})),
    provideMessaging(() => getMessaging()),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
