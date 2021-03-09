document.addEventListener("DOMContentLoaded", async () => {
    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    var firebaseConfig = {
        apiKey: "AIzaSyCy8xQD4Mr7X23KD1JG2vFsqoQ79H9Mh48",
        authDomain: "personal-portfolio-48e6c.firebaseapp.com",
        databaseURL: "https://personal-portfolio-48e6c-default-rtdb.firebaseio.com",
        projectId: "personal-portfolio-48e6c",
        storageBucket: "personal-portfolio-48e6c.appspot.com",
        messagingSenderId: "862487799568",
        appId: "1:862487799568:web:66ef2bda041e93af26a795",
        measurementId: "G-FVPXPV6N2H"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
});