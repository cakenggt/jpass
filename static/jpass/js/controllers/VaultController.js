app.controller('VaultController', ['$scope', 'vault', 'tokenService', '$location', 'vaultService', function($scope, vault, tokenService, $location, vaultService) {
  if (tokenService.token == null){
    //If the token is not existing, send to home page
    $location.path('/');
  }
  else{
    vault.getVault().success(function(data) {
      $scope.vault = vaultService.vault;
    });
  }
}])
.service('vaultService', function(){
  this.vault = null;
});
