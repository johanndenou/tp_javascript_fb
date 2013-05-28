FbApp.Friends = Backbone.Collection.extend({

	model: FbApp.Friend,

	initialize: function() {

	},

	setSortBy: function(what) {
		this.sortBy = what;
		this.getSortedCollection();
	},

	_visitor: {
		name: function(friendModel){
			return friendModel.get('name');
		},
		birthday: function(friendModel){
			var date = (friendModel.get('birthday_date') || "01/01/1000").split('/');
			date[2] = date[2] || '1000';
			return new Date(Date.parse(date));
		}
	},

	getSortedCollection: function() {
		return _(this.sortBy(this._visitor[this.sortField]));
	},

	search: function(searchToken) {
		searchToken = searchToken.toLowerCase();

		// Normalement on devrait avoir recourt à _.memoize pour ce genre
		// de traitement "lourd" http://underscorejs.org/#memoize
		console.time('flatten');
		var friends = this._flatten(this.toJSON());
		console.timeEnd('flatten');

		console.time('search');
		var sortedArray = friends.filter(function(friend){
		  return _.find(_.keys(friend), function(attr){
		      return friend[attr].toLowerCase().indexOf(searchToken) !== -1;
		  }, this) !== undefined;
		}, this);
		console.timeEnd('search');

		//ancien code simple
		var filteredArray = this.filter(function(friendModel){
			return _.find(['birthday_date', 'name' /*... etc... */], function(attr){
			return (friendModel.get(attr) || '').toLowerCase().indexOf(searchToken) !== -1;
			}) !== undefined;
		}, this);

		//lancer un tri
		// var sortedArray = this.getSortedCollection();
		
		this.trigger('reset', sortedArray);
	},

	_flatten: _.memoize(function(root){
		// Since sometimes "bithday" is null, it won't be available in the finale object
		// however, since the template requires it we have to define a default value.
		var defaultValue = '';

		function valueSelector(value) {
			return _.isString(value) && value.length > 0;
		}

	    return root.map(function(friend){
			return _.flattenObject(friend, valueSelector, defaultValue);
	    }, this);
  	}),

	sortByName: function() {
		//_.sortBy([1, 2, 3, 4, 5, 6], function(num){ return Math.sin(num); });
		// Tri de la collection par nom
		var sortedArray = this.sortBy(function(friend) {
			return friend.get('name'); // Tri sur la propriete name
		});

		this.trigger('reset', sortedArray); // Emet un evenement deja ecoute par la vue (parametre transmi aux fonctions qui ecoutent reset)
	},

	sortByBirthday: function() {
		//_.sortBy([1, 2, 3, 4, 5, 6], function(num){ return Math.sin(num); });
		// Tri de la collection par nom
		var sortedArray = this.sortBy(function(friend) {
			return Date.parse(friend.get('birthday_date')); // Tri sur la propriete birthday
		});

		this.trigger('reset', sortedArray); // Emet un evenement deja ecoute par la vue (parametre transmi aux fonctions qui ecoutent reset)
	}

});