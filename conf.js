exports.config = {
  seleniumAddress: "http://127.0.0.1:4444/wd/hub",
  seleniumPort: null,
  seleniumArgs: [],
  suites: {
    login: './e2e/login.spec.js'
  },
  // specs: [
  //   './e2e/**/*.spec.js'
  // ],
  capabilities: {
    'browserName': 'chrome'
  },
  onPrepare: function() {
     browser.driver.manage().window().maximize();
  },
  baseUrl: 'https://demo.monimus.me',
  jasmineNodeOpts: {
    onComplete: null,
    isVerbose: false,
    showColors: true,
    includeStackTrace: false
  }
};