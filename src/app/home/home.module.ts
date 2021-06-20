import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { HomeComponent } from './home.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        RouterModule,
        HttpClientModule,
        TranslateModule.forRoot({
          loader: {
              provide: TranslateLoader,
              useFactory: HttpLoaderFactory,
              deps: [HttpClient]
          }
      }),
    ],
    declarations: [ HomeComponent ],
    exports:[ HomeComponent ],
    providers: []
})
export class HomeModule { }

 // required for AOT compilation
 export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
  }