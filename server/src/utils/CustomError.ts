export abstract class CustomError extends Error {
  constructor(public message: string) {
    super(message);
    Object.setPrototypeOf(this, CustomError.prototype);
  }
  abstract statusCode: number;
  abstract serialize(): { status_code: number; message: string };
}
