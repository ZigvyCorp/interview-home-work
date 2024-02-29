import { CustomError } from "../utils/CustomError";

export class BadRequestError extends CustomError {
  statusCode = 400;
  constructor(public message: string) {
    super(message);
    Object.setPrototypeOf(this, BadRequestError.prototype);
  }
  serialize() {
    return { status_code: this.statusCode, message: this.message };
  }
}
