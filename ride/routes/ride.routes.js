const express = require("express");
const authMiddleware = require("../middleware/auth.middleware");
const rideController = require("../controller/ride.controller");

const app = express.Router();
app.post("/create-ride", authMiddleware.userAuth, rideController.createRide);
app.put(
  "/accept-ride",
  authMiddleware.captainAuth,
  rideController.acceptRide
);

module.exports = app;
