const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const cookieParser = require("cookie-parser");
const captainRoutes = require("./routes/ride.routes.js");
const { connectToDb } = require("./db/db.js");
const RabbitMQ = require('./service/rabbit.js')

RabbitMQ.connect()

connectToDb();

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.use("/", captainRoutes);

module.exports = app;
