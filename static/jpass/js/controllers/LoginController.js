app.controller('LoginController', ['$scope', 'login', 'tokenService', 'loginService', '$location', function($scope, login, tokenService, loginService, $location) {
  loginService.username = 'vaultUser';
  loginService.password = 'vaultUser';
  login.authenticate(loginService.username, loginService.hashPassword()).then(function(response) {
    tokenService.token = response.data.token;
    $location.path('vault');
  });
}])
.service('tokenService', function(){
  this.token = null;
})
.service('loginService', function(){
  this.username = null;
  this.password = null;
  this.hashPassword = function(){
    return ''+sjcl.hash.sha256.hash(this.password);
  }
});
