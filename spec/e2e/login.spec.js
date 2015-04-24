var LoginPage = require("../../spec/pages/loginPage.js");
var User = require("../../spec/util/user.js");
var chai = require('chai');
var expect = chai.expect;
var assert = chai.assert;
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

describe("Self Service", function() {
  var page = new LoginPage();
  var user = new User();
  browser.ignoreSynchronization = true;
  describe("visiting the login page", function() {
    it("Login user", function(){
      page.gotoLoginPage();
      browser.sleep(2000);
      //var email = user.getRandomUserByEmail();
      //page.typeEmail(email);
      page.typeEmail("theresa.jacobs47@monimus.com");
      page.typePassword("password");
      browser.sleep(2000);
      page.login();
      browser.sleep(5000);
      expect(browser.getTitle()).to.eventually.equal("showd.me: Learning Paths");
      //expect(browser.getCurrentUrl()).to.eventually.equal(browser.baseUrl + '/#/');

    });
  });
});
