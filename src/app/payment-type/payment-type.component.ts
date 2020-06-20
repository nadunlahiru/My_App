import {Component, OnInit} from '@angular/core';
import {PaymentTypeDto} from "../core/dto/PaymentTypeDto";
import {MyappService} from "../core/services/myapp.service";

@Component({
    selector: 'app-payment-type',
    templateUrl: './payment-type.component.html',
    styleUrls: ['./payment-type.component.scss']
})
export class PaymentTypeComponent implements OnInit {
    showtable2: any;
    showtable1: any;
    paymentTypeDto: PaymentTypeDto = new PaymentTypeDto();
    type: any;

    constructor(private myappService: MyappService) {
    }

    ngOnInit() {
        this.paymentTypeDto.condition = "";
    }


    addPaymenttype(paymentTypeDto: PaymentTypeDto) {

        console.log(paymentTypeDto);
        this.myappService.createPaymenttype(paymentTypeDto).subscribe(data => {
            console.log(data);
        })

    }
}
