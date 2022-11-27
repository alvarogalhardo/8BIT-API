import { Router } from "express";
import { authValidation } from "../middlewares/auth.validation.middleware.js";
import {
  postProduct,
  getProducts,
  getProductById,
} from "../controllers/product.js";
import {
  adminValidation,
  queryValidation,
} from "../middlewares/products.middlewares.js";

const productRouter = Router();

productRouter.use(authValidation);
productRouter.post("/products", adminValidation, postProduct);
productRouter.get("/products/:id", getProductById);
productRouter.get("/products", queryValidation, getProducts);

export default productRouter;
