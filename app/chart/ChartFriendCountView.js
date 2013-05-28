FbApp.ChartFriendCountView = FbApp.ChartView.extend({

	events: {
		'click #graphFriendCount': 'grapheFriendCount',
        'click #hideGraph': 'hideGraph'
	},

	initialize: function() {
		this.model.on('reset', this.render, this);
        this.$chartByFriendCount = this.$el.find('#chartByFriendCount');
	},

	grapheFriendCount: function() {
		if($('#chartByFriendCount').html() == "") {
			this.model.afficheGrapheFriendCount();
		}
	},

	render: function(data) {
		$('#hideGraph').css("display", "");
		$('#chartBySex').html("");
		$('#chartBySex').removeAttr("data-highcharts-chart");
		$('#chartByRelationship').html("");
		$('#chartByRelationship').removeAttr("data-highcharts-chart");
		this.$chartByFriendCount.highcharts({
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },
            title: {
                text: 'Nombre d\'amis'
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
                name: 'Nombre d\'amis',
                data: data
            }]
        });
	}

});