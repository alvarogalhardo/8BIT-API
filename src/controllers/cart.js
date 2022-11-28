import { ObjectId } from "mongodb";
import { cartCollection } from "../database/8BIT_DB.js";

export async function createCart(req, res) {
  const { id } = req.params;
  try {
    await cartCollection.insertOne({ userId: new ObjectId(id), ...req.body });
    res.sendStatus(201);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}

export async function updateCart(req, res) {
  const { id } = req.params;
  try {
    const updatedCart = await cartCollection.updateOne(
      { userId: new ObjectId(id) },
      {
        $set: req.body,
      }
    );
    res.status(200).send(updatedCart);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}

export async function getCart(req, res) {
  const { id } = req.params;
  try {
    const userCart = await cartCollection.findOne({ userId: new ObjectId(id) });
    res.status(200).send(userCart);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}

export async function deleteCart(req, res) {
  const { id } = req.params;
  try {
    await cartCollection.deleteOne({ userId: new ObjectId(id) });
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}
