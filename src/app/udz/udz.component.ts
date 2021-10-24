import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../navbar.service';

@Component({
  selector: 'app-udz',
  templateUrl: './udz.component.html',
  styleUrls: ['./udz.component.css']
})
export class UdzComponent implements OnInit {

  constructor(public nav: NavbarService) { }

  ngOnInit(): void {this.nav.show();
  }

}
