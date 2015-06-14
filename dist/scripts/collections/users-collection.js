var $ = require("jquery");
var Backbone = require("backbone");
Backbone.$ = $;

var userModel = require("../models/users-model.js");

module.exports = Backbone.Collection.extend({
	model: userModel
});