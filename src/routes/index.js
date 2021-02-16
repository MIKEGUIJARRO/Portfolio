const express = require("express");
const app = require("../app");
const router = express.Router();
const { deleteLocalFile } = require("../lib/util");
let colors = require('colors');


//DB and storage requirements
const { projects: projectsDB } = require("../database/database");
const { projects: projectsStorage } = require("../storage/storage");

//Main routes of the app
router.get("/", async (req, res) => {
    const resMainProjects = await projectsDB.getMainProjects();
    const resOtherProjects = await projectsDB.getOthersProjects();
    console.log(resMainProjects);
    
    //Pass a local variable to the view index: true
    res.render("index", {
        title: "Mike Guijarro",
        home: true,
        navUser: true,
        loadMain: true,
        footer: true,
        loadMain: true,
        resMainProjects,
        resOtherProjects,
    });
});

//Dashboard configuration
router.get("/dashboard", async (req, res) => {
    const resMainProjects = await projectsDB.getMainProjects();
    const resOtherProjects = await projectsDB.getOthersProjects();
    res.render("dashboard", { title: "Dashboard", dashboard: true, dashboardNav: true, loadMain: true, resMainProjects, resOtherProjects });
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
    console.log(colors.green("Body"));
    console.log(req.body);
    try {
        const data = req.body;
        const filepath = req.file.path;
        const resStorage = await projectsStorage.uploadFile(filepath);
        const imageURL = resStorage[0].publicUrl();
        const imageId = resStorage[0].id;
        const project = {
            "title": data.title,
            "description": data.description,
            "webpage": data.webpage ? data.webpage : null,
            "github": data.github ? data.github : null,
            "figma": data.figma ? data.figma : null,
            "technologies": data.technologies ? JSON.parse(data.technologies) : null,
            "image": {
                "url": imageURL,
                "id": imageId,
            }
        }
        await deleteLocalFile(filepath);
        await projectsDB.addMainProject(project);
    } catch (e) {
        console.log(e);
    }
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
        "technologies": data.technologies ? JSON.parse(data.technologies) : null,
    }
    await projectsDB.addOtherProject(project);
    res.redirect("/dashboard");
});

module.exports = router;