//Import Express and burger.js
var express = require("express");

var router = express.Router();

var habit = require("../models/habit.js");

//Create the `router` for the app, and export the `router` at the end of your file

//app router

router.get("/", function (req, res) {
    habit.selectAll(function (data) {
        var hbsObject = {
            habits: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/", function (req, res) {
    habit.insertOne(req.body.habit_name, function () {
        res.redirect("/");
    });
});

router.put("/:id", function (req, res) {
    var id = req.params.id;

    console.log("id", id);

    habit.updateOne(id, function () {
        res.redirect("/");
    });
});

module.exports = router;