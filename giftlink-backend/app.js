require("dotenv").config();
const express = require("express");
const cors = require("cors");
const giftRoutes = require("./routes/giftRoutes");
const authRoutes = require("./routes/authRoutes");
const searchRoutes = require("./routes/searchRoutes");
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/gifts", giftRoutes);
app.use("/api/auth", authRoutes);
// Search routes
app.use("/api/search", searchRoutes);
const PORT = process.env.PORT || 3060;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
