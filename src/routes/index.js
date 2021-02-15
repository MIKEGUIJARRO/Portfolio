const express = require("express");
const app = require("../app");
const router = express.Router();

//DB and storage requirements
const { projects: projectsDB } = require("../database/database");
const { projects: projectsStorage } = require("../storage/storage");

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
router.get("/dashboard", async (req, res) => {
    const response = await projectsDB.getProjects();
    console.log(response);
    res.render("dashboard", { title: "Dashboard", dashboard: true, dashboardNav: true, loadMain: true });
});

//Add elements
router.get("/add-main-project", (req, res) => {
    res.render("addProject", {
        title: "Add Element",
        addMainElement: true,
        dashboardNav: true,
        loadAddElement: true,
        loadMain: true,
        subtitle: "Main Projects & Work",
        idInfo: "info-main"
    });
});

router.get("/add-project", (req, res) => {
    res.render("addProject", {
        title: "Add Element",
        addElement: true,
        dashboardNav: true,
        loadAddElement: true,
        loadMain: true,
        subtitle: "Other Noteworthy Projects",
        idInfo: "info-others"
    });
});

router.post("/add-main-project", async (req, res) => {
    const data = req.body;
    const filename = req.file.filename;
    const filepath = req.file.path;
    const resStorage = await projectsStorage.uploadFile(filepath);
    const imageURL = resStorage[0].publicUrl();
    const imageId = resStorage[0].id;
    const project = {
        "title": data.title,
        "description": data.description,
        "webpage": data.webpage ? data.webpage : null,
        "github": data.github ? data.github : null,
        "figma:": data.figma ? data.figma : null,
        "technologies": data.technologies ? data.technologies : null,
        "image": {
            "url": imageURL,
            "id": imageId
        }
    }
    console.log("----------------------------------")
    console.log(resStorage[0].publicUrl());

    await projectsDB.addMainProject(project);
    res.redirect("/dashboard");
});

router.post("/add-other-project", async (req, res) => {
    const data = req.body;
    console.log(data);
    const project = {
        "title": data.title,
        "description": data.description,
        "webpage": data.webpage ? data.webpage : null,
        "github": data.github ? data.github : null,
        "figma:": data.figma ? data.figma : null,
        "technologies": data.technologies ? data.technologies : null,
    }
    await projectsDB.addOtherProject(project);
    res.redirect("/dashboard");
});

module.exports = router;