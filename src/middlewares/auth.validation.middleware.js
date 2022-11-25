import { sessionsCollection, usersCollection } from "../database/8BIT_DB.js";
import { ObjectId } from "mongodb";

export async function authValidation(req, res, next) {
  const { authorization } = req.headers;
  const token = authorization?.replace("Bearer ", "");
  if (!token) return res.sendStatus(401);
  try {
    const session = await sessionsCollection.findOne({ token });
    if (!session) return res.sendStatus(401);
    const user = await usersCollection.findOne({
      _id: new ObjectId(session?.userId),
    });
    res.locals.user = user;
    next();
  } catch (err) {
    console.log(err);
    return res.sendStatus(500);
  }
}
