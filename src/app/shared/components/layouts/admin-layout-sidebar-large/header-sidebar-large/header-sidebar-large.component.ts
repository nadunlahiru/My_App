import {Component, OnInit} from '@angular/core';
import {NavigationService} from '../../../../services/navigation.service';
import {AuthService} from '../../../../services/auth.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-header-sidebar-large',
    templateUrl: './header-sidebar-large.component.html',
    styleUrls: ['./header-sidebar-large.component.scss']
})
export class HeaderSidebarLargeComponent implements OnInit {

    notifications: any[];
    customDate: number;
    bankdashboardshow: any;
    taskdashboardshow: any;
    maindashboardshow: any;
    tittle: string;

    constructor(
        private navService: NavigationService,
        // public searchService: SearchService,
        private auth: AuthService,
        private router: Router
    ) {
        this.notifications = [
            {
                icon: 'i-Speach-Bubble-6',
                title: 'New message',
                badge: '3',
                text: 'James: Hey! are you busy?',
                time: new Date(),
                status: 'primary',
                link: '/chat'
            },
            {
                icon: 'i-Receipt-3',
                title: 'New order received',
                badge: '$4036',
                text: '1 Headphone, 3 iPhone x',
                time: new Date('11/11/2018'),
                status: 'success',
                link: '/tables/full'
            },
            {
                icon: 'i-Empty-Box',
                title: 'Product out of stock',
                text: 'Headphone E67, R98, XL90, Q77',
                time: new Date('11/10/2018'),
                status: 'danger',
                link: '/tables/list'
            },
            {
                icon: 'i-Data-Power',
                title: 'Server up!',
                text: 'Server rebooted successfully',
                time: new Date('11/08/2018'),
                status: 'success',
                link: '/dashboard/v2'
            },
            {
                icon: 'i-Data-Block',
                title: 'Server down!',
                badge: 'Resolved',
                text: 'Region 1: Server crashed!',
                time: new Date('11/06/2018'),
                status: 'danger',
                link: '/dashboard/v3'
            }
        ];
        setInterval(() => {
            this.customDate = Date.now();
        }, 1);
    }

    ngOnInit() {


        this.changeRouter();
        this.bankchangeRouter();

    }

    toggelSidebar() {
        const state = this.navService.sidebarState;
        if (state.sidenavOpen) {
            return state.sidenavOpen = false;
        }
        if (!state.sidenavOpen) {
            return state.sidenavOpen = true;
        }
        // if (!state.sidenavOpen && !state.childnavOpen) {
        //     state.sidenavOpen = true;
        //     setTimeout(() => {
        //         state.childnavOpen = true;
        //     }, 50);
        // }
    }

    signout() {

        this.router.navigateByUrl('/login');
    }

    bankchangeRouter() {

        if (this.router.url === '/main-dashboard') {
            this.tittle = 'Main Dashboard';
            this.maindashboardshow = true;
            this.bankdashboardshow = false;
        }

        if (this.router.url === '/header/payment-type') {
            this.tittle = 'Payment Type';
            this.bankdashboardshow = true;

        }
        if (this.router.url === '/header/bank-account') {
            this.tittle = 'Bank Account';
            this.bankdashboardshow = true;

        }
        if (this.router.url === '/header/bank-payment') {
            this.tittle = 'Bank Payment';
            this.bankdashboardshow = true;

        }

        if (this.router.url === ' /header/daily-payment') {
            this.tittle = 'Daily Payment';
            this.bankdashboardshow = true;

        }
    }

    changeRouter() {
        if (this.router.url === '/main-dashboard') {
            this.tittle = 'Main Dashboard';
            this.maindashboardshow = true;
            this.bankdashboardshow = false;
            this.taskdashboardshow = false;
        }

        if (this.router.url === '/header/bank-dashboard') {
            this.tittle = 'Bank Dashboard';
            this.maindashboardshow = false;
            this.bankdashboardshow = true;
        }

        if (this.router.url === '/header/task-dashboard') {
            this.tittle = 'Task Dashboard';
            this.maindashboardshow = false;
            this.taskdashboardshow = true;
        }

    }


    taskchangeRouter() {

        if (this.router.url === '/main-dashboard') {
            this.tittle = 'Main Dashboard';
            this.maindashboardshow = true;
            this.taskdashboardshow = false;
        }

        if (this.router.url === '/header/create-task') {
            this.tittle = 'Create Task';

        }

    }
}
