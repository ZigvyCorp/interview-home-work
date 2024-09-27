export class CoreException {
    public message: string;
    public statusCode: number;
    constructor(statusCode: number, message: string) {
        this.statusCode = statusCode;
        this.message = message;
    }
}