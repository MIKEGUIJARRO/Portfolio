const { admin } = require("../firebase");

const db = admin.database();

//Db references
const ref = db.ref("/resume");
const projectsRef = ref.child("projects");

//

const projects = {
    //https://firebase.google.com/docs/database/admin/save-data
    addProjectElement: async (project) => {
        await projectsRef.push().set(project, (error) => {
            if (error) {
                console.log("Data could not be saved." + error);
            } else {
                console.log("Data saved successfully.");
            }
        });
    },
    getProjects: async () => {

        const response = await projectsRef.once("value");
        return response.val();
    }
}

module.exports = { projects };