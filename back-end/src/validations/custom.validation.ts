import Joi from 'joi';

const queryListValidation = {
  body: Joi.object().keys({
    textSearch: Joi.string().optional().allow(''),
    paging: Joi.object().optional().keys({
      skip: Joi.number().required(),
      limit: Joi.number().required(),
    }),
  }),
};
export const customValidation = { queryListValidation };
