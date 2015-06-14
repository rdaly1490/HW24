var $ = require("jquery");
var Backbone = require("backbone");
Backbone.$ = $;

var commentModel = require("../models/comments-model.js");

module.exports = Backbone.Collection.extend({
	model: commentModel,
	url: "http://tiny-pizza-server.herokuapp.com/collections/robd-comments"
});