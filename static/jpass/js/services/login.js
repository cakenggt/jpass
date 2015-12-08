app.factory('login', ['$http', function($http) {
  return {
    authenticate: function(username, password){
      return $http({
        method: 'POST',
        url: 'api-token-auth/',
        data: {'username': username, 'password': password},
        headers: {"X-CSRFToken": $('input[name=csrfmiddlewaretoken]').val()},
      })
      .then(function(data) {
        return data;
      });
    },
    logout: function(){
      window.localStorage.token = null;
      window.localStorage.password = null;
    }
  }
}]);
