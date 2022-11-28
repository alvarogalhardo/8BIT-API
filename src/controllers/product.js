import { ObjectId } from "mongodb";
import { productsCollection } from "../database/8BIT_DB.js";

export async function postProduct(req, res) {
  const product = req.body;
  try {
    await productsCollection.insertOne(product);
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}

export async function getProducts(req, res) {
  const search = String(res.locals.search);
  search.toUpperCase();
  const limit = parseInt(req.query.limit);
  let products;
  try {
    if (search) {
      products = await productsCollection
        .find({
          $or: [
            { title: { $regex: search, $options: "i" } },
            { desc: { $regex: search, $options: "i" } },
            { categories: { $in: [search] } },
          ],
        })
        .limit(limit)
        .toArray();
      res.status(200).send(products);
    } else {
      products = await productsCollection
        .find()
        .limit(limit)
        .sort({ _id: 1 })
        .toArray();
      res.status(200).send(products);
    }
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}

export async function getProductById(req, res) {
  try {
    const product = await productsCollection
      .find({
        _id: new ObjectId(req.params.id),
      })
      .toArray();
    res.status(200).send(product);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}
