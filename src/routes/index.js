const express = require("express");
const app = require("../app");
const router = express.Router();
const { db } = require("../database");


//Main routes of the app
router.get("/", (req, res) => {
    //Pass a local variable to the view index: true
    res.render("index");
});

module.exports = router;