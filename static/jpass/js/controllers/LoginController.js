app.controller('LoginController', ['$scope', 'login', 'tokenService', 'loginService', '$location', function($scope, login, tokenService, loginService, $location) {
  loginService.username = 'vaultUser';
  loginService.password = 'vaultUser';
  if (window.localStorage.token){
    tokenService.token = window.localStorage.token;
    loginService.password = window.localStorage.password;
    $location.path('vault');
  }
  else{
    login.authenticate(loginService.username, loginService.hashPassword()).then(function(response) {
      tokenService.token = response.data.token;
      window.localStorage.token = tokenService.token;
      window.localStorage.password = loginService.password;
      $location.path('vault');
    });
  }
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
