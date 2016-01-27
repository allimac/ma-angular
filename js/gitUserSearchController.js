app.controller('GitUserSearchController', ['Search', function(Search) {

  var self = this;

  self.searchTerm = undefined;

  self.doSearch = function() {
    if (self.searchTerm !== '') {
      Search.query(self.searchTerm).then(function(response) {
        self.searchResult = response.data;
      });
    }
  };

  self.noResults = function() {
    return self.searchResult.items.length === 0;
  };
}]);
