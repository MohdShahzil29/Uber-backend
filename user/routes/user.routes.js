const express = require("express");
const userController = require("../controller/user.controller");
const authMiddleware = require("../middleware/authMiddleWare");

const app = express.Router();
app.use("/register", userController.register);
app.post("/login", userController.login);
app.get("/logout", userController.logout);
app.get("/profile", authMiddleware.userAuth, userController.profile);
// app.get("/accepted-ride", authMiddleware.userAuth, userController.acceptedRide);

module.exports = app;
