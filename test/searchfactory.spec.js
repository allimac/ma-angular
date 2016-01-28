describe('factory: Search', function() {
  var search;
  var httpBackend;
  var repos = [
    {
      id: 7008074,
      name: "accessory-samples",
      full_name: "spike/accessory-samples",
      html_url: "https://github.com/spike/accessory-samples",
      description: "Talk to Your Toaster Accessory Sample Code",
      language: "Java",
    },
    {
      id: 345,
      name: "another-repos",
      full_name: "spike/another-repo",
      html_url: "https://github.com/spike/another-repo",
      description: "Talk to Your Toaster another repo Code",
      language: "Spanish",
    }
  ];
  var items = [
    {
      "login": "tansaku",
      "avatar_url": "https://avatars.githubusercontent.com/u/30216?v=3",
      "html_url": "http://github.com/tansaku",
      "repos": repos
    },
    {
      "login": "stephenlloyd",
      "avatar_url": "https://avatars.githubusercontent.com/u/196474?v=3",
      "html_url": "https://github.com/stephenlloyd",
      "repos": repos
    }
  ];


  beforeEach(module('GitUserSearch'));
  beforeEach(inject(function(Search) {
    search = Search;
  }));
  beforeEach(inject(function($httpBackend) {
    httpBackend = $httpBackend;
    httpBackend.when("GET", "https://api.github.com/search/users?access_token="+token+"&q=tansaku")
                .respond( {
                  items: items
                });
    httpBackend.when("GET", "https://api.github.com/users/tansaku/repos")
                .respond( {
                  repos: repos
                });
  }));


  it('responds to query', function(){
    expect(search.query).toBeDefined();
  });


  it('returns search results', function() {
    search.query('tansaku').then(function(response) {
      expect(response.data.items).toEqual(items);
    });
    httpBackend.flush();
  });

  it('returns repos data of all users combined with first source of data', function() {
    search.full_data('tansaku').then(function(response) {
      expect(response.data.items[0].repos).toEqual(repos);
    });
    httpBackend.flush();
  });


});
