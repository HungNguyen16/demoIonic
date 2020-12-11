
export class Photo {
    constructor(
        public id: number = 0,
        public filePath: string = '',
        public webviewPath: string = ''
    ) {
    }
}
export class PhotoService {
    public photos: Photo[] = [];
}
