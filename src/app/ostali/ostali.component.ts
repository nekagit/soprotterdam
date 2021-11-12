import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../navbar.service';

@Component({
  selector: 'app-ostali',
  templateUrl: './ostali.component.html',
  styleUrls: ['./ostali.component.css']
})
export class OstaliComponent implements OnInit {

  constructor(public nav: NavbarService) { }

  ngOnInit(): void {
    this.nav.show();
  }

}
