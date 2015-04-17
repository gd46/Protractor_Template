exports.config = {
  seleniumAddress: "http://127.0.0.1:4444/wd/hub",
  seleniumPort: null,
  seleniumArgs: [],
  suites: {
    login: './spec/e2e/login.spec.js',
    session: './spec/e2e/session.spec.js'
  },
  // specs: [
  //   './e2e/**/*.spec.js'
  // ],
  chromeOnly: true,
  chromeDriver: './node_modules/protractor/selenium/chromedriver',
  capabilities: {
    'browserName': 'chrome'
  },
  baseUrl: 'https://demo.monimus.me',
  'loggingPrefs': {
        'browser': 'ALL' // Selenium logging preferences
  },
  onPrepare: function() {
     browser.driver.manage().window().maximize();
     // Can use setSize(1600, 800) instead to test app responsiveness in the future
  },
 // allScriptsTimeout: 20000, Can set a timeout after all scripts
  jasmineNodeOpts: {
    onComplete: null,
    isVerbose: false,
    showColors: true,
    includeStackTrace: false
  }
};