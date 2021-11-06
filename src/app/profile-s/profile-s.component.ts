import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../navbar.service';

@Component({
  selector: 'app-profile-s',
  templateUrl: './profile-s.component.html',
  styleUrls: ['./profile-s.component.css']
})
export class ProfileSComponent implements OnInit {

    constructor(public nav: NavbarService) { }

    ngOnInit() {this.nav.showS();}

}
