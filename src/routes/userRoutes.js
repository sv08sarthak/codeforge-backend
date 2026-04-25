const express = require("express");
const router = express.Router();



const userController = require("../controllers/user.controller");

const { dbTest } = require("../controllers/user.controller");


// FIRST — specific routes
router.post("/create", userController.createUser);




// test route


router.get("/", (req, res) => {
  res.send("User route working");
});

//controller route
router.get("/db-test", dbTest);  //added on day 4

router.get("/hello", userController.getHello);
router.get("/profile", userController.getProfile);
router.get("/status", userController.getStatus);

router.get("/:id", userController.getUserById);
module.exports = router;