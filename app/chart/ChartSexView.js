FbApp.ChartSexView = FbApp.ChartView.extend({

	events: {
		'click #graphSexe': 'grapheSexe',
        'click #hideGraph': 'hideGraph'
	},

	initialize: function() {
		this.model.on('reset', this.render, this);
        //this.model.on('change:chartData', this.render, this);
        this.$chartBySex = this.$el.find('#chartBySex');
	},

	grapheSexe: function() {
        if($('#chartBySex').html() == "") {
            this.model.afficheGrapheSexe();
        }
	},

	render: function(data) {
        $('#hideGraph').css("display", "");
        $('#chartByRelationship').html("");
        $('#chartByRelationship').removeAttr("data-highcharts-chart");
        $('#chartByFriendCount').html("");
        $('#chartByFriendCount').removeAttr("data-highcharts-chart");
		this.$chartBySex.highcharts({
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },
            title: {
                text: 'Répartition du sexe des amis'
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
                name: 'Browser share',
                /*data: [
                    ['Firefox',   45.0],
                    ['IE',       26.8],
                    ['Chrome',       12.8],
                    ['Safari',    8.5],
                    ['Opera',     6.2],
                    ['Others',   0.7]
                ]*/
                data: data
            }]
        });
	}

});