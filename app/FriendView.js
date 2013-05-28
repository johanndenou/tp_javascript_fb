FbApp.FriendView = Backbone.View.extend({

	className: "friend-item span4",

	tmpl: _.template($('#friendTmpl').html()),

	initialize: function() {

	},

	render: function() {
		this.$el.html(this.tmpl(_.isPlainObject(this.model) ? this.model : this.model.toJSON()));
		return this;
	}
	
});

// ---
// var myView = new FriendView({model: friend});
// $('.friend-list').append(
//	new FriendView({model: myFriends.at(0)})
//	.render()
//	.$el
//	);