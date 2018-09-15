

// So it begins!!! ---- Dependencies!!

var express = require("express");

var bodyParser = require("body-parser");

var fs = require("file-system");

var path = require("path");

//Calling Express!!!

var app = express();

// Sets an initial port!!!!! 

var PORT = process.env.PORT || 8080;

//Express and Body-Parser!!!

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

///Routing!!!!!


require("./app/routing/apirout.js")(app);
require("./app/routing/htmlroutes.js")(app);

app.listen(process.env.PORT || 8080, function(){
    console.log("App listening on PORT" + process.env.PORT);
})