import "dotenv/config";
import express from "express";
import giftRoutes from "./routes/giftRoutes.js";
import searchRoutes from "./routes/searchRoutes.js";
const app = express();

app.use(express.json());

app.use("/api/gifts", giftRoutes);
// Search routes
app.use("/api/search", searchRoutes);
const PORT = process.env.PORT || 3060;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});