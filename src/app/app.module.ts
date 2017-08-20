import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';

import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {DataProvider} from "../providers/DataProvider"
import {AboutUsPageModule} from '../pages/about-us/about-us.module';
import {StoryDetailPageModule} from "../pages/stories/story-detail/story-detail.module";
import {SettingsPageModule} from '../pages/settings/settings.module';
import {Deeplinks} from '@ionic-native/deeplinks';
import {ChatPageModule} from '../pages/chat/chat.module';

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AboutUsPageModule, StoryDetailPageModule, SettingsPageModule,ChatPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    DataProvider,
    Deeplinks,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {
}
