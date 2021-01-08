import { ResponseModel } from './response-model';

export class AccessTokenResponse {

    constructor(
        public Token: string,
        public ExpiresIn: number,
        public EndDate: Date = null
    ) {
    }
}

export class LoginErrorResponse {

    constructor(
        public Code: string,
        public Description: string) {
    }
}

export class RefreshTokenRequest {
    constructor(
        public AccessToken: string = '',
        public RefreshToken: string = '') {
    }
}

export class LoginModel extends ResponseModel {
    constructor(
        public UserName: string = '',
        public FbId: string = '',
        public PassWord: string = '',
        public AccessToken: string = '',
        public RememberMe: boolean = false,
        public AccountGoogle: boolean = false,
        public AccountFacebook: boolean = false,
        public IsAutoLogin = false) {
        super();
    }
}
