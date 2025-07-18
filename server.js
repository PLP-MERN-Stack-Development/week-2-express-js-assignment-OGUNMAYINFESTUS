const express = require("express");

const bodyParser = require("body-parser");
const productRoutes = require("./src/routes/productRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Routes
app.use("/", (req, res) => {
  res.send(
    "Welcome to the Product API! Go to /api/products to see all products."
  );
});
app.use("/api/products", productRoutes);

// Error Handler
const errorHandler = require("./src/middleware/errorHandler");
app.use(errorHandler);

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

module.exports = app;
