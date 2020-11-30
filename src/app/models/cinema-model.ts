
export class CinemaModel {
    constructor(
        public id: number = 0,
        public categoryName: string = '',
        public categoryType: string = '',
        public categoryItems: Movie[] = [],

    ) { }
}

export class Movie {
    constructor(
        public id: number = 0,
        public img: string = '',
        public title: string = '',
        public type: string = '',
        public isHome: boolean = false,
        public isPlaylist: boolean = false

    ) { }
}
