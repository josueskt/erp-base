import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { MenuconfigComponent } from './config/menuconfig/menuconfig.component';
import { HomeComponent } from './user/home/home.component';
import { ProfileComponent } from './config/profile/profile.component';

export const routes: Routes = [
    {path:'',redirectTo: '/home', pathMatch: 'full'},
    {path:"menuconfig",component:MenuconfigComponent},
    {path:"login",component:LoginComponent},
    {path:"home",component:HomeComponent},
    {path:"profile",component:ProfileComponent},
];
