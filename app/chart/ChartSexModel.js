FbApp.ChartSexModel = FbApp.ChartModel.extend({

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

	afficheGrapheSexe: function() {
		var arrayGrapheSexe = this.collection.sortBy(function(friend) {
			return friend.get('sex');
		});
		var tabSexes = [];
		var tabNbSexes = [0, 0, 0];
		for(var i = 0 ; i < arrayGrapheSexe.length ; i++) {
			tabSexes.push(arrayGrapheSexe[i].attributes['sex']);
		}
		for(var i = 0 ; i < tabSexes.length ; i++) {
			switch(tabSexes[i]) {
				default:
				tabNbSexes[0]++;
				break;
				case "female":
				tabNbSexes[1]++;
				break;
				case "male":
				tabNbSexes[2]++;
				break;
			}
		}

		var data = [["Hommes", tabNbSexes[2]*100/arrayGrapheSexe.length], ["Femmes", tabNbSexes[1]*100/arrayGrapheSexe.length], ["Non renseignés", tabNbSexes[0]*100/arrayGrapheSexe.length]];


		//this.set('chartData', data);

		this.trigger('reset', data);

	}

});