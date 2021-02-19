const { deleteLocalFile } = require("../lib/util");
//DB and storage requirements
const { documents: documentsDB } = require("../database/database");
const { projects: projectsStorage } = require("../storage/storage");

module.exports.getAddTranscript =  (req, res) => {
    res.render("addDocument", {
        title: "Add transcript",
        dashboardNav: true,
        subtitle: "Add a new transcript",
        idInfo: "info-transcript",
        urlAction: `/add-transcript`
    });
};

module.exports.postAddTranscript = async (req, res) => {
    if (req.files) {
        const pdfFile = req.files["pdf"][0];
        const filepath = pdfFile.path;
        //Get filename
        const transcript = await documentsDB.getTranscript();
        if (transcript !== null) {
            //Delete from google store
            await projectsStorage.removeFile(transcript.filename);
        }
        //Upload new file
        const resStorage = await projectsStorage.uploadFile(filepath);
        const docURL = resStorage[0].publicUrl();
        const docName = resStorage[0].name;

        const newTranscript = {
            "url": docURL,
            "filename": docName,
        };
        documentsDB.addAndReplaceTranscript(newTranscript);
        await deleteLocalFile(filepath);
    }
    res.redirect("/dashboard");
};