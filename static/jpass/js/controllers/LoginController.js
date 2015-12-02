app.controller('LoginController', ['$scope', 'login', 'tokenService', '$location', function($scope, login, tokenService, $location) {
  login.success(function(data) {
    tokenService.token = data.token;
    $location.path('vault');
  });
}]);
