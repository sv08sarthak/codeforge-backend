const express = require("express");
const router = express.Router();

// test route
router.get("/", (req, res) => {
  res.send("User route working");
});

// custom test route
router.get("/hello", (req, res) => {
  res.send("Hello Sarthak");
});

module.exports = router;