
// DEPENDENCIES
var express = require("express");
var bodyParser = require("body-parser");

// SETS UP EXPRESS APP
var app = express();
var PORT = process.env.PORT || 8080

// SETS UP EXPRESS APP TO HANDLE DATA PARSING
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// STATIC DIRECTORY
app.use(express.static("app/public"));

// ROUTES
require("./app/routes/api-routes.js")(app);
require("./app/routes/html-routes.js")(app);

// STARTS SERVER TO BEGIN LISTENING
app.listen(PORT, function(){
    console.log("App listening on PORT " + PORT);
});