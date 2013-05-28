FbApp.ChartRelationshipModel = FbApp.ChartModel.extend({

	processData: function() {
		//alert("processDatachartsexmodel");
		//this.set('chartData', this.tabGrapheSex);
	},

	setCollection: function(collection) {
		//alert(this.collection.length);
		//alert(collection.length);
	},

	setChartBySex: function(arrayForChartBySex) {

	},

	afficheGrapheRelationship: function() {
		var arrayGrapheRelationship = this.collection.sortBy(function(friend) {
			return friend.get('relationship_status');
		});

		var counts = {};

		for(var i = 0 ; i < arrayGrapheRelationship.length ; i++) {
		  var key = arrayGrapheRelationship[i].attributes['relationship_status'];
		  counts[key] = (counts[key]) ? counts[key] + 1 : 1;
		}

		var data = [];
		for (att in counts) {
			if(att == "null") {
				data.push(["Unknown", counts[att]]);
			}
			else {
				data.push([att, counts[att]]);
			}
		}

		this.trigger('reset', data);

	}

});