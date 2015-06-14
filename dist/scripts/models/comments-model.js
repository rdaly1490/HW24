var $ = require("jquery");
var Backbone = require("backbone");
Backbone.$ = $;

module.exports = Backbone.Model.extend({
	defaults: {
		_id: null,
		userId: null,
		imgId: null,
		text: null
	},
	urlRoot:"http://tiny-pizza-server.herokuapp.com/collections/robd-comments",
	idAttribute: "_id"
});