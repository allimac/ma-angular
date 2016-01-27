app.factory('Search', ['$http', function($http) {

  var queryUrl = 'https://api.github.com/search/users';
  var secretissimo = 'd3ad2562df6612a257f67cefe97d77928492e58f';

  return {
    query: function(searchTerm) {
      return $http({
        url: queryUrl,
        method: 'GET',
        params: {
          access_token: secretissimo,
          'q': searchTerm
        }
      });
    }
  };
}]);
