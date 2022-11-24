import express from "express";
import cors from "cors";
import userRoutes from "./routes/user.routes.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(userRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Running in port ${PORT}`));
