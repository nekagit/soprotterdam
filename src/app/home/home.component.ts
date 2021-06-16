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

    }
}