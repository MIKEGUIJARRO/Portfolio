const express = require("express");
const app = require("../app");
const router = express.Router();
const { db } = require("../database");


//Main routes of the app
router.get("/", (req, res) => {
    //Pass a local variable to the view index: true
    res.render("index", {
        title: "Mike Guijarro",
        home: true,
        navUser: true,
        loadMain: true,
        footer: true,
        loadMain: true
    });
});

//Dashboard configuration
router.get("/dashboard", (req, res) => {
    res.render("dashboard", { title: "Dashboard", dashboard: true, dashboardNav: true, loadMain: true });
});

//Add elements
router.get("/add-main-element", (req, res) => {
    res.render("addElement", {
        title: "Add Element",
        addMainElement: true,
        dashboardNav: true,
        loadAddElement: true,
        loadMain: true,
        subtitle: "Main Projects & Work",
        idInfo: "info-main"
    });
});

router.get("/add-element", (req, res) => {
    res.render("addElement", {
        title: "Add Element",
        addElement: true,
        dashboardNav: true,
        loadAddElement: true,
        loadMain: true,
        subtitle: "Other Noteworthy Projects",
        idInfo: "info-others"
    });
});

router.post("/add-element", async (req, res) => {
    const data = req.body;
    console.log(data);
    res.redirect("/dashboard");
});


module.exports = router;