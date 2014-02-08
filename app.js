var app = angular.module('app', [
    'firebase',
    'ngRoute'
]);

app.controller('main', function ($scope, $firebase) {
});

app.service('myAuthService', ["$rootScope", function($rootScope) {
    var ref = new Firebase("https://torid-fire-9175.firebaseio.com/");

    this.auth = new FirebaseAuthClient(ref, function(error, user) {
        if (user) {
            $rootScope.$emit("login", user);
        }
        else if (error) {
            $rootScope.$emit("loginError", error);
        }
        else {
            $rootScope.$emit("logout");
        }
    });
}])
