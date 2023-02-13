import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { Ng2SearchPipeModule } from 'ng2-search-filter';



import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import { httpInterceptorProviders } from 'src/helpers/http.interceptor';

import { WebView } from '@awesome-cordova-plugins/ionic-webview/ngx';
import { ImagePicker } from '@awesome-cordova-plugins/image-picker/ngx';
import { NativeGeocoder } from '@ionic-native/native-geocoder/ngx';






@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule, 
  Ng2SearchPipeModule],
  providers: [
    ImagePicker, 
    WebView,
    NativeGeocoder,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, httpInterceptorProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}
