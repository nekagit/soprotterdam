import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../navbar.service';

@Component({
  selector: 'app-vest',
  templateUrl: './vest.component.html',
  styleUrls: ['./vest.component.css']
})
export class VestComponent implements OnInit {

  constructor(public nav: NavbarService) { }

  ngOnInit() {this.nav.showS();
  
    document.getElementById("slk").onmouseover = function ()  {
      document.getElementById("slk").classList.add('hoverIn');
      document.getElementById("slk").classList.remove('hoverOut');

  };
  document.getElementById("slk").onmouseleave = function ()  {
      document.getElementById("slk").classList.add('hoverOut');
      document.getElementById("slk").classList.remove('hoverIn');
  };}

}