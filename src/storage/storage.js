const { admin } = require("../firebase");

//https://cloud.google.com/storage/docs/uploading-objects#storage-upload-object-nodejs
const bucket = admin.storage().bucket();
const projects = {
    uploadFile: async (path) => {
        //Upload a local file to the bucket
        try {
            const response = await bucket.upload(path, { public: true});
            return response;
        } catch (e) {
            log("Error uploading file: ", e);
        }
    }
};

module.exports = { projects };