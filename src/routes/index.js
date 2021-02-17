const express = require("express");
const app = require("../app");
const router = express.Router();
const { deleteLocalFile } = require("../lib/util");


//DB and storage requirements
const { projects: projectsDB, documents: documentsDB } = require("../database/database");
const { projects: projectsStorage } = require("../storage/storage");

//Restful routes 
//https://miro.medium.com/max/2628/1*M0hdLsgbzelOFuq-1BVH-g.png

//Main routes of the app
router.get("/", async (req, res) => {
    const resMainProjects = await projectsDB.getMainProjects(false);
    const resOtherProjects = await projectsDB.getOthersProjects(false);
    const resume = await documentsDB.getResume();
    for (const project in resMainProjects) {
        resMainProjects[project]["homePage"] = true;
    }
    for (const project in resOtherProjects) {
        resOtherProjects[project]["homePage"] = true;
    }
    console.log(resume);
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
        resume
    });
});

//Dashboard configuration
router.get("/dashboard", async (req, res) => {
    const resMainProjects = await projectsDB.getMainProjects();
    const resOtherProjects = await projectsDB.getOthersProjects();

    res.render("dashboard", { title: "Dashboard", dashboard: true, dashboardNav: true, loadMain: true, resMainProjects, resOtherProjects });
});

//Add pprojects
router.get("/add-main-project", (req, res) => {
    res.render("addProject", {
        title: "Add Element",
        addMainElement: true,
        dashboardNav: true,
        loadAddElement: true,
        loadMain: true,
        subtitle: "Main Projects & Work",
        idInfo: "info-main",
        urlAction: "/add-main-project"
    });
});

router.get("/add-other-project", (req, res) => {
    res.render("addProject", {
        title: "Add Element",
        addElement: true,
        dashboardNav: true,
        loadAddElement: true,
        loadMain: true,
        subtitle: "Other Noteworthy Projects",
        idInfo: "info-others",
        urlAction: "/add-other-project"
    });
});

router.post("/add-main-project", async (req, res) => {
    try {
        const data = req.body;
        //The current file input is required for all the new main projects
        const imgFile = req.files["image"][0];
        const filepath = imgFile.path;
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
    const project = {
        "title": data.title,
        "description": data.description,
        "webpage": data.webpage ? data.webpage : null,
        "github": data.github ? data.github : null,
        "figma": data.figma ? data.figma : null,
        "technologies": data.technologies ? JSON.parse(data.technologies) : null,
    }
    await projectsDB.addOtherProject(project);
    res.redirect("/dashboard");
});

//Edit projects
router.get("/edit-main-project/:id", async (req, res) => {
    const id = req.params.id;
    const project = await projectsDB.getMainProject(id);
    res.render("editProject", {
        title: "Add Element",
        addMainElement: true,
        dashboardNav: true,
        loadAddElement: true,
        loadMain: true,
        subtitle: "Edit - Main Projects & Work",
        idInfo: "info-main",
        project,
        urlAction: `/edit-main-project/${id}`
    });
});

router.get("/edit-other-project/:id", async (req, res) => {
    const id = req.params.id;
    const project = await projectsDB.getOtherProject(id);
    res.render("editProject", {
        title: "Add Element",
        dashboardNav: true,
        loadAddElement: true,
        loadMain: true,
        subtitle: "Edit - Other Noteworthy Projects",
        idInfo: "info-main",
        project,
        urlAction: `/edit-other-project/${id}`
    });
});

router.post("/edit-main-project/:id", async (req, res) => {
    const data = req.body;
    const id = req.params.id;

    const project = {
        "title": data.title,
        "description": data.description,
        "webpage": data.webpage ? data.webpage : null,
        "github": data.github ? data.github : null,
        "figma": data.figma ? data.figma : null,
        "technologies": data.technologies ? JSON.parse(data.technologies) : null,
    }

    if (req.file) {
        const filepath = req.file.path;
        const resStorage = await projectsStorage.uploadFile(filepath);
        const imageURL = resStorage[0].publicUrl();
        const imageId = resStorage[0].id;
        project["image"] = {
            "url": imageURL,
            "id": imageId,
        };
    }
    await projectsDB.updateMainProject(id, project);
    res.redirect("/dashboard");
});


router.post("/edit-other-project/:id", async (req, res) => {
    const data = req.body;
    const id = req.params.id;

    const project = {
        "title": data.title,
        "description": data.description,
        "webpage": data.webpage ? data.webpage : null,
        "github": data.github ? data.github : null,
        "figma": data.figma ? data.figma : null,
        "technologies": data.technologies ? JSON.parse(data.technologies) : null,
    }
    await projectsDB.updateOtherProject(id, project);
    res.redirect("/dashboard");
});

router.get("/delete-main-project/:id", async (req, res) => {
    const id = req.params.id;
    await projectsDB.deleteMainProject(id);
    res.redirect("/dashboard");
});

router.get("/delete-other-project/:id", async (req, res) => {
    const id = req.params.id;
    await projectsDB.deleteOtherProject(id);
    res.redirect("/dashboard");
});

router.get("/add-resume", (req, res) => {
    res.render("addDocument", {
        title: "Personal Document",
        dashboardNav: true,
        subtitle: "Add a new resume",
        idInfo: "info-resume",
        urlAction: `/add-resume`
    });
});

router.post("/add-resume", async (req, res) => {

    if (req.files) {
        const pdfFile = req.files["pdf"][0];
        const filepath = pdfFile.path;
        const resStorage = await projectsStorage.uploadFile(filepath);
        const docURL = resStorage[0].publicUrl();
        const docId = resStorage[0].id;

        const resume = {
            "url": docURL,
            "id": docId,
        };
        documentsDB.addAndReplaceResume(resume);
        await deleteLocalFile(filepath);
    }
    res.redirect("/dashboard");
});


module.exports = router;