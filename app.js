var app = angular.module('app', [
    'firebase',
    'ngRoute'
]);

app.controller('main', function ($scope, $firebase, $firebaseSimpleLogin) {
    var url = new Firebase("https://torid-fire-9175.firebaseio.com/");
    $scope.loginObj = $firebaseSimpleLogin(url);

    $scope.login = function () {
        $scope.loginObj.$login('password', {
           email: $scope.email,
           password: $scope.password
        }).then(function(user) {
           console.log('Logged in as: ', user.uid);
           console.log(user);
        }, function(error) {
           console.error('Login failed: ', error);
        });
    }
});
