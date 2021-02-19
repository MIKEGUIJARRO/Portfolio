
//DB and storage requirements
const { projects: projectsDB } = require("../database/database");


module.exports.getDashboard = async (req, res) => {
    const resMainProjects = await projectsDB.getMainProjects();
    const resOtherProjects = await projectsDB.getOthersProjects();

    res.render("dashboard", {
        title: "Dashboard",
        dashboard: true,
        dashboardNav: true,
        loadMain: true,
        resMainProjects,
        resOtherProjects
    });
};