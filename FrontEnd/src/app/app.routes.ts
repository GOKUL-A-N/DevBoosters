import { Routes } from '@angular/router';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {path:'user',component:UserProfileComponent},
    {path:'',component:HomeComponent}
];
