import Joi from "joi";

export const createTransaction = Joi.object({
    value: Joi.number().required(),
    description: Joi.string().required().min(3),
    type: Joi.string().required().valid("input", "output"),
    userID: Joi.object(),
    createAt: Joi.string(),
});