const express = require("express"),
    exphbs = require("express-handlebars"),
    bodyparser = require("body-parser"),
    morgan = require("morgan");

const path = require("path");
const rootDir = require("./lib/path");


//Initialization
const app = express();
const { initializeFirebaseApp } = require("./database");
initializeFirebaseApp();


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

//Public
app.use(express.static(path.join(rootDir, "public")));

//Routes
app.use(require("./routes/index"));


module.exports = app;