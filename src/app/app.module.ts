import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { IndexPage } from '../pages/index';
import { ChapterOnePage } from '../pages/chapter-one/chapter-one';
import { ChapterTwoPage } from '../pages/chapter-two/chapter-two';
import { ChapterThreePage } from '../pages/chapter-three/chapter-three';
import { ChapterFourPage } from '../pages/chapter-four/chapter-four';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    IndexPage,
    ChapterOnePage,
    ChapterTwoPage,
    ChapterThreePage,
    ChapterFourPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    IndexPage,
    ChapterOnePage,
    ChapterTwoPage,
    ChapterThreePage,
    ChapterFourPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
