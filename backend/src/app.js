const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

// Load environment variables from .env
dotenv.config();

const app = express();

// Enable CORS so the React frontend can call this API
app.use(cors());
app.use(express.json());

// Health-check route
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", message: "Backend is running" });
});

module.exports = app;
