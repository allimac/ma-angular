describe('GitUserSearchController', function() {

  var ctrl, scope;
  beforeEach(module('GitUserSearch'));
  beforeEach(function() {
    fakeSearch = jasmine.createSpyObj('fakeSearch', ['query']);
    module({ Search: fakeSearch});
  });
  beforeEach(inject(function($controller, $q, $rootScope) {
    ctrl = $controller('GitUserSearchController');
    fakeSearch.query.and.returnValue($q.when({
      data: {
        items: 'cat'
      }
    }));
    scope = $rootScope;
  }));

  it('initialises with an empty search result and term', function() {
    expect(ctrl.searchTerm).toBeUndefined();
    expect(ctrl.searchResult).toBeUndefined();
  });

  describe('when searching for a user', function() {
    it('displays search result', function() {
      ctrl.searchTerm = 'hello';
      ctrl.doSearch();
      scope.$digest();
      expect(ctrl.searchResult.items).toEqual('cat');
    });
  });

});
