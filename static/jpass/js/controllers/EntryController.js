app.controller('EntryController', ['$scope', '$routeParams', 'vault', 'tokenService', '$location', 'vaultService',
  function($scope, $routeParams, vault, tokenService, $location, vaultService) {
    if (tokenService.token == null){
      //If the token is not existing, send to home page
      $location.path('/');
    }
    else{
      $scope.entry = vaultService.vault.entries[$routeParams.id];
    }
    $scope.save = function(){
      vault.setVault().then(function(data) {
        $location.path('vault');
      });
    }
  }]);
