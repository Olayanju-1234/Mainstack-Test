import type { Express } from "express";
import authRoutes from "@routes/auth.routes";
import productRoutes from "@routes/product.routes";


export default (app: Express) => {
  app.use("/api/v1/auth", authRoutes);
  app.use("/api/v1/products", productRoutes);
};

