import * as Joi from 'joi';

export const usersUpdateVal = Joi.object({
  full_name: Joi.string().required(),
  lang: Joi.string().required(),
  phone_number: Joi.string(),
  mobile_id: Joi.string(),
  role: Joi.string(),
  notifications: Joi.boolean(),
  dark_mode: Joi.boolean(),
  facts: Joi.array().items(Joi.string()),
});
