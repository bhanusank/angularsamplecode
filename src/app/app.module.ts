import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

import { HeroService } from './hero/hero.service';
import { SignupService } from './signup/signup.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero/hero-details/hero-detail.component';
import { HeroesComponent } from './hero/heroes.component';
import { LoginComponent } from './login/login.component';
import { HeroSearchComponent } from './hero/hero-search/hero-search.component';
import { CanActivateAuthGuard } from './auth-guards/can-activate.authguard';
import { AuthenticationService } from './auth-guards/authentication.service';
import {AppRoutingModule} from "./app-routing.module";
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { SignupComponent } from './signup/signup.component';
import { FieldErrorDisplayComponent } from './field-error-display/field-error-display.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
	DashboardComponent,
      HeroDetailComponent,
    HeroesComponent,
    HeroSearchComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    SignupComponent,
    FieldErrorDisplayComponent
    
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    HttpClientModule,
    ChartsModule

  ],
  providers: [AuthenticationService,HeroService,CanActivateAuthGuard,SignupService ],
  bootstrap: [AppComponent]
})
export class AppModule {

}