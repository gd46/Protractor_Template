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

    describe("Visit the login page", function() {
        context("Given that the user made an account", function() {
            it("should login user", function() {
                page.gotoLoginPage();
                browser.sleep(2000);
                //var email = user.getRandomUserByEmail();
                //page.typeEmail(email);
                page.typeEmail("theresa.jacobs47@monimus.com");
                page.typePassword("password");
                browser.sleep(2000);
                page.login();
                browser.sleep(5000);
                assert.eventually.equal(browser.getTitle(), 'showd.me: Learning Paths');
                assert.eventually.equal(browser.getCurrentUrl(), browser.baseUrl + '/#/')
            });
        });
    });
});
