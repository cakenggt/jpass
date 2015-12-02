app.factory('login', ['$http', function($http) {
  return $http({
    method: 'POST',
    url: 'api-token-auth/',
    data: {username: 'alownes', password: 'alownes'},
    headers: {"X-CSRFToken": $('input[name=csrfmiddlewaretoken]').val()},
  })
  .success(function(data) {
    return data;
  })
  .error(function(data) {
    return data;
  });
}]);
