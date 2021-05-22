const Ajv = require("ajv");

const validate =
  (schemas = {}) =>
  (req, res, next) => {
    const ajv = new Ajv({ allErrors: true });
    const requestPropsToValidate = Object.keys(schemas);
    let errors = [];
    
    for (let i = 0; i < requestPropsToValidate.length; i++) {
        const requestPropName = requestPropsToValidate[i];
        const schema = schemas[requestPropName];
        const data = req[requestPropName];
        ajv.validate(schema, data);
        console.log(ajv.errors);
      if (ajv.errors) {
        errors = [
          ...errors,
          ajv.errorsText(ajv.errors, { dataVar: requestPropName }),
        ];
      }
    }
    if (errors.length) {
        res.status(400).send({message:'Schema validation failed',errors})
    }
    return next();
  };

module.exports = validate;
