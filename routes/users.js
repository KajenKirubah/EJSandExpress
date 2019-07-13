const express = require("express");
const mainData = require("./main");
const router = express.Router();

router.get("/users", (req, res, next) => {
  res.render("users", {
    users: mainData.data,
    pageTitle: 'Users',
    path: '/users'
  });
});

module.exports = router;
