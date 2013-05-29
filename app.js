FbApp.init = function() {

  var myFriends = new FbApp.Friends();

  /**************/

  var myChartSexModel = new FbApp.ChartSexModel({
    collection: myFriends
  });
  var myChartFriendCountModel = new FbApp.ChartFriendCountModel({
    collection: myFriends
  });
  var myChartRelationshipModel = new FbApp.ChartRelationshipModel({
    collection: myFriends
  });
  var myChartAgeModel = new FbApp.ChartAgeModel({
    collection: myFriends
  });

  var myChartSexView = new FbApp.ChartSexView({
    model: myChartSexModel,
    el: $('.app')[0]
  });
  var myChartFriendCountView = new FbApp.ChartFriendCountView({
    model: myChartFriendCountModel,
    el: $('.app')[0]
  });
  var myChartRelationshipView = new FbApp.ChartRelationshipView({
    model: myChartRelationshipModel,
    el: $('.app')[0]
  });
  var myChartAgeView = new FbApp.ChartAgeView({
    model: myChartAgeModel,
    el: $('.app')[0]
  });

  /**************/

  var myApp = new FbApp.AppView({
    collection: myFriends,
    el: $('.app')[0]
  });

  myFriends.reset(getFriends());

}

FbApp.init();