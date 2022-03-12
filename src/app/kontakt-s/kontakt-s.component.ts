import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { NavbarService } from '../navbar.service';

@Component({
  selector: 'app-kontakt-s',
  templateUrl: './kontakt-s.component.html',
  styleUrls: ['./kontakt-s.component.css']
})
export class KontaktSComponent implements OnInit {
  public subscribeForm: FormGroup;
    public email: FormControl;
    private unsubscribe = new Subject<void>();

    constructor(private nav:NavbarService, private http: HttpClient) { }

    ngOnInit() {
      this.nav.showS()
        this.createFormControls();
        this.createForm();
    }

    createFormControls() {
        this.email = new FormControl('', [
            Validators.required
        ]);
    }

    createForm() {
        this.subscribeForm = new FormGroup({
            email: this.email
        });
    }

    sendMail() {
        if (this.subscribeForm.valid) {
            this.http.post("../../app/submit.php", this.email).subscribe();
        }
    }

    ngOnDestroy(): void {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    }

}
