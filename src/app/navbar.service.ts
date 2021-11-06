import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {
  visible: boolean;
  visibleS: boolean;

  constructor() { this.visible = false; }

  hide() { this.visible = false; }

  hideS() { this.visibleS = false; }

  show() { this.visible = true; }

  showS() { this.visibleS = true; }

  toggle() { this.visible = !this.visible; }

  doSomethingElseUseful() { }

}
