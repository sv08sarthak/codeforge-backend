const express = require("express");
const router = express.Router();

// GET all users
router.get("/users", (req, res) => {
  res.json({
    message: "User API working",
    users: []
  });
});

module.exports = router;
