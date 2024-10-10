import { Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {UserListComponent} from "./components/users/user-list/user-list.component";
import {UserDetailComponent} from "./components/users/user-detail/user-detail.component";
import {authGuard} from "./_guards/auth.guard";

import {TestErrorComponent} from "./errors/test-error/test-error.component";
import {ServerErrorComponent} from "./errors/server-error/server-error.component";
import {NotFoundComponent} from "./errors/not-found/not-found.component";
import {NewLoginComponent} from "./components/new-login/new-login.component";
import {SignUpComponent} from "./components/forms/sign-up/sign-up.component";
import {RegisterComponent} from "./components/register/register.component";
import {NewHomeComponent} from "./components/new-home/new-home.component";

export const routes: Routes = [
    // {path: '', component: HomeComponent},
    {path: '', component: NewHomeComponent},
    {
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [authGuard],
        children: [
          // We can protect all paths here using authGuard
          {path: 'users', component: UserListComponent},
          {path: 'users/:id', component: UserDetailComponent},
        ]
      },
      {path: 'login', component: NewLoginComponent},
      {path: 'signup', component: SignUpComponent},
      {path: 'register', component: RegisterComponent},
      {path : 'server-error', component: ServerErrorComponent},
      {path : 'not-found', component: NotFoundComponent},
      // {path: 'users', component: UserListComponent, canActivate: [authGuard]},
      {path: 'errors',component: TestErrorComponent},
      {path: '**', component: HomeComponent, pathMatch: 'full'},
];
