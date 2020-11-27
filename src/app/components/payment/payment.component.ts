import { Component, OnInit } from '@angular/core';
import { PaymentModel } from '../../models/payment-model';
import { PaymentService } from '../../services/payment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
})
export class PaymentComponent implements OnInit {
  payments: PaymentModel[] = [];
  checkIndex = 0;
  constructor(private paymentService: PaymentService) { }

  ngOnInit() {
    this.paymentService.getListPayments().subscribe(res => {
        this.payments = res;
        console.log(this.payments);
    });
  }

}
