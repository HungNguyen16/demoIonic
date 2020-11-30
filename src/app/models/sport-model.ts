
export class SportModel {
    constructor(
        public id: number = 0,
        public categoryName: string = '',
        public categoryType: string = '',
        public categoryItems: Sport[] = [],

    ) { }
}

export class Sport {
    constructor(
        public id: number = 0,
        public img: string = '',
        public title: string = '',
        public type: string = '',
        public isHome: boolean = false,
        public isPlaylist: boolean = false

    ) { }
}
