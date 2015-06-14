var $ = require("jquery");
var Backbone = require("backbone");
Backbone.$ = $;
var _ = require("backbone/node_modules/underscore");

$(document).ready(function() {

	var userModel = require("./models/users-model.js");
	var userCollection = require("./collections/users-collection.js");

	var imageModel = require("./models/images-model.js");
	var imageCollection = require("./collections/images-collection.js");

	var userList = new userCollection();
	var imageList = new imageCollection();

	userList.fetch();

	var App = Backbone.Router.extend({
		routes: {
			"": "login",
			"login": "login",
			"registration": "registration",
			"home": "home"
		},
		login: function() {
			// console.log("login");
			$(".page").hide();
			$("#login-page").show();
		},
		registration: function() {
			// console.log("registration");
			$(".page").hide();
			$("#registration-page").show();
		},
		home: function() {
			// console.log("home");
			$(".page").hide();
			$("#home-page").show();
		}
	});

	var myRouter = new App();
	Backbone.history.start();


	$("#registration-form").on("submit", function(e) {
		e.preventDefault();

		var userToAdd = new userModel({
			username: $("#reg-username").val(),
			password: $("#reg-password").val(),
			fullName: $("#reg-fullname").val(),
			email: $("#reg-email").val()
		});
		// console.log(userToAdd);
		userList.add(userToAdd);
		userToAdd.save();

		myRouter.navigate("login", {trigger: true});
		// console.log(userList.models);
	});

	$("#login-form").on("submit", function(e) {
		e.preventDefault();

		testUsers = _.filter( userList.models, function(item){ 
		    if (item.attributes.username === $("#login-username").val() && item.attributes.password == $("#login-password").val()){
		        return item;
		    } 
		});

		// console.log(testUsers)
		// console.log(testUsers[0].cid);

		if(testUsers.length > 0) {
			myRouter.navigate("home", {trigger: true});
		}
		else {
			console.log("try again");
		}

		$("#submit-image-form").on("submit", function(e) {
			e.preventDefault();

			var imageToAdd = new imageModel({
				userId: testUsers[0].get("_id"),
				url: $("#image-url").val(),
				caption: $("#image-caption").val(),
				numLikes: 0
			});
			// console.log(imageToAdd);
			imageList.add(imageToAdd);
		});

	});

	$("#logout").on("click", function(e) {
		myRouter.navigate("login", {trigger: true});
	});










});