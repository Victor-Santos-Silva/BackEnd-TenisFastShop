const express = require("express");
const routes = require("./routes");
require("dotenv").config();

const app = express();
app.use(express.json());

// Rotas
app.use("/api", routes);

// Middleware de erros global
const errorHandler = require("./middlewares/errorHandler");
app.use(errorHandler);

module.exports = app;
