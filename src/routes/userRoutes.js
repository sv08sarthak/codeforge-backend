const express = require('express');
const router = express.Router();




//test route

router.get("/hello", (req, res) => {
  res.send("Hello Sarthak----User route working.... Olla");
});


module.exports = router;