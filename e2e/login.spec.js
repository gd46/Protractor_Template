var LoginPage = require("../pages/login_page.js");

describe("Self Service", function() {
  var page = new LoginPage();
  browser.ignoreSynchronization = true;
  describe("visiting the login page", function() {
    it("Login user", function(){
      browser.sleep(2000);
      page.gotoLoginPage();
      browser.sleep(2000);
      page.typeEmail("theresa.jacobs47@monimus.com");
      page.typePassword("password");
      browser.sleep(2000);
      page.login();
      browser.sleep(5000);
    expect(browser.getCurrentUrl()).toBe(browser.baseUrl + '/#/');
    });
  });
});
