const admin = require("firebase-admin");
const path = require("path")
const SERVICEACCOUNT = require(path.join("..", process.env.SERVICE_ACCOUNT));
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

module.exports = { initializeFirebaseApp, admin };