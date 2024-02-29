import { CustomError } from "../utils/CustomError";

export class ConflictError extends CustomError {
  statusCode = 409;
  constructor(public message: string) {
    super(message);
    Object.setPrototypeOf(this, ConflictError.prototype);
  }
  serialize() {
    return { status_code: this.statusCode, message: this.message };
  }
}
