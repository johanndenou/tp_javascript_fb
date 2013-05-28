FbApp.AppView = Backbone.View.extend({

	events: {
		'click #byName': 'sortByName',
		'click #byBirthday': 'sortByBirthday',
		'keyup #search': 'search'
	},

	initialize: function() {
		this.collection.on('reset', this.render, this);
		this.$friendList = this.$el.find('.friend-list');
	},

	search: function(e) {
		this.collection.search(e.currentTarget.value);
	},

	sortByName: function() {
		this.collection.sortByName();
	},

	sortByBirthday: function() {
		this.collection.sortByBirthday();
	},

	render: function(collection) {
		this.$friendList.empty(); // Vide l'objet html (.friend-list)

		var $container = $('<div/>');

		collection.forEach(function(friend) {
			var view = new FbApp.FriendView({model: friend});
			$container.append(view.render().$el); // Concatene le contenu html de chaque ami au container
		}, this);

		this.$friendList.append($container); // Insere tout le html dans la variable $friendList (dans l'objet html (.friend-list))
	}

});