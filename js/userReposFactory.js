app.factory('Repos', ['$http', function($http) {

  return {
    query: function(username) {
      return $http({
        url: "https://api.github.com/users/" + username + "/repos",
        method: 'GET',
        params: {
          access_token: token
          }
      });
    }
  };

  }

]);
