var LoginPage = require("../pages/login_page.js");

describe("app", function() {
  var page = new LoginPage();
  describe("visiting the login page", function() {
    it("Login user", function(){
      page.visitPage();
      page.typeEmail("theresa.jacobs47@monimus.com");
      page.typePassword("password");
      page.login();
    });
  });
});