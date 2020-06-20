import {Injectable} from '@angular/core';
import {DataService} from "./data.service";
// import {CustomerDto} from "../dto/CustomerDto";
import {Observable} from "rxjs";
import {ENDPOINTSMANAGER} from "../end-points-manager/end-points-manager";
import {TaskDto} from "../dto/TaskDto";
import {PaymentTypeDto} from "../dto/PaymentTypeDto";

@Injectable({
    providedIn: 'root'
})
export class MyappService {

    constructor(private dataService: DataService) {
    }

    // createCustomer(customerDto: CustomerDto): Observable<any> {
    //   console.log("SSSSSSSSSSSSS : ", customerDto )
    //   return this.dataService.request(ENDPOINTSMANAGER.ENDPOINTS.createCustomer, customerDto)
    // }
    createTask(task: TaskDto): Observable<any> {

        return this.dataService.request(ENDPOINTSMANAGER.ENDPOINTS.createTask, task)

    }

    createPaymenttype(paymentTypeDto: PaymentTypeDto): Observable<any> {

        return this.dataService.request(ENDPOINTSMANAGER.ENDPOINTS.createpaymenttype, paymentTypeDto)
    }
}
