const { admin } = require("../firebase");

const db = admin.database();

//Db references
const ref = db.ref("/resume");
const projectsRef = ref.child("projects");



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

    getMainProjects: async (isIdNested = true) => {
        const response = await projectsRef.child("main").once("value");
        const resMainProjects = isIdNested ? nestIdArray(response.val()) : response.val();
        return resMainProjects;
    },

    getOthersProjects: async (isIdNested = true) => {
        const response = await projectsRef.child("others").once("value");
        const resOtherProjects = isIdNested ? nestIdArray(response.val()) : response.val();
        return resOtherProjects;
    },

    getMainProject: async (id, isIdNested = true) => {
        const response = await projectsRef.child("main").child(id).once("value");
        const resMainProject = isIdNested ? nestIdProp(response.val(), id) : response.val();
        return resMainProject;
    },

    getOtherProject: async (id, isIdNested = true) => {
        const response = await projectsRef.child("others").child(id).once("value");
        const resOtherProject = isIdNested ? nestIdProp(response.val(), id) : response.val();
        return resOtherProject;
    },

    updateMainProject: async (id, value) => {
        const response = await projectsRef.child("main").child(id).update(value, (error) => {
            if (error) {
                console.log("Data could not be updated." + error);
            } else {
                console.log("Data updated successfully.");
            }
        });
    },

    updateOtherProject: async (id, value) => {
        const response = await projectsRef.child("others").child(id).update(value, (error) => {
            if (error) {
                console.log("Data could not be updated." + error);
            } else {
                console.log("Data updated successfully.");
            }
        });
    },

    deleteMainProject: async (id) => {
        const response = await projectsRef.child("main").child(id).set(null, (error) => {
            if (error) {
                console.log("Data could not be deleted." + error);
            } else {
                console.log("Data deleted successfully.");
            }
        });
    },

    deleteOtherProject: async (id) => {
        const response = await projectsRef.child("others").child(id).set(null, (error) => {
            if (error) {
                console.log("Data could not be deleted." + error);
            } else {
                console.log("Data deleted successfully.");
            }
        });
    },
}

//Util
const nestIdArray = (projectsOriginal) => {
    const projects = { ...projectsOriginal };
    for (const project in projects) {
        projects[project]["id"] = project;
    }
    return projects;
}
const nestIdProp = (projectsOriginal, id) => {
    const projects = { ...projectsOriginal };
    projects["id"] = id;
    return projects;
}

module.exports = { projects };