import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../navbar.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
    model = {
        left: true,
        middle: false,
        right: false
    };

    focus;
    focus1;
    constructor(public nav: NavbarService) { }

    ngOnInit() {
        this.nav.show();

        document.getElementById("slk").onmouseover = function ()  {
            document.getElementById("slk").classList.add('hoverIn');
            document.getElementById("slk").classList.remove('hoverOut');

        };
        document.getElementById("slk").onmouseleave = function ()  {
            document.getElementById("slk").classList.add('hoverOut');
            document.getElementById("slk").classList.remove('hoverIn');
        };
        console.log("hallo");
    }
   
    hover() {
        console.log("hallo");
      }
    weg() {
        console.log("haldddddlo");

        document.getElementById("slk").classList.remove('hover'); 
      }
}