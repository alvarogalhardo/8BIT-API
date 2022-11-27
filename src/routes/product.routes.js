import { Router } from "express";
import { authValidation } from "../middlewares/auth.validation.middleware.js";
import {
  postProduct,
  searchProducts,
  getProducts,
} from "../controllers/product.js";
import {
  adminValidation,
  queryValidation,
} from "../middlewares/products.middlewares.js";

const productRouter = Router();

productRouter.use(authValidation);
productRouter.get("/products/search", queryValidation, searchProducts);
productRouter.post("/products", adminValidation, postProduct);
productRouter.get("/products", getProducts);

export default productRouter;
