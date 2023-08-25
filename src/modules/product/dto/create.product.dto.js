import Joi from "joi";

export const createProductBto = Joi.object({
          name: Joi.string().required(),
          price: Joi.number().optional().default(0)
})

