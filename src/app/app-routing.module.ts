import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero/hero-details/hero-detail.component';
import { HeroesComponent } from './hero/heroes.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { CanActivateAuthGuard } from './auth-guards/can-activate.authguard';
const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
 
  { path: 'login',      component: LoginComponent },
  { path: 'signup',      component: SignupComponent },
  { path: 'home',       component: HomeComponent, canActivate: [CanActivateAuthGuard]},
  { path: 'dashboard', component: DashboardComponent,canActivate: [CanActivateAuthGuard] },
  { path: 'detail/:id', component: HeroDetailComponent,canActivate: [CanActivateAuthGuard]  },
  { path: 'heroes', component: HeroesComponent,canActivate: [CanActivateAuthGuard]  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
