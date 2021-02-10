const express = require("express");
const app = require("../app");
const router = express.Router();
const { db } = require("../database");


//Main routes of the app
router.get("/", (req, res) => {
    //Pass a local variable to the view index: true
    res.render("index", {title: "Mike Guijarro", home:true, navUser: true, footer: true});
});

//Dashboard configuration
router.get("/dashboard", (req, res) => {
    res.render("dashboard", {title: "Dashboard", dashboard: true });
});

module.exports = router;