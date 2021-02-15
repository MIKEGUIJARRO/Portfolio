const admin = require("firebase-admin");
const SERVICEACCOUNT = require("../personal-portfolio-48e6c-firebase-adminsdk-tpqrb-94ff73ced4.json");
//https://www.youtube.com/watch?v=b6KJ7FSMifw&ab_channel=FaztCode

//https://firebase.google.com/docs/admin/setup
//Firebase database setup


const initializeFirebaseApp = () => {
    admin.initializeApp({
        credential: admin.credential.cert(SERVICEACCOUNT),
        databaseURL: process.env.DATABASE_URL,
        storageBucket: process.env.STORAGE_URL,
    });
}

module.exports = { initializeFirebaseApp, admin};