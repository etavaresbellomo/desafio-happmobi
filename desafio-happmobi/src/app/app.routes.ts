import { Routes } from '@angular/router';
import { authGuard } from './guard/auth/auth.guard';

export const routes: Routes = [
  {path:'',
    redirectTo:'auth/login',
    pathMatch:'full'
  },
  {path: 'auth',
    loadChildren: () => import ('./layouts/auth-layout/auth-layout.routing').then(r => r.AuthLayoutRoutes)
  },
  {path: '',
     canActivateChild: [authGuard],
    loadChildren: () => import ('./layouts/admin-layout/admin-layout.routing').then(r => r.AdminLayoutRoutes)
  },
];
