const { admin } = require("../firebase");

const db = admin.database();

//Db references
const ref = db.ref("/resume");
const projectsRef = ref.child("projects");

//

const projects = {
    //https://firebase.google.com/docs/database/admin/save-data
    addMainProject: async (project) => {
        await projectsRef.child("main").push().set(project, (error) => {
            if (error) {
                console.log("Data could not be saved." + error);
            } else {
                console.log("Data saved successfully.");
            }
        });
    },
    addOtherProject: async (project) => {
        await projectsRef.child("others").push().set(project, (error) => {
            if (error) {
                console.log("Data could not be saved." + error);
            } else {
                console.log("Data saved successfully.");
            }
        });
    },

    getMainProjects: async () => {
        const response = await projectsRef.child("main").once("value");
        return response.val();
    },

    getOthersProjects: async () => {
        const response = await projectsRef.child("others").once("value");
        return response.val();
    },

    deleteProject: async (id)=> {
        //Implement null on it
    }
}

module.exports = { projects };