import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {
  currentLang: string = 'rs'
  visible: boolean;
  visibleS: boolean;

  constructor(public translate: TranslateService,) { this.visible = false; 
    
  }

  hide() { this.visible = false; }

  hideS() { this.visibleS = false; }

  show() { this.visible = true; }

  showS() { this.visibleS = true; }

  toggle() { this.visible = !this.visible; }

  doSomethingElseUseful() { }

  vestiSwitchLang() { 
    
  }

}
