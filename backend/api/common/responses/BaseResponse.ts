export class BaseResponse {
    private message: string;
    private statusCode: number;
    private data?: any;
    private error?: string;
    
    constructor(statusCode: number, message: string, data?: object, error?: string) {
        this.message = message;
        this.statusCode = statusCode;
        this.data = data;
        this.error = error;
    }
}