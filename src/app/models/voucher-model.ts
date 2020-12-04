export class VoucherModel {
    constructor(
      public id = 0,
      public voucherTitle: string = '',
      public voucherImg: string = '',
      public voucherFood: string = '',
      public price: number,
      public voucherSaleOff = 0,
      public isSaleOff: boolean
    ) { }
}
