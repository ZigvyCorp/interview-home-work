class GeneralError extends Error {
  constructor(message: string) {
    super();
    this.message = message;
  }
}

class BadRequest extends GeneralError {}

export { GeneralError, BadRequest };
