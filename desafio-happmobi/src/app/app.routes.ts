import { Routes } from '@angular/router';

export const routes: Routes = [
  {path:'',
    redirectTo:'auth/login',
    pathMatch:'full'
  },
  {path: 'auth',
    loadChildren: () => import ('./layouts/auth-layout/auth-layout.routing').then(r => r.AuthLayoutRoutes)
  }
];
