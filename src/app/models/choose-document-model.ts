export class ChooseDocumentModel {
    constructor(
        public id: number = 0,
        public title: string = '',
        public documentType: string = '',
        public documentItems: DocumentItem[] = []
    ) {}
}

export class DocumentItem {
    constructor(
        public id: number = 0,
        public avatar: string = '',
        public titleSim: string = '',
        public showIcon: boolean
    ) {}
}
