import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { MenuconfigComponent } from './config/menuconfig/menuconfig.component';

export const routes: Routes = [
    {path:"menuconfig",component:MenuconfigComponent},
    {path:"login",component:LoginComponent}
];
