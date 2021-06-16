import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../navbar.service';

@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.scss']
})

export class LandingComponent implements OnInit {
  focus: any;
  focus1: any;

  constructor(public nav: NavbarService) { }

  ngOnInit() {this.nav.show();}

}
