app.factory('vault', ['$http', 'tokenService', function($http, tokenService) {
  console.log('Token: ' + tokenService.token);
  return $http({
      method: 'GET',
      url: 'get-vault/',
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
}]);
