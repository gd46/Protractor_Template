exports.config = {
  seleniumAddress: "http://127.0.0.1:4444/wd/hub",
  seleniumPort: null,
  seleniumArgs: [],
  specs: [
    './e2e/**/*.spec.js'
  ],
  capabilities: {
    'browserName': 'chrome'
  },
  baseUrl: 'https://demo.monimus.me',
  jasmineNodeOpts: {
    onComplete: null,
    isVerbose: false,
    showColors: true,
    includeStackTrace: false
  }
};