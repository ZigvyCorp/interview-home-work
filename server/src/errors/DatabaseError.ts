import { CustomError } from "../utils/CustomError";

export class DatabaseError extends CustomError {
  statusCode = 500;
  constructor() {
    super("Internal Server Error");
    Object.setPrototypeOf(this, DatabaseError.prototype);
  }
  serialize() {
    return { status_code: this.statusCode, message: "Internal Server Error" };
  }
}
