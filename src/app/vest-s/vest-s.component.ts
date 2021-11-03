import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../navbar.service';

@Component({
  selector: 'app-vest-s',
  templateUrl: './vest-s.component.html',
  styleUrls: ['./vest-s.component.css']
})
export class VestSComponent implements OnInit {

  constructor(public nav: NavbarService) { }

  ngOnInit() {this.nav.show();
  
    document.getElementById("slk").onmouseover = function ()  {
      document.getElementById("slk").classList.add('hoverIn');
      document.getElementById("slk").classList.remove('hoverOut');

  };
  document.getElementById("slk").onmouseleave = function ()  {
      document.getElementById("slk").classList.add('hoverOut');
      document.getElementById("slk").classList.remove('hoverIn');
  };}

}