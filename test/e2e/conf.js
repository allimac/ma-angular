exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['githubProfileFeature.js'],
  capabilities: {
    browserName: 'chrome'
  },
  jasmineNodeOpts: {
    showColors: true, // Use colors in the command line report.
  }
};
