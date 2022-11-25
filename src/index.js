import express from "express";
import cors from "cors";
import userRoutes from "./routes/user.routes.js";
import productRouter from "./routes/product.routes.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(userRoutes);
app.use(productRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Running in port ${PORT}`));
