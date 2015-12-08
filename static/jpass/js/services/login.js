app.factory('login', ['$http', function($http) {
  return {
    authenticate: function(username, password){
      return $http({
        method: 'POST',
        url: 'api-token-auth/',
        data: {'username': username, 'password': password},
      })
      .then(function(data) {
        return data;
      });
    },
    logout: function(){
      window.localStorage.removeItem('token');
      window.localStorage.removeItem('password');
    }
  }
}]);
