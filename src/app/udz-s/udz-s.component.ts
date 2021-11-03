import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../navbar.service';

@Component({
  selector: 'app-udz-s',
  templateUrl: './udz-s.component.html',
  styleUrls: ['./udz-s.component.css']
})
export class UdzSComponent implements OnInit {

  constructor(public nav: NavbarService) { }

  ngOnInit(): void {this.nav.show();
  }

}
