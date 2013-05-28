FbApp.ChartRelationshipView = FbApp.ChartView.extend({

	events: {
		'click #graphRelationship': 'grapheRelationship',
        'click #hideGraph': 'hideGraph'
	},

	initialize: function() {
		this.model.on('reset', this.render, this);
        //this.model.on('change:chartData', this.render, this);
        this.$chartByRelationship = this.$el.find('#chartByRelationship');
	},

	grapheRelationship: function() {
		if($('#chartByRelationship').html() == "") {
			this.model.afficheGrapheRelationship();
		}
	},

	render: function(data) {
		$('#hideGraph').css("display", "");
		$('#chartBySex').html("");
		$('#chartBySex').removeAttr("data-highcharts-chart");
		$('#chartByFriendCount').html("");
		$('#chartByFriendCount').removeAttr("data-highcharts-chart");
		this.$chartByRelationship.highcharts({
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },
            title: {
                text: 'Relation des amis'
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
                name: 'Relationship',
                data: data
            }]
        });
	}

});