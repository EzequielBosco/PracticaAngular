import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path : '', component: HomeComponent },
    { path : 'users', component: UserComponent },
    { path : 'usuarios', redirectTo: '/users', pathMatch: 'full' },
];
