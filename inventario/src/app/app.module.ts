import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ModuloContenedoresModule } from './components/modulo-contenedores.module';
import { IncrusterDirective } from './directives/incruster/incruster.directive';
import { LoginComponent } from './components/inicio/login/login.component';
import { SignupComponent } from './components/inicio/signup/signup.component';

@NgModule({
  declarations: [AppComponent, IncrusterDirective ],
  entryComponents: [ LoginComponent, SignupComponent ],
  imports: [ BrowserModule, IonicModule.forRoot(), AppRoutingModule, ModuloContenedoresModule ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
