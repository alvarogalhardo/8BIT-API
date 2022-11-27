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

export async function searchProducts(req, res) {
  const { search } = res.locals;
  let products;
  try {
    if (search) {
      products = await productsCollection
        .find({
          $or: [
            { catergories: { $in: [search] } },
            { title: { $regex: search, $options: "i" } },
            { desc: { $regex: search, $options: "i" } },
          ],
        })
        .toArray();
      res.status(200).send(products);
    } else {
      products = await productsCollection
        .find()
        .limit(10)
        .toArray();
      res.status(200).send(products);
    }
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}

export async function getProducts(req, res) {
  
}
