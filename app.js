var app = angular.module('app', [
    'firebase',
    'ngRoute'
]);

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


app.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/', {
                templateUrl: 'views/login.html'
            }).
            when('/signUp', {
                templateUrl: 'views/signUp.html'
            }).
            otherwise({
                redirectTo: '/'
            });
}]);
