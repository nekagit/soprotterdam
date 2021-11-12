import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app.routing';


import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { ProfileComponent } from './profile/profile.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';

import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { HomeModule } from './home/home.module';
import { SkolaComponent } from './skola/skola.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { HttpClient} from '@angular/common/http';
import { VestComponent } from './vest/vest.component';
import { UdzComponent } from './udz/udz.component';
import { PrvaComponent } from './prva/prva.component';
import { ProfileSComponent } from './profile-s/profile-s.component';
import { HomeSComponent } from './home-s/home-s.component';
import { KontaktSComponent } from './kontakt-s/kontakt-s.component';
import { LandingSComponent } from './landing-s/landing-s.component';
import { VaterpoloComponent } from './vaterpolo/vaterpolo.component';
import { KrosComponent } from './kros/kros.component';
import { OstaliComponent } from './ostali/ostali.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    LandingSComponent,
    ProfileComponent,
    NavbarComponent,
    FooterComponent,
    SkolaComponent,
    KontaktComponent,
    VestComponent,
    UdzComponent,
    KontaktSComponent,
    ProfileSComponent,
    HomeSComponent,
    PrvaComponent,
    VaterpoloComponent,
    KrosComponent,
    OstaliComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    HomeModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
  }),
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
 // required for AOT compilation
 export function HttpLoaderFactory(http: HttpClient) {
   return new TranslateHttpLoader(http);
 }
