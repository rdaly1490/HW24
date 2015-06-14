var $ = require("jquery");
var Backbone = require("backbone");
Backbone.$ = $;

module.exports = Backbone.Model.extend({
	defaults: {
		_id: null,
		userId: null,
		url: null,
		caption: null,
		numLikes:0
	}
});