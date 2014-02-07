var app = angular.module('app', ['firebase']);

app.controller('main', function ($scope, $firebase) {
    var ref = new Firebase("https://torid-fire-9175.firebaseio.com/");
    $scope.messages = $firebase(ref);
    $scope.addMessage = function(e) {
      if (e.keyCode != 13) return;
      $scope.time = moment().format('hmmss');
      $scope.messages.$add({from: $scope.name, body: $scope.msg, time: $scope.time});
      $scope.msg = "";
    };
});
