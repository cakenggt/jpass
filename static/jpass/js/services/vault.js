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
      .success(function(data) {
        console.log(data);
        var vault = {};
        if (data.vault != ''){
          console.log(JSON.parse(data.vault));
          console.log(sjcl.decrypt(loginService.password, JSON.parse(data.vault)));
          vault = JSON.parse(sjcl.decrypt(loginService.password, JSON.parse(data.vault)));
        }
        vaultService.vault = vault;
      })
      .error(function(data) {
        return data;
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
