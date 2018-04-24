// import express
var express = require("express");
var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function (request, response) {
    burger.all(function (data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);

        // use handlebars to create html for the response
        response.render("index", hbsObject); 
    });
});

router.post('/burgers', function (request, response) {
    burger.insertOne([
        "burger_name"
    ], [
            req.body.burger_name
        ], function (data) {
            res.redirect('/');
        });
});

router.put('/burgers/:id', function(request, response){
    var condition = 'id = ' + req.params.id;

    burger.updateOne({
        devoured: true
    }, condition, function(data) {
        res.redirect('/');
    });
});

// Export routes for server.js to use.
module.exports = router;
