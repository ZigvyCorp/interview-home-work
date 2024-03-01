import { Joi } from "express-validation";

const ruleCreateOrUpdate = Joi.object({
  search: Joi.string().allow("", null),
  page: Joi.number().default(1),
  limit: Joi.number().default(10),
}).unknown();

export default {
  filter: {
    query: ruleCreateOrUpdate,
  },
  create: {
    body: ruleCreateOrUpdate,
  },
  update: {
    body: ruleCreateOrUpdate,
  },
};
