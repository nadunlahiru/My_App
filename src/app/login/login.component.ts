import {Component, OnInit} from '@angular/core';
import {SharedAnimations} from '../shared/animations/shared-animations';
import {Router} from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [SharedAnimations]
})
export class LoginComponent implements OnInit {

    constructor(private router: Router) {
    }

    ngOnInit() {
    }


    signin() {
        this.router.navigateByUrl('/main-dashboard');
    }
}
