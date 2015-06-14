var $ = require("jquery");
var Backbone = require("backbone");
Backbone.$ = $;

var imageModel = require("../models/images-model.js");

module.exports = Backbone.Collection.extend({
	model: imageModel,
	url: "http://tiny-pizza-server.herokuapp.com/collections/robd-images"
});