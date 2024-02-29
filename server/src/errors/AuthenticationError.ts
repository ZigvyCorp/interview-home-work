import { CustomError } from "../utils/CustomError";

export class AuthenticationError extends CustomError {
  statusCode = 401;
  constructor(public message: string) {
    super(message);
    Object.setPrototypeOf(this, AuthenticationError.prototype);
  }
  serialize() {
    return { status_code: this.statusCode, message: this.message };
  }
}
