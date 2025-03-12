import express from "express";
import cors from "cors";
import userRoutes from "./routes/user.routes";
import productRoutes from "./routes/product.routes";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/users", userRoutes);
app.use("/products", productRoutes);

export default app;