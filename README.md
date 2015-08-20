# Getting Started

1. Clone [repo] (https://github.com/mykabam/showdme-protractor.git)
2. Run `npm install` 
3. Run `sudo webdriver-manager update`, this will install and update webdriver 
4. Open terminal
5. In one terminal window run `webdriver-manager start` to start a selenium standalone server
6. In another terminal window you can now run `protractor conf.js` to run tests

# File structure explanation

1. Before you begin create a new branch with the name of your section
2. spec if the root directory for the whole testing framework
3. `e2e`, this is where all integration tests go. These tests should only have calls to your page object methods. Their should be no protractor code here.
4. `pages`, this is where your page objects go. Each section of the site, ie: sessions, learningpaths, mycontent, etc should have a page object. This is where you put the protractor selectors, and perform protractor methods. 
5. `util`, this is where we have build some common functions for navigation, reporting, getting user data. This section will be constantly built on. If you have a function that you believe everyone can benefit from and you think it belongs here notify Giuseppe and he will add it here and merge it to master. 
6. You should not have to worry about adding new things to .gitignore it should be covered. Should you find that something should be added here also notify Giuseppe.

# Setup a config file
```javascript
exports.config = {
  seleniumAddress: "http://127.0.0.1:4444/wd/hub",
  seleniumPort: null,
  seleniumArgs: [],
  suites: {
    login: './spec/e2e/login.spec.js',  // Handles loginning before every test
    session: './spec/e2e/session.spec.js' // Add your test spec as follows
  },
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
  framework: 'mocha',
  mochaOpts: {
    ui: 'bdd',
    reporter: 'myreporter.js',
    timeout: 100000
```

# How to add my test to conf.js file

1. Navigate to the conf.js file in the root directory
2. Go to the suites section of the conf.js file
3. The name on the left is a name you choose, ie: the name of your section
4. The path on the right is the path to your spec file, the spec file is your suite


# Important Notes

1. Running protractor conf.js will runs all tests in the order that you set up in the conf.js file
2. You should not change the order the test run, make sure login is always the first test in the order
3. Running selectors live: cd node_modules/protractor ./bin/elementexplorer.js URL click tab for suggestions

# Resources
1. [Protractor for Angularjs](http://ramonvictor.github.io/protractor/slides/#/)
2. [Protractor FAQ](https://github.com/angular/protractor/blob/master/docs/faq.md)
3. [onPrepare Example] (https://github.com/angular/protractor/blob/master/spec/withLoginConf.js)
4. [Run tests in parallel] (http://blog.yodersolutions.com/run-protractor-tests-in-parallel/)
5. [File structure example] (https://github.com/angular/protractor/issues/1283)
6. [Protractor Page Object Example] (http://www.thoughtworks.com/insights/blog/using-page-objects-overcome-protractors-shortcomings)
7. [Protractor Setup/Page Object Example] (https://teamgaslight.com/blog/getting-started-with-protractor-and-page-objects-for-angularjs-e2e-testing)
8. [Protractor Page Object Example] (http://spin.atomicobject.com/2014/08/08/page-objects-angular-protractor-specs/)
9. [Protractor Angular Setup/Selectors/Etc] (http://angular.github.io/protractor/#/)
10. [Google testing blog] (http://googletesting.blogspot.com/2014/11/protractor-angular-testing-made-easy.html)
11. [Set up afterEach function to log and screenShot errors after each test] (http://eitanp461.blogspot.com/2014/01/advanced-protractor-features.html)
12. [Asynchronous Testing with Protractor’s ControlFlow] (http://spin.atomicobject.com/2014/12/17/asynchronous-testing-protractor-angular/)
13. [ng-conf 2014] (http://ng-conf.ng-learn.org/)
14. [future ng-conf dates etc] (http://www.ng-conf.org/)
15. [Angular protracter e2e cheatsheet] (http://webslainte.blogspot.com/2014/01/angular-js-protractor-e2e-cheatsheet.html)
16. [Protractor using mocha and chai] (http://litutech.blogspot.com/2014/02/an-example-of-use-of-protractor-with.html)
