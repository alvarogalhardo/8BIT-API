import joi from "joi";

export const cartSchema = joi.object({
  userId: joi.string().required(),
  products: joi
    .array()
    .min(1)
    .items(
      joi.object({
        productId: joi.string().required(),
        quantity: joi.number().default(1),
      })
    ),
});
