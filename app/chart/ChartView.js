FbApp.ChartView = Backbone.View.extend({

	events: {
		'click #hideGraph': 'hideGraph'
	},

	hideGraph: function() {
		$('#hideGraph').css("display", "none");
		$('#chartBySex').html("");
		$('#chartBySex').removeAttr("data-highcharts-chart");
		$('#chartByRelationship').html("");
        $('#chartByRelationship').removeAttr("data-highcharts-chart");
        $('#chartByFriendCount').html("");
        $('#chartByFriendCount').removeAttr("data-highcharts-chart");
        $('#chartByAge').html("");
        $('#chartByAge').removeAttr("data-highcharts-chart");
	}

});