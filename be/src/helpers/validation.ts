import Ajv, { ErrorObject, JSONSchemaType } from "ajv";
import ajvFormats from "ajv-formats";
import { BadRequest } from "./error";

export class ValidationService {
  private ajv: Ajv;
  constructor() {
    this.ajv = new Ajv({ coerceTypes: true, removeAdditional: "all" });
    ajvFormats(this.ajv, { mode: "full" });
  }

  validate<T>(schema: JSONSchemaType<T>, data: any) {
    const validate = this.ajv.compile(schema);
    if (this.ajv.validate(schema, data)) {
      return data as T;
    } else {
      if (!validate.errors) {
        throw new BadRequest("Something went wrong");
      }
      throw new BadRequest(validate.errors[0].message || "");
    }
  }
}

export default new ValidationService();
