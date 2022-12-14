import { authValidation } from "../middlewares/auth.validation.middleware.js";
import {
  cartExists,
  schemaValidation,
} from "../middlewares/cart.middlewares.js";
import {
  createCart,
  updateCart,
  getCart,
  deleteCart,
} from "../controllers/cart.js";
import { Router } from "express";

const cartRouter = Router();
cartRouter.use(authValidation);
cartRouter.post("/cart/:id", schemaValidation, cartExists, createCart);
cartRouter.put("/cart/:id", schemaValidation, updateCart);
cartRouter.get("/cart/:id", getCart);
cartRouter.delete("/cart/:id", deleteCart);

export default cartRouter;
