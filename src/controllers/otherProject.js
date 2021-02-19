//DB and storage requirements
const { projects: projectsDB } = require("../database/database");

module.exports.getAddOtherProject = (req, res) => {
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
};

module.exports.postAddOtherProject = async (req, res) => {
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
};

module.exports.getEditOtherProject = async (req, res) => {
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
};

module.exports.postEditOtherProject = async (req, res) => {
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
};

module.exports.getDeleteOtherProject = async (req, res) => {
    const id = req.params.id;
    await projectsDB.deleteOtherProject(id);
    res.redirect("/dashboard");
};