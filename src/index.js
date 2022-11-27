import express from "express";
import cors from "cors";
import userRoutes from "./routes/user.routes.js";
import productRouter from "./routes/product.routes.js";
import cartRouter from "./routes/cart.routes.js";
import orderRouter from "./routes/order.routes.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(userRoutes);
app.use(productRouter);
app.use(cartRouter);
app.use(orderRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Running in port ${PORT}`));
