export class RentalContentModel {
    constructor(
        public id: number = 0,
        public categoryName: string = '',
        public categoryType: string = '',
        public categoryItems: RentalContent[] = [],

    ) { }
}

export class RentalContent {
    constructor(
        public id: number = 0,
        public img: string = '',
        public title: string = '',
        public discount: string = '',
        public type: string = '',
        public price: string = ''
    ) { }
}
