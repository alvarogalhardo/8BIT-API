import { Router } from "express";
import { createOrder, getOrder } from "../controllers/order.js";
import { schemaValidation } from "../middlewares/order.middlewares.js";
import { authValidation } from "../middlewares/auth.validation.middleware.js";

const orderRouter = Router();
orderRouter.use(authValidation);
orderRouter.post("/order", schemaValidation, createOrder);
orderRouter.get("/order", getOrder);

export default orderRouter;
