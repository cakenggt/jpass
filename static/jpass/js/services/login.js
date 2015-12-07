app.factory('login', ['$http', function($http) {
  return {
    authenticate: function(username, password){
      return $http({
        method: 'POST',
        url: 'api-token-auth/',
        data: {'username': username, 'password': password},
        headers: {"X-CSRFToken": $('input[name=csrfmiddlewaretoken]').val()},
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
