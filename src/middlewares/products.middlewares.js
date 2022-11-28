import { productSchema } from "../models/product.model.js";

export function queryValidation(req, res, next) {
  const search = req.query.search;
  if (search) {
    res.locals.search = search;
  }
  next();
}

export function adminValidation(req, res, next) {
  const { user } = res.locals;
  if (!user.isAdmin) {
    res.sendStatus(401);
  }
  next();
}

export function schemaValidation(req, res, next) {
  const { error } = productSchema.validate(req.body, { abortEarly: false });
  if (error) {
    const errors = error.details.map((detail) => detail.message);
    res.status(400).send(errors);
  }
  next();
}
