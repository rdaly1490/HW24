var $ = require("jquery");
var Backbone = require("backbone");
Backbone.$ = $;
var _ = require("backbone/node_modules/underscore");

$(document).ready(function() {

var userModel = require("./models/users-model.js");
var userCollection = require("./collections/users-collection.js");

var userList = new userCollection();

var App = Backbone.Router.extend({
	routes: {
		"": "login",
		"login": "login",
		"registration": "registration",
		"home": "home"
	},
	login: function() {
		console.log("login");
	},
	registration: function() {
		console.log("registration");
	},
	home: function() {
		console.log("home");
	}
});

var myRouter = new App();
Backbone.history.start();









});