const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const cookieParser = require("cookie-parser");
const userRoutes = require("./routes/user.routes");
const { connectToDb } = require("./db/db");
const rabbitMq = require("./service/rabbit");

rabbitMq.connect();
connectToDb();

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.use("/", userRoutes);

module.exports = app;
