import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';
import { Location, PopStateEvent } from '@angular/common';
import { NavbarService } from '../navbar.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-skola',
  templateUrl: './skola.component.html',
  styleUrls: ['./skola.component.css']
})
export class SkolaComponent implements OnInit {
    public isCollapsed = true;
    private lastPoppedUrl: string;
    private yScrollStack: number[] = [];


  constructor(public location: Location, private router: Router, public nav: NavbarService, public translate: TranslateService) {
    translate.addLangs(['rs', 'nl']);  
    translate.setDefaultLang('rs');  
   }

  ngOnInit() {
    this.nav.hide();
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
      if (event instanceof NavigationStart) {
         if (event.url != this.lastPoppedUrl)
             this.yScrollStack.push(window.scrollY);
     } else if (event instanceof NavigationEnd) {
         if (event.url == this.lastPoppedUrl) {
             this.lastPoppedUrl = undefined;
             window.scrollTo(0, this.yScrollStack.pop());
         } else
             window.scrollTo(0, 0);
     }
   });
   this.location.subscribe((ev:PopStateEvent) => {
       this.lastPoppedUrl = ev.url;
   });
  }

  isHome() {
      var titlee = this.location.prepareExternalUrl(this.location.path());

      if( titlee === '#/home' ) {
          return true;
      }
      else {
          return false;
      }
  }
  isDocumentation() {
      var titlee = this.location.prepareExternalUrl(this.location.path());
      if( titlee === '#/documentation' ) {
          return true;
      }
      else {
          return false;
      }
  }
  
  switchLang(lang){
    this.translate.use(lang);
    console.log(this.translate.currentLang);
}
}

