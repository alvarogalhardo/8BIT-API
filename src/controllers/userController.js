import bcrypt from "bcrypt";
import { v4 as uuidV4 } from "uuid";
import { usersCollection } from "../database/8BIT_DB.js";

export async function signUp(req,res) {
  const { user } = res.locals;
  const passwordHash = bcrypt.hashSync(user.password, 10);
  try {
    await usersCollection.insertOne({ ...user, password: passwordHash });
    res.sendStatus(201);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}
