import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { HttpModule } from '@angular/http';

import { AuthService } from '../services/auth';
import { MaldiveRanksPage } from '../pages/maldive-ranks/maldive-ranks';
import { MaldiveRanksSecondpagePage } from '../pages/maldive-ranks-secondpage/maldive-ranks-secondpage';
import { TokyoRanksPage } from '../pages/tokyo-ranks/tokyo-ranks';
import { TokyoRanksSecondpagePage } from '../pages/tokyo-ranks-secondpage/tokyo-ranks-secondpage';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    MaldiveRanksPage,
    MaldiveRanksSecondpagePage,
    TokyoRanksPage,
    TokyoRanksSecondpagePage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    MaldiveRanksPage,
    MaldiveRanksSecondpagePage,
    TokyoRanksPage,
    TokyoRanksSecondpagePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AuthService,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  
  ]
})
export class AppModule {}
