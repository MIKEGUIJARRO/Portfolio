const { deleteLocalFile } = require("../lib/util");
//DB and storage requirements
const { documents: documentsDB } = require("../database/database");
const { projects: projectsStorage } = require("../storage/storage");

module.exports.getAddResume = (req, res) => {
    res.render("addDocument", {
        title: "Add resume",
        dashboardNav: true,
        subtitle: "Add a new resume",
        idInfo: "info-resume",
        urlAction: `/add-resume`
    });
};

module.exports.postAddResume = async (req, res) => {
    if (req.files) {
        const pdfFile = req.files["pdf"][0];
        const filepath = pdfFile.path;
        //Get filename
        const resume = await documentsDB.getResume();
        if (resume !== null) {
            //Delete from google store
            await projectsStorage.removeFile(resume.filename);
        }
        //Upload new file
        const resStorage = await projectsStorage.uploadFile(filepath);
        const docURL = resStorage[0].publicUrl();
        const docName = resStorage[0].name;
        const newResume = {
            "url": docURL,
            "filename": docName,
        };
        documentsDB.addAndReplaceResume(newResume);
        await deleteLocalFile(filepath);
    }
    res.redirect("/dashboard");
};