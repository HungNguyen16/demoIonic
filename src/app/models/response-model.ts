export class ResponseModel {
    constructor(
      public  IsError = false,
      public  Error = '',
      public Errors: string[] = []
    ) {
  }
}
