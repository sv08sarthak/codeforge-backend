const express = require("express");
const router = express.Router();



const userController = require("../controllers/user.controller");



// test route
router.get("/", (req, res) => {
  res.send("User route working");
});

//controller route
router.get("/hello", userController.getHello);
router.get("/profile", userController.getProfile);
router.get("/status", userController.getStatus);

router.get("/:id", userController.getUserById);
module.exports = router;