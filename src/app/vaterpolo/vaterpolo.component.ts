import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../navbar.service';

@Component({
  selector: 'app-vaterpolo',
  templateUrl: './vaterpolo.component.html',
  styleUrls: ['./vaterpolo.component.css']
})
export class VaterpoloComponent implements OnInit {

  constructor(public nav: NavbarService) { }

  ngOnInit(): void {
    this.nav.show();
  }

}
