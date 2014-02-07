app.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/', {
                templateUrl: 'views/login.html',
                controller: 'loginCtrl'
            }).
            when('/signUp', {
                templateUrl: 'views/signUp.html',
                controller: 'signupCtrl'
            }).
            otherwise({
                redirectTo: '/'
            });
}]);
