const express = require("express");
const router = express.Router();



const userController = require("../controllers/user.controller");

const validateUser = require("../middlewares/validateUser");

const { dbTest } = require("../controllers/user.controller");


// FIRST — specific routes -- this is route
router.post("/create", validateUser, userController.createUser);





//controller route
router.get("/db-test", dbTest);  //added on day 4

router.get("/hello", userController.getHello);
router.get("/profile", userController.getProfile);
router.get("/status", userController.getStatus);

router.get("/:id", userController.getUserById);

router.get("/", userController.getAllUsers); // added on day 6


module.exports = router;