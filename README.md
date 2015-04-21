# What this framework includes
1. Set up file structure
2. Takes screenshots if tests fail
3. Grabs console errors and write them to log file
4. Set up page objects

# Getting Started

1. sudo npm install protractor -g
2. npm install protractor --save
3. sudo webdriver-manager update

# Setup a config file
```javascript
exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',

  capabilities: {
    'browserName': 'chrome'
  },

  specs: ['example-spec.js'],

  jasmineNodeOpts: {
    showColors: true
  }
};
```

# How to use suite instead of specs
```javascript
exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',

  capabilities: {
    'browserName': 'chrome'
  },

  suites: {
    login: './e2e/login.spec.js'
  },

  jasmineNodeOpts: {
    showColors: true
  }
};
```
Use this command: `protractor conf.js --suite login` to run a specific suite. Where conf.js is the 
path to your conf file, followed by `--suite` followed by the name of the suite you want to run. 
# Running your tests

1. Start webdriver server
2. webdriver-manager start
3. Open new terminal window
4. Run protractor by typing `protractor` path to conf file

# Important Notes

1. You don’t need to add waits or sleeps to your test. Protractor can communicate with your AngularJS app automatically and execute the next step in your test the moment the webpage finishes pending tasks, so you don’t have to worry about waiting for your test and webpage to sync. 
2. Can shut of synchronization should you choose to by using : `browser.ignoreSynchronization = true;`
3. Can delete all cookies by using : `browser.manage().deleteAllCookies();`
4. Running protractor conf.js will runs all tests in the order that you set up in the conf.js file
5. Protractor knows when the app is done with http requests, timeout, and interval
6. Http or timeout will cause protractor to never know if your tests are done and will cause timeout. Instead use interval and Protractor will ignore and not get hung up.
7. Running selectors live: cd node_modules/protractor ./bin/elementexplorer.js URL click tab for suggestions

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
