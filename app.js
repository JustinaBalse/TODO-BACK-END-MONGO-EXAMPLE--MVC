const express = require("express");
const app = express();

const todoRouter = require("./routes/todoRoutes");

// middleware - decode JSON data for POST, PUT, PATCH
app.use(express.json());

app.use("/api/v1/todos", todoRouter);
 
module.exports = app;
