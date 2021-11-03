import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../navbar.service';

@Component({
  selector: 'app-landing-s',
  templateUrl: './landing-s.component.html',
  styleUrls: ['./landing-s.component.css']
})
export class LandingSComponent implements OnInit {

  focus: any;
  focus1: any;

  constructor(public nav: NavbarService) { }

  ngOnInit() {this.nav.show();}

}
