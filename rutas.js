const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.render("views/index.ejs");
});

router.get("/login", (req, res) => {
  res.render("views/login.ejs");
});

module.exports = router;
