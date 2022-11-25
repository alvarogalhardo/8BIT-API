import joi from "joi";

export const productSchema = joi.object({
  title: joi.string().required(),
  desc: joi.string().required(),
  img: joi.string().uri().required(),
  categories: joi.array().min(1).items(joi.string().required()).required(),
  price: joi.number().required(),
});
