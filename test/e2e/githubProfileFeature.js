describe('Github Profile finder', function() {

  var searchBox = element(by.model('searchCtrl.searchTerm'));
  var searchButton = element(by.className('btn'));
  var profiles = element.all(by.repeater('user in searchCtrl.searchResult.items'));

  beforeEach(function() {
    browser.get('http://localhost:8080');
  });

  it('has a title', function() {
      expect(browser.getTitle()).toEqual('Find developers!');
    });

    describe('Github profile finder', function() {

      it('finds last spike', function() {
        searchBox.sendKeys('spike');
        searchButton.click();
        expect(profiles.getText()).toContain('spike01');
      });
    });

});
