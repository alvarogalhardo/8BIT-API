import { ObjectId } from "mongodb";
import { cartCollection } from "../database/8BIT_DB.js";
import { cartSchema } from "../models/cart.model.js";

export function schemaValidation(req, res, next) {
  const { error } = cartSchema.validate(req.body, { abortEarly: false });
  if (error) {
    const errors = error.details.map((detail) => detail.message);
    res.status(400).send(errors);
  }
  next();
}

export async function cartExists(req, res, next) {
    const {id} = req.params;
  try {
    const exists = await cartCollection.findOne({ userId: ObjectId(id) });
    if (exists) {
      return res.status(200).send(exists);
    }
    next();
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}
