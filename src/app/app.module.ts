import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HeaderComponent } from './header/header.component';
import { LoadingFormComponent } from './loading-form/loading-form.component';
import { LoaderService } from '../services/loader.service';

const appRoutes: Routes = [
	{ path:'', redirectTo: 'app', pathMatch: 'full' },
	{ path: 'app', component: LoadingFormComponent },
	{ path: 'landing', component: LandingPageComponent },
];

@NgModule({
	declarations: [
    	AppComponent,
    	LandingPageComponent,
    	HeaderComponent,
    	LoadingFormComponent
  	],
  	imports: [
    	BrowserModule,
    	FormsModule,
    	ReactiveFormsModule,
    	RouterModule.forRoot(appRoutes)
  	],
  	providers: [LoaderService],
  	bootstrap: [AppComponent]
})
export class AppModule { }
