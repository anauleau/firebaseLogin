app.config(['$routeProvider',
function($routeProvider) {
    $routeProvider.
        when('/', {
            templateUrl: 'views/login.html',
            controller: 'main'
        }).
        when('/welcome', {
            templateUrl: 'views/welcome.html',
            controller: 'welcomeCtrl'
        }).
        otherwise({
            redirectTo: '/'
        });
}]);
