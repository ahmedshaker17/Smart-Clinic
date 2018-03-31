export class CustomResponse {
    public ErrorMessage: string;
    public RequestCode: number;
    public RequestSucceeded: boolean;
    public UserMessage: string;
    public Token: string;
    constructor(errorMessage: string, requestCode: number, requestSucceeded: boolean, userMessage: string, token: string) {
        this.UserMessage = userMessage;
        this.RequestCode = requestCode;
        this.RequestSucceeded = requestSucceeded;
        this.ErrorMessage = errorMessage;
        this.Token = token;

    }

}
export class PhysicianResponse extends CustomResponse {
    public SyndicateIDImgUrl: string;
    public PhysicianID: number;
    public IsActivated : boolean;
}