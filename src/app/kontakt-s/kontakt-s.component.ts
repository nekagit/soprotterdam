import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../navbar.service';

@Component({
  selector: 'app-kontakt-s',
  templateUrl: './kontakt-s.component.html',
  styleUrls: ['./kontakt-s.component.css']
})
export class KontaktSComponent implements OnInit {


  constructor(public nav: NavbarService) { }

  ngOnInit(): void {this.nav.showS();
  }

}
