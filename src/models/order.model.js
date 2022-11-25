import joi from "joi";

export const orderSchema = joi.object({
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
    adress: joi.object().required(),
    status: joi.string().valid("Pending","In transit","Delivered").default("Pending")
});
