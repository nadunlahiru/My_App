import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SharedModule} from './shared/shared.module';
import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from './shared/inmemory-db/inmemory-db.service';
import {HttpClientModule} from '@angular/common/http';
import {BankAccountComponent} from './bank-account/bank-account.component';
import {PaymentTypeComponent} from './payment-type/payment-type.component';
import {BankPaymentComponent} from './bank-payment/bank-payment.component';
import {DailyPaymentComponent} from './daily-payment/daily-payment.component';
import {LoginComponent} from './login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {CustomFormsModule} from 'ng2-validation';
import {SharedComponentsModule} from './shared/components/shared-components.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {TagInputModule} from 'ngx-chips';
import {ImageCropperModule} from 'ngx-img-cropper';
import {FormWizardModule} from './shared/components/form-wizard/form-wizard.module';
import {TextMaskModule} from 'angular2-text-mask';
import {CreateTaskComponent} from './create-task/create-task.component';
import {MainDashboardComponent} from './main-dashboard/main-dashboard.component';
import {BankDashboardComponent} from './bank-dashboard/bank-dashboard.component';
import {TaskDashboardComponent} from './task-dashboard/task-dashboard.component';

@NgModule({
    declarations: [
        AppComponent,
        BankAccountComponent,
        PaymentTypeComponent,
        BankPaymentComponent,
        DailyPaymentComponent,
        LoginComponent,
        CreateTaskComponent,
        MainDashboardComponent,
        BankDashboardComponent,
        TaskDashboardComponent
    ],
    imports: [
        BrowserModule,
        SharedModule,
        HttpClientModule,
        BrowserAnimationsModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService, {passThruUnknownUrl: true}),
        AppRoutingModule,
        FormsModule,
        CommonModule,
        ReactiveFormsModule,
        CustomFormsModule,
        SharedComponentsModule,
        NgbModule,
        TagInputModule,
        ImageCropperModule,
        TextMaskModule,
        FormWizardModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
