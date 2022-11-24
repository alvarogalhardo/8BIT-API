import { Router } from "express";
import { signUp } from "../controllers/userController.js";
import {
  signUpValidation,
  userSchemaValidation,
} from "../middlewares/auth.validation.middleware.js";

const userRoutes = Router();

userRoutes.post("/sign-up", userSchemaValidation, signUpValidation, signUp);
userRoutes.post("/sign-in");

export default userRoutes;
