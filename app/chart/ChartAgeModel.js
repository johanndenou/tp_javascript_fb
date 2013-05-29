FbApp.ChartAgeModel = FbApp.ChartModel.extend({

	afficheGrapheAge: function() {
		var arrayGrapheAge = this.collection.sortBy(function(friend) {
			return friend.get('birthday_date') || "01/01/1000";
		});

		var counts = {
			"Inconnu": 0,
			"0 à 10 ans": 0,
			"11 à 17 ans": 0,
			"18 à 25 ans": 0,
			"26 à 30 ans": 0,
			"31 à 40 ans": 0,
			"41 ans et +": 0
		};

		var myDate = new Date();

		for(var i = 0 ; i < arrayGrapheAge.length ; i++) {
			var birthday_date = arrayGrapheAge[i].attributes["birthday_date"] || '01/01/1000';
			var date = birthday_date.split('/');
			var key = date[2] || '1000';
			var age = myDate.getFullYear() - key;
			if(key == '1000') {
				counts["Inconnu"] += 1;
			}
			else {
				if(age <= 10) {
					counts["0 à 10 ans"] += 1;
				}
				else if(age >= 11 && age < 18) {
					counts["11 à 17 ans"] += 1;
				}
				else if(age >= 18 && age < 26) {
					counts["18 à 25 ans"] += 1;
				}
				else if(age >= 26 && age < 31) {
					counts["26 à 30 ans"] += 1;
				}
				else if(age >= 31 && age < 41) {
					counts["31 à 40 ans"] += 1;
				}
				else if(age >= 41) {
					counts["41 ans et +"] += 1;
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