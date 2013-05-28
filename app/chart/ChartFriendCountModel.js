FbApp.ChartFriendCountModel = FbApp.ChartModel.extend({

	afficheGrapheFriendCount: function() {
		var arrayGrapheFriendCount = this.collection.sortBy(function(friend) {
			return friend.get('friend_count');
		});

		var counts = {
			"Inconnu": 0,
			"0-99": 0,
			"100-199": 0,
			"200-299": 0,
			"300-399": 0,
			"400-499": 0,
			"500-999": 0,
			"1000+": 0
		};

		for(var i = 0 ; i < arrayGrapheFriendCount.length ; i++) {
			var key = arrayGrapheFriendCount[i].attributes['friend_count'];
			if(key == null) {
				counts["Inconnu"] += 1;
			}
			else {
				if(key < 100) {
					counts["0-99"] += 1;
				}
				else if(key >= 100 && key < 200) {
					counts["100-199"] += 1;
				}
				else if(key >= 200 && key < 300) {
					counts["200-299"] += 1;
				}
				else if(key >= 300 && key < 400) {
					counts["300-399"] += 1;
				}
				else if(key >= 400 && key < 500) {
					counts["400-499"] += 1;
				}
				else if(key >= 500 && key < 1000) {
					counts["500-999"] += 1;
				}
				else {
					counts["1000+"] += 1;
				}
			}
		}

		var data = [];

		for (att in counts) {
			data.push([att, counts[att]]);
		}

		this.trigger('reset', data);

	}

});