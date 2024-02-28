const z = require("zod");

const emailValidation =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const dateValidation = /^\d{4}-\d{2}-\d{2}$/


const stringRequired = z.string({
    required_error: `Field is  is required.`,
    invalid_type_error: `Value must be a string.`,
})

const emailRequired = z.string().email({
    message: "Invalid email"
})


module.exports = {
    emailValidation,
    dateValidation,
    stringRequired,
    emailRequired
};

