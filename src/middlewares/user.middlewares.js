import { userSchema } from "../models/user.model.js";
import { usersCollection, sessionsCollection } from "../database/8BIT_DB.js";
import bcrypt from "bcrypt";

export function userSchemaValidation(req, res, next) {
  const user = req.body;
  const { error } = userSchema.validate(user, { abortEarly: false });
  if (error) {
    const errors = error.details.map((detail) => detail.message);
    return res.status(400).send(errors);
  }
  res.locals.user = user;
  next();
}

export async function signUpValidation(req, res, next) {
  const { user } = res.locals;
  const { email } = user;
  try {
    const exists = await usersCollection.findOne({ email });
    if (exists) return res.status(409).send({ message: "Usuário já existe." });
    next();
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}

export async function signInValidation(req, res, next) {
  const { email, password } = req.body;
  try {
    const user = await usersCollection.findOne({ email });
    if (!user) return res.status(404).send({ message: "Usuário não existe." });
    if (bcrypt.compareSync(password, user.password)) {
      const online = await sessionsCollection.findOne({ userId: user._id });
      if (online)
        return res.status(200).send({ name: user.name, token: online.token });
      res.locals.user = user;
      next();
    } else {
      res.sendStatus(400);
    }
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}
