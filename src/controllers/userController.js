import bcrypt from "bcrypt";
import { v4 as uuidV4 } from "uuid";
import { sessionsCollection, usersCollection } from "../database/8BIT_DB.js";

export async function signUp(req, res) {
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

export async function signIn(req, res) {
  const { user } = res.locals;
  const token = uuidV4();
  try {
    await sessionsCollection.insertOne({ userId: user._id, token });
    res.status(200).send({ name: user.name, token });
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}
