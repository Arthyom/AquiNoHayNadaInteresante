import { LoginComponent } from './inicio/login/login.component';
import { SignupComponent } from './inicio/signup/signup.component';

export class Mapper {

    maps = {
        login : LoginComponent,
        signup : SignupComponent
    }

    constructor() {}
}