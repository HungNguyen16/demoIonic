export class NotificationModel {
    constructor(
        public id: number = 0,
        public notiAvatar: string = '',
        public notiTitle: string = '',
        public notiTime: string = '',
        public isOnline: boolean,
        public notiTitleItems: Notification[] = []
    ) {}
}
export class Notification {
    constructor(
        public id: number = 0,
        public title: string = '',
        public price: string = '',
        public score: string = ''
    ) { }
}
