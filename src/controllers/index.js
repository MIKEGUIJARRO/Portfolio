//DB and storage requirements
const { projects: projectsDB, documents: documentsDB } = require("../database/database");

module.exports.getHome = async (req, res) => {
    const resMainProjects = await projectsDB.getMainProjects(false);
    const resOtherProjects = await projectsDB.getOthersProjects(false);
    const resume = await documentsDB.getResume();
    const transcript = await documentsDB.getTranscript();

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
        resume,
        transcript,
    });
};