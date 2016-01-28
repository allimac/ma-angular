app.factory('Search', ['$http', function($http) {

  var queryUrl = 'https://api.github.com/search/users';
  var userData;

  var addReposData = function(usersData) {
    usersData.data.items.forEach(function(item) {
      $http({
        url: item.repos_url,
        method: 'GET'
      }).then(function(response) {
        item.repos = response;
      });
    });
  };

  return {
    query: function(searchTerm) {
      $http({
      url: queryUrl,
      method: 'GET',
      params: {
        access_token: token,
        'q': searchTerm
        }
      }).then(function(response) {
        return addReposData(response);
      }
      );
    }
  };
}]);
