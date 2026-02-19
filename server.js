require("dotenv").config();
const express   = require("express");
const cors      = require("cors");
const connectDB = require("./config/db");

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use("/", require("./routes/predictionRoutes"));

app.get("/health", (req, res) => res.json({ status: "Node server running" }));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀  Express running on http://localhost:${PORT}`));