const express = require("express"),
    exphbs = require("express-handlebars"),
    bodyparser = require("body-parser"),
    morgan = require("morgan"),
    multer = require("multer");


const path = require("path");
const rootDir = require("./lib/path");


//Initialization
const { initializeFirebaseApp } = require("./firebase");
initializeFirebaseApp();
const app = express();

const storage = multer.diskStorage({
    destination: path.join(rootDir, "uploads"),
    filename: (req, file, callback)=> {
        callback(null, new Date().getTime() + path.extname(file.originalname));
    }
});

//Settings
app.set("port", process.env.PORT || 5000);
app.set("views", path.join(rootDir, "views"))

//Html templating setup
app.engine(
    ".hbs",
    exphbs({
        extname: ".hbs",
        defaultLayout: "main",
        layoutsDir: path.join(app.get("views"), "layouts"),
        partialsDir: path.join(app.get("views"), "partials"),
        helpers: path.join(rootDir, "lib", "helpers.js"),
    })
);

//Html templating use
app.set("view engine", ".hbs");

//Midlewares
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));
app.use(morgan("dev"));
app.use(multer({storage: storage}).single("image"));

//Public
app.use(express.static(path.join(rootDir, "public")));

//Routes
app.use(require("./routes/index"));

//Page not found response
app.use((req, res)=>{
    res.status(404).render("404", {title: "Page not found", navError: "true"});
});


module.exports = app;