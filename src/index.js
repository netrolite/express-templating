"use strict";
exports.__esModule = true;
var express_1 = require("express");
var express_handlebars_1 = require("express-handlebars");
var app = (0, express_1["default"])();
app.engine("handlebars", (0, express_handlebars_1.engine)());
app.set("view engine", "handlebars");
app.get("/", function (req, res) {
    res.render("index");
});
var PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
    console.log("app listening on port ".concat(PORT));
});
