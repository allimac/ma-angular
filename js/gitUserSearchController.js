app.controller('GitUserSearchController', ['Search', 'Repos', function(Search, Repos) {

  var self = this;

  self.searchTerm = undefined;
  self.githubUserData = undefined;

  self.doSearch = function() {
    Search.query(self.searchTerm).then(function(response) {
      self.searchResult = response.data;
      response.data.items.forEach(function(user) {
        Repos.query(user.login).then(function(response) {
          user.repos = response.data;
        });
      });
    });
  };
}]);

//
// app.controller('GitUserSearchController', ['Search', 'Repos', function(Search, Repos) {
//   var self            = this;
//   self.searchTerm     = undefined;
//   self.githubUserData = undefined;
//
//   self.getGithubData = function() {
//     doSearch(function(data) {
//       self.githubUserData = data;
//       data.forEach(function(userData) {
//         getUserRepos(userData.login, function(count) {
//           userData.repos = count;
//         });
//       });
//     });
//   };
//
//   function doSearch(callback) {
//     Search.query(self.searchTerm)
//       .then(function(response) {
//         callback(response.data.items);
//       });
//   }
//
//   function getUserRepos(username, callback) {
//     Repos.query(username)
//       .then(function(response) {
//         callback(response.data);
//       });
//   }
// }]);
