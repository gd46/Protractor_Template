var LoginPage = require("../../spec/pages/loginPage.js");
var User = require("../../spec/util/user.js");

describe("Self Service", function() {
  var page = new LoginPage();
  var user = new User();
  browser.ignoreSynchronization = true;
  describe("visiting the login page", function() {
    it("Login user", function(){
      browser.sleep(2000);
      page.gotoLoginPage();
      browser.sleep(2000);
      var email = user.getRandomUserByEmail();
      page.typeEmail(email);
      page.typePassword("password");
      browser.sleep(2000);
      page.login();
      browser.sleep(5000);
    expect(browser.getCurrentUrl()).toBe(browser.baseUrl + '/#/');
    });
  });
});
