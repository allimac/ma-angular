githubUserSearch.controller('GitUserSearchController', ['Search', 'RepoCounter', function(Search, RepoCounter) {
  var self            = this;
  self.searchTerm     = undefined;
  self.githubUserData = undefined;

  self.getGithubData = function() {
    Search.query(self.searchTerm).then(function(response) {
        callback(response.data.items);
      });
  };

  function callback(data) {
    self.githubUserData = data;
    data.forEach(function(userData) {
      RepoCounter.query(userData.login).then(function(response) {
          addCount(response.data);
        });
    });
  }

  function addCount(count) {
    userData.repoCount = count;
  }

}]);

// Search results =>> JSON Object

          // FACTORY Api call to get all user data

// JSON Object loop through

            // FACTORY Api call to GET repos

// push repos into JSON object
