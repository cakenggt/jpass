app.controller('VaultController', ['$scope', 'vault', function($scope, vault) {
  vault.success(function(data) {
    $scope.vault = data;
  });
}]);
