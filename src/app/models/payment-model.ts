export class PaymentModel {
    constructor(
        public id: number = 0,
        public paymentName: string = '',
        public paymentImg: string = '',
        public paymentType: number = 0
    ) {
    }
}
