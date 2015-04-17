exports.config = {
  seleniumAddress: "http://127.0.0.1:4444/wd/hub",
  seleniumPort: null,
  seleniumArgs: [],
  suites: {
    login: './e2e/login.spec.js',
    session: './e2e/session.spec.js'
  },
  // specs: [
  //   './e2e/**/*.spec.js'
  // ],
  capabilities: {
    'browserName': 'chrome'
  },
  chromeDriver: '../selenium/chromedriver',
  chromeOnly: true,
  'loggingPrefs': {
        'browser': 'ALL' // Selenium logging preferences
  },
  onPrepare: function() {
     browser.driver.manage().window().maximize();
     // Can use setSize(1600, 800) instead to test app responsiveness in the future
  },
 // allScriptsTimeout: 20000, Can set a timeout after all scripts
  baseUrl: 'https://demo.monimus.me',
  jasmineNodeOpts: {
    onComplete: null,
    isVerbose: false,
    showColors: true,
    includeStackTrace: false
  }
};