import { Router } from "express";
import { authValidation } from "../middlewares/auth.validation.middleware.js";
import { postProduct } from "../controllers/product.js";
import { adminValidation, queryValidation } from "../middlewares/products.middlewares.js";

const productRouter = Router();
productRouter.use(authValidation)

// productRouter.get("/products",queryValidation, getProducts)
productRouter.post("/products",adminValidation,postProduct);

export default productRouter;