import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { WorkoutPage } from '../pages/workout/workout';
import { ListwodPage } from '../pages/listwod/listwod';
import { FirebaseServiceProvider } from '../providers/firebase-service/firebase-service';

import { HttpModule } from '@angular/http';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';



const firebaseConfig = {
  apiKey: "AIzaSyArgy6FumGRssLN5F_5dPDnYF985ous1tw",
  authDomain: "myfitness-c71a3.firebaseapp.com",
  databaseURL: "https://myfitness-c71a3.firebaseio.com",
  projectId: "myfitness-c71a3",
  storageBucket: "myfitness-c71a3.appspot.com",
  messagingSenderId: "340540655946"
};


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    WorkoutPage,
    ListwodPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(firebaseConfig)

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    WorkoutPage,
    ListwodPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FirebaseServiceProvider
  ]
})
export class AppModule {}
