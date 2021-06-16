import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../navbar.service';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {

    constructor(public nav: NavbarService) { }

    ngOnInit() {this.nav.show();}

}
