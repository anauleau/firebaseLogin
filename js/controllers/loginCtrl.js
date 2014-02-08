app.controller('loginCtrl', ['$scope', '$location', '$rootScope', 'myAuthService', function ($scope, $location, $rootScope, myAuthService){

  $scope.signin = function() {
    var user1 = $scope.email;
    var pass1 = $scope.password;
    myAuthService.auth.login('password', {
        email: user1,
        password: pass1,
        rememberMe: false
    });

    $scope.$emit('loginSubmitted');
  }

  $rootScope.$on("loginSubmitted", function(event) {
    $location.path('/welcome');
  });
  // listen for user auth events
  $rootScope.$on("login", function(event, user) {
    // do login things
    $scope.user = user;
    debugger
  });
  $rootScope.$on("loginError", function(event, error) {
    // tell the user about the error
  });
  $rootScope.$on("logout", function(event) {
    // do logout things
  });

  $scope.createUser = function (email, password) {
    auth.createUser(email, password, function(error, user) {
      if (!error) {
        console.log('User Id: ' + user.id + ', Email: ' + user.email);
      }
    });
  };
}]);