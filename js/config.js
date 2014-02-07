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
