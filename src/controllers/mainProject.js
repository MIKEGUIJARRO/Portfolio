const { deleteLocalFile } = require("../lib/util");
//DB and storage requirements
const { projects: projectsDB } = require("../database/database");
const { projects: projectsStorage } = require("../storage/storage");



module.exports.getAddMainProject = (req, res) => {
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
}

module.exports.postAddMainProject = async (req, res) => {
    try {
        const data = req.body;
        //The current file input is required for all the new main projects
        const imgFile = req.files["image"][0];
        const filepath = imgFile.path;
        const resStorage = await projectsStorage.uploadFile(filepath);
        const imageURL = resStorage[0].publicUrl();
        const imageName = resStorage[0].name;
        const project = {
            "title": data.title,
            "description": data.description,
            "webpage": data.webpage ? data.webpage : null,
            "github": data.github ? data.github : null,
            "figma": data.figma ? data.figma : null,
            "technologies": data.technologies ? JSON.parse(data.technologies) : null,
            "image": {
                "url": imageURL,
                "filename": imageName,
            }
        }
        await deleteLocalFile(filepath);
        await projectsDB.addMainProject(project);
    } catch (e) {
        console.log(e);
    }
    res.redirect("/dashboard");
};

module.exports.getEditMainProject = async (req, res) => {
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
};

module.exports.postEditMainProject = async (req, res) => {
    const data = req.body;
    const id = req.params.id;

    const newProject = {
        "title": data.title,
        "description": data.description,
        "webpage": data.webpage ? data.webpage : null,
        "github": data.github ? data.github : null,
        "figma": data.figma ? data.figma : null,
        "technologies": data.technologies ? JSON.parse(data.technologies) : null,
    }

    if (req.files && req.files["image"]) {
        //Get
        const project = await projectsDB.getMainProject(id);
        //Delete
        await projectsStorage.removeFile(project.image.fileName);
        //Update
        const imageFile = req.files["image"][0];
        const filepath = imageFile.path;
        
        const resStorage = await projectsStorage.uploadFile(filepath);
        const imageURL = resStorage[0].publicUrl();
        const imageName = resStorage[0].name;
        newProject["image"] = {
            "url": imageURL,
            "filename": imageName,
        };
        await deleteLocalFile(filepath);
    }
    await projectsDB.updateMainProject(id, newProject);
    res.redirect("/dashboard");
};

module.exports.getDeleteMainProject = async (req, res) => {
    const id = req.params.id;
    await projectsDB.deleteMainProject(id);
    res.redirect("/dashboard");
};