import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AuthLayoutComponent} from './shared/components/layouts/auth-layout/auth-layout.component';
import {AuthGaurd} from './shared/services/auth.gaurd';
import {BlankLayoutComponent} from './shared/components/layouts/blank-layout/blank-layout.component';
import {AdminLayoutSidebarCompactComponent} from './shared/components/layouts/admin-layout-sidebar-compact/admin-layout-sidebar-compact.component';
import {AdminLayoutSidebarLargeComponent} from './shared/components/layouts/admin-layout-sidebar-large/admin-layout-sidebar-large.component';
import {BankAccountComponent} from './bank-account/bank-account.component';
import {PaymentTypeComponent} from './payment-type/payment-type.component';
import {BankPaymentComponent} from './bank-payment/bank-payment.component';
import {DailyPaymentComponent} from './daily-payment/daily-payment.component';
import {LoginComponent} from './login/login.component';
import {CreateTaskComponent} from './create-task/create-task.component';
import {MainDashboardComponent} from './main-dashboard/main-dashboard.component';
import {BankDashboardComponent} from './bank-dashboard/bank-dashboard.component';
import {TaskDashboardComponent} from './task-dashboard/task-dashboard.component';

const adminRoutes: Routes = [

    {
        path: 'main-dashboard',
        component: MainDashboardComponent

        // loadChildren: () => import('./views/icons/icons.module').then(m => m.IconsModule)
    },
    {
        path: 'bank-dashboard',
        component: BankDashboardComponent

        // loadChildren: () => import('./views/icons/icons.module').then(m => m.IconsModule)
    },
    {
        path: 'task-dashboard',
        component: TaskDashboardComponent

        // loadChildren: () => import('./views/icons/icons.module').then(m => m.IconsModule)
    },
    {
        path: 'bank-account',
        component: BankAccountComponent

        // loadChildren: () => import('./views/icons/icons.module').then(m => m.IconsModule)
    },

    {
        path: 'payment-type',
        component: PaymentTypeComponent
        // loadChildren: () => import('./views/icons/icons.module').then(m => m.IconsModule)
    },
    {
        path: 'bank-payment',
        component: BankPaymentComponent
        // loadChildren: () => import('./views/icons/icons.module').then(m => m.IconsModule)
    },
    {
        path: 'daily-payment',
        component: DailyPaymentComponent
        // loadChildren: () => import('./views/icons/icons.module').then(m => m.IconsModule)
    },
    {
        path: 'create-task',
        component: CreateTaskComponent
        // loadChildren: () => import('./views/icons/icons.module').then(m => m.IconsModule)
    },

];

const routes: Routes = [
    {
        path: '',
        component: LoginComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },

    {
        path: 'header',
        component: AdminLayoutSidebarLargeComponent,
        children: adminRoutes
    },

    {
        path: '',
        component: AuthLayoutComponent,
        children: [
            {
                path: 'sessions',
                loadChildren: () => import('./views/sessions/sessions.module').then(m => m.SessionsModule)
            }
        ]
    },
    {
        path: '',
        component: BlankLayoutComponent,
        children: [
            {
                path: 'others',
                loadChildren: () => import('./views/others/others.module').then(m => m.OthersModule)
            }
        ]
    },
    {
        path: '',
        component: AdminLayoutSidebarLargeComponent,
        canActivate: [AuthGaurd],
        children: adminRoutes
    },
    {
        path: '**',
        redirectTo: 'others/404'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
