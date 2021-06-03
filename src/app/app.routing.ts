import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { LandingComponent } from './landing/landing.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { SkolaComponent } from './skola/skola.component';

const routes: Routes =[
    { path: 'pocetna',             component: HomeComponent },
    { path: 'galerija',     component: ProfileComponent },
    { path: 'aktivnosti',          component: LandingComponent },
    { path: 'kontakt',          component: KontaktComponent },
    { path: 'skola',          component: SkolaComponent },
    { path: '', redirectTo: 'pocetna', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
