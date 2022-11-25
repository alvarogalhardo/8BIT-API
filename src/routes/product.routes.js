import { Router } from "express";
import { authValidation } from "../middlewares/auth.validation.middleware.js";
import { postProduct } from "../controllers/product.js";

const productRouter = Router();

productRouter.get("/products",authValidation)
productRouter.post("/products",postProduct)

export default productRouter;