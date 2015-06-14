var $ = require("jquery");
var Backbone = require("backbone");
Backbone.$ = $;

var App = Backbone.Router.extend({
	routes: {
		"": "login",
		"login": "login",
		"registration": "registration",
		"home": "home"
	},
	login: function() {

	},
	registration: function() {

	},
	home: function() {

	}
});