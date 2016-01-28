var mock = require('protractor-http-mock');

describe('Github Profile finder', function() {

  var searchBox = element(by.model('searchCtrl.searchTerm'));
  var searchButton = element(by.className('btn'));
  var profiles = element.all(by.repeater('user in searchCtrl.searchResult.items'));

  beforeEach(function() {
    mock(['search']);
    browser.get('http://localhost:5000');
  });

  afterEach(function(){
    mock.teardown();
  });

  it('has a title', function() {
      expect(browser.getTitle()).toEqual('Find developers!');
    });

    describe('Github profile finder', function() {

      it('finds the user spike', function() {
        searchBox.sendKeys('spike');
        expect(profiles.getText()).toContain('spike01');
      });
    });

});
