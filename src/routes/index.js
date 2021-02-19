const express = require("express");
const router = express.Router();

//Routes requirements
const indexController = require("../controllers/index");
const dashboardController = require("../controllers/dashboard");
const mainProjectdController = require("../controllers/mainProject");
const otherProjectdController = require("../controllers/otherProject");
const resumeController = require("../controllers/resume");
const transcriptController = require("../controllers/transcript")

//Restful routes 
//https://miro.medium.com/max/2628/1*M0hdLsgbzelOFuq-1BVH-g.png

//Index
router.get("/", indexController.getHome);

//Dashboard
router.get("/dashboard", dashboardController.getDashboard);

//Main projects
router.get("/add-main-project", mainProjectdController.getAddMainProject);
router.post("/add-main-project", mainProjectdController.postAddMainProject);
router.get("/edit-main-project/:id", mainProjectdController.getEditMainProject);
router.post("/edit-main-project/:id", mainProjectdController.postEditMainProject);
router.get("/delete-main-project/:id", mainProjectdController.getDeleteMainProject);

//Other projects
router.get("/add-other-project", otherProjectdController.getAddOtherProject);
router.post("/add-other-project", otherProjectdController.postAddOtherProject);
router.get("/edit-other-project/:id", otherProjectdController.getEditOtherProject);
router.post("/edit-other-project/:id", otherProjectdController.postEditOtherProject);
router.get("/delete-other-project/:id", otherProjectdController.getDeleteOtherProject);

//Resume
router.get("/add-resume", resumeController.getAddResume);
router.post("/add-resume", resumeController.postAddResume);

//Transcript
router.get("/add-transcript", transcriptController.getAddTranscript);
router.post("/add-transcript", transcriptController.postAddTranscript);

module.exports = router;