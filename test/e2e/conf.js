exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['githubProfileFeature.js'],
  capabilities: {
    browserName: 'chrome'
  },
  jasmineNodeOpts: {
    showColors: true, // Use colors in the command line report.
  },

  onPrepare: function() {

    var jasmineReporters = require('jasmine-reporters');

    jasmine.getEnv().addReporter(new jasmineReporters.TerminalReporter({
      verbosity: 10,
      color: true,
      showStack: true
    }));
  }

};
