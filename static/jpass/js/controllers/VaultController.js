app.controller('VaultController', ['$scope', 'vault', 'tokenService', '$location', 'vaultService', function($scope, vault, tokenService, $location, vaultService) {
  if (tokenService.token == null){
    //If the token is not existing, send to home page
    $location.path('/');
  }
  else{
    vault.getVault().then(function(data) {
      $scope.vault = vaultService.vault;
    });
    $scope.addEntry = function() {
      vaultService.vault.entries.push({
        site: '',
        username: '',
        password: ''
      });
      $location.path('entry/'+(vaultService.vault.entries.length-1));
    }
    $scope.edit = function(index) {
      $location.path('entry/'+index);
    }
  }
}])
.service('vaultService', function(){
  this.vault = null;
});
