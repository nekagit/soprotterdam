import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { LandingComponent } from './landing/landing.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { SkolaComponent } from './skola/skola.component';
import { VestComponent } from './vest/vest.component';
import { UdzComponent } from './udz/udz.component';
import { HomeSComponent } from './home-s/home-s.component';
import { ProfileSComponent } from './profile-s/profile-s.component';
import { KontaktSComponent } from './kontakt-s/kontakt-s.component';
import { VestSComponent } from './vest-s/vest-s.component';
import { UdzSComponent } from './udz-s/udz-s.component';

const routes: Routes =[
  { path: 'pocetna',             component: HomeComponent },
  { path: 'galerija',     component: ProfileComponent },
  { path: 'aktivnosti',          component: LandingComponent },
  { path: 'kontakt',          component: KontaktComponent },
  { path: 'skola',          component: SkolaComponent },
  { path: 'vest',          component: VestComponent },
  { path: 'udz',          component: UdzComponent },
  { path: 'pocetnaS',             component: HomeSComponent },
  { path: 'galerijaS',     component: ProfileSComponent },
  { path: 'kontaktS',          component: KontaktSComponent },
  { path: 'skola',          component: SkolaComponent },
  { path: 'vestS',          component: VestSComponent },
  { path: 'udzS',          component: UdzSComponent },
    { path: '', redirectTo: 'prva', pathMatch: 'full' }
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
