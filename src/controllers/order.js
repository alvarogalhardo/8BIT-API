import { cartCollection, orderCollection } from "../database/8BIT_DB.js";
import { ObjectId } from "mongodb";

export async function createOrder(req, res) {
  const { _id } = res.locals.user;
  try {
    const cart = await cartCollection.findOne({ userId: _id });
    console.log(cart);
    await orderCollection.insertOne({
      userId: new ObjectId(_id),
      ...cart.products,
      ...req.body,
      status: "Pending",
    });
    await cartCollection.deleteOne({ userId: _id });
    res.sendStatus(201);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}

export async function getOrder(req, res) {
  const { _id } = res.locals.user;
  try {
    const orders = await orderCollection
      .find({ userId: ObjectId(_id) })
      .toArray();
    res.status(200).send(orders);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}
