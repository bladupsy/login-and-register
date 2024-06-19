import { Routes } from '@angular/router';
import { LoginComponent } from './views/login/login.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  // { path: 'register', component: RegisterComponent },
  // { path: '**', component: NotFoundComponent }
];
