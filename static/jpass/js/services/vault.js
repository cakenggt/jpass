app.factory('vault', ['$http', 'tokenService', 'vaultService', 'loginService', function($http, tokenService, vaultService, loginService) {
  return {
    getVault: function(){
      return $http({
          method: 'GET',
          url: 'get-vault/',
          headers: {
            "X-CSRFToken": $('input[name=csrfmiddlewaretoken]').val(),
            "Authorization": "Token " + tokenService.token
          },
      })
      .then(function successCallback(response) {
        var vault = {
          entries: []
        };
        if (response.data.vault != ''){
          vault = JSON.parse(sjcl.decrypt(loginService.password, response.data.vault));
        }
        vaultService.vault = vault;
      });
    },
    setVault: function(){
      var vault = sjcl.encrypt(loginService.password, JSON.stringify(vaultService.vault));
      return $http({
          method: 'POST',
          url: 'set-vault/',
          data: {vault: vault},
          headers: {
            "X-CSRFToken": $('input[name=csrfmiddlewaretoken]').val(),
            "Authorization": "Token " + tokenService.token
          },
      })
      .success(function(data) {
        return data;
      })
      .error(function(data) {
        return data;
      });
    }
  }
}]);
