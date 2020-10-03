import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContenedorComponent } from './contenedor/contenedor.component';
import { LoginComponent } from './inicio/login/login.component';
import { SignupComponent } from './inicio/signup/signup.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [ ContenedorComponent, LoginComponent, SignupComponent ],
  imports: [
    CommonModule, IonicModule
  ],
  exports: [ ContenedorComponent, LoginComponent, SignupComponent ]
})
export class ModuloContenedoresModule { }
