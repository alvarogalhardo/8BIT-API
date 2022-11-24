import { Router } from "express";
import { signIn, signUp } from "../controllers/userController.js";
import {
  signInValidation,
  signUpValidation,
  userSchemaValidation,
} from "../middlewares/auth.validation.middleware.js";

const userRoutes = Router();

userRoutes.post("/sign-up", userSchemaValidation, signUpValidation, signUp);
userRoutes.post("/sign-in", signInValidation, signIn);

export default userRoutes;
