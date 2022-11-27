import { orderSchema } from "../models/order.model.js";

export function schemaValidation(req, res, next) {
    const { error } = orderSchema.validate(req.body, { abortEarly: false });
    if (error) {
      const errors = error.details.map((detail) => detail.message);
      res.status(400).send(errors);
    }
    next();
  }