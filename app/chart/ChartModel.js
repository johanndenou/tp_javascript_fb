FbApp.ChartModel = Backbone.Model.extend({

	defaults: {
		chartData: []
	},

	initialize: function(options) {
		_.extend(this, options || {});
		//this.collection.on('reset', this.processData, this);
	},

	processData: function() {
		//this.set('chartData', arr);
		alert();
		throw new Error(".processData NOT IMPLEMENTED");
	}

});