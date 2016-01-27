exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['githubProfileFeature.js'],
  multiCapabilities: [{
    browserName: 'firefox'
  }, {
    browserName: 'chrome'
  }, {
    browserName: 'safari'
  }],
  jasmineNodeOpts: {
    showColors: true, // Use colors in the command line report.
  }
};
