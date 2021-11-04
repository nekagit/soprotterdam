import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../navbar.service';

@Component({
  selector: 'app-prva',
  templateUrl: './prva.component.html',
  styleUrls: ['./prva.component.css']
})
export class PrvaComponent implements OnInit {

  constructor(public nav: NavbarService) { }

  ngOnInit(): void {
    this.nav.hide();
  }

}
