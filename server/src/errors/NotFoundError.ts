import { CustomError } from "../utils/CustomError";

export class NotFoundError extends CustomError {
  statusCode = 404;
  constructor(public message: string) {
    super(message);
    Object.setPrototypeOf(this, NotFoundError.prototype);
  }
  serialize() {
    return { status_code: this.statusCode, message: this.message };
  }
}
