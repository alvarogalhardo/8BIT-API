import { productsCollection } from "../database/8BIT_DB.js";
import { productSchema } from "../models/product.model.js";

export async function postProduct(req, res) {
  const product = req.body;
  const { error } = productSchema.validate(product, { abortEarly: false });
  if (error) {
    const errors = error.details.map((detail) => detail.message);
    res.status(400).send(errors);
  }
  try {
    await productsCollection.insertOne(product);
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}

export async function getProducts(req, res) {
  const category = res.locals.category;
}
