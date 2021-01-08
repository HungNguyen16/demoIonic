export class CustomerRegisterModel {
    constructor(
        public Email: string = '',
        public FirstName: string = '',
        public LastName: string = '',
        public Password: string = '',
    ) {}
}
