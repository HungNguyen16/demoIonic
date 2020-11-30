
export class CategoryModel {
    constructor(
        public id: number = 0,
        public categoryName: string = '',
        public categoryType: string = '',
        public categoryItems: SubCategory[] = [],

    ) { }
}

export class SubCategory {
    constructor(
        public id: number = 0,
        public categoryId: number = 0,
        public subName: string = '',
        public subType: string = '',
        public subItems: Mockup[] = []

    ) { }
}

export class Mockup {
    constructor(
        public id: number = 0,
        public subCategoryId: number = 0,
        public img: string = '',
        public title: string = '',
        public type: string = '',
        public isHome: boolean = false,
        public isPlaylist: boolean = false

    ) { }
}
