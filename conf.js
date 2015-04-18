exports.config = {
  seleniumAddress: "http://127.0.0.1:4444/wd/hub",
  seleniumPort: null,
  seleniumArgs: [],
  suites: {
    login: './spec/e2e/login.spec.js',
    session: './spec/e2e/session.spec.js'
  },
  // specs: [
  //   './spec/e2e/**/*.spec.js'
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
     //browser.ignoreSynchronization = true;
     // browser.get(browser.baseUrl);
     // browser.findElement(by.model('email')).sendKeys("theresa.jacobs47@monimus.com");
     // browser.findElement(by.model('password')).sendKeys("password");
     // browser.findElement(by.xpath('//*[@id="main-content-wrapper"]/div/div/div/div[1]/div/div/section/div[2]/form/button')).click();
  },
  // onComplete: function() {

  // },
 // allScriptsTimeout: 20000, Can set a timeout after all scripts
  jasmineNodeOpts: {
    onComplete: null,
    isVerbose: false,
    showColors: true,
    includeStackTrace: false
  }
};