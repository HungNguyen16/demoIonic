export class PhoneNumberRegisterModel {
    constructor(
        public id: number = 0,
        public title: string = '',
        public utilityType: string = '',
        public phoneItems: PhoneItems[] = []
    ) {}
}

export class PhoneItems {
    constructor(
        public id: number = 0,
        public phone: string = ''
    ) {}
}
