import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../navbar.service';

@Component({
  selector: 'app-kros',
  templateUrl: './kros.component.html',
  styleUrls: ['./kros.component.css']
})
export class KrosComponent implements OnInit {

  constructor(public nav: NavbarService) {
    
   }

  ngOnInit(): void {
    this.nav.show();
  }
  
}
