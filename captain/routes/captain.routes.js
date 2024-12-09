const express = require("express");
const captainController = require("../controller/captain.controller");
const authMiddleware = require("../middleware/authMiddleWare");

const app = express.Router();
app.use("/register", captainController.register);
app.post("/login", captainController.login);
app.get("/logout", captainController.logout);
app.get("/profile", authMiddleware.captainAuth, captainController.profile);
app.patch(
  "/avilability",
  authMiddleware.captainAuth,
  captainController.toggleAvailability
);
app.get(
  "/new-ride",
  authMiddleware.captainAuth,
  captainController.waitForNewRide
);
module.exports = app;
