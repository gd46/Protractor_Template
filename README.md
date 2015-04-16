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

# Running your tests

1. Start webdriver server
2. webdriver-manager start
3. Open new terminal window
4. Run protractor by typing path to conf file

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
