FbApp.ChartAgeView = FbApp.ChartView.extend({

	events: {
		'click #graphAge': 'grapheAge',
        'click #hideGraph': 'hideGraph'
	},

	initialize: function() {
		this.model.on('reset', this.render, this);
        this.$chartByAge = this.$el.find('#chartByAge');
	},

	grapheAge: function() {
		if($('#chartByAge').html() == "") {
			this.model.afficheGrapheAge();
		}
	},

	render: function(data) {
		$('#hideGraph').css("display", "");
		$('#chartBySex').html("");
		$('#chartBySex').removeAttr("data-highcharts-chart");
		$('#chartByRelationship').html("");
		$('#chartByRelationship').removeAttr("data-highcharts-chart");
        $('#chartByFriendCount').html("");
        $('#chartByFriendCount').removeAttr("data-highcharts-chart");
		this.$chartByAge.highcharts({
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },
            title: {
                text: 'Age des amis'
            },
            tooltip: {
        	    pointFormat: '{series.name}: <b>{point.percentage}%</b>',
            	percentageDecimals: 1
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: true,
                        color: '#000000',
                        connectorColor: '#000000',
                        formatter: function() {
                            return '<b>'+ this.point.name +'</b>: '+ this.percentage +' %';
                        }
                    }
                }
            },
            series: [{
                type: 'pie',
                name: 'Age des amis',
                data: data
            }]
        });
	}

});