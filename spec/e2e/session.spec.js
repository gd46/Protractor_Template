var Navigation = require('../../spec/util/navigation.js');
var Reporter = require('../../spec/util/reporter.js');
var SessionPage = require('../../spec/pages/sessionPage.js');
var chai = require('chai');
var expect = chai.expect;
var assert = chai.assert;
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

/* 
 * Define test suite with a descibe 
 * The string should read the name of your section
 */
describe("Session", function() {
    var nav = new Navigation();
    var sessionPage = new SessionPage();
    browser.ignoreSynchronization = true;

    /*
     * 'describe' is used for naming the action
     * 'context' is used for defining the scenario 
     * 'context' statements begin with keywords like given
     * 'it' is the name of your test
     * 'it' statements begin with keywords like should, will
     */
    describe("Create session", function() {
        context("Given user only fills in session name, skills covered, and description", function() {
            it("should create a default session", function() {
                nav.gotoSessionPage();
                browser.sleep(2000);
                sessionPage.createNewSession();
                browser.sleep(2000);
                sessionPage.typeSessionName("test");
                browser.sleep(2000);
                sessionPage.typeSessionSkill("html");
                browser.sleep(5000);
                assert.eventually.match(browser.getCurrentUrl(), /sessions\/create/, "should be on create session page");
            });
        });
    });
    describe("Click session title", function() {
        context("Given that the session is yours", function() {
            it("should click a session title", function() {

                var count = 0;
                nav.gotoSessionPage();

                var test = element.all(by.xpath("//*[@class='session-name']/h2/a"));
                test.then(function(elements) {
                    count = elements.length;
                })
                var num = Math.floor((Math.random() * count) + 1);
                browser.sleep(2000);
                test.get(0).click();
                browser.sleep(5000);
                assert.eventually.match(browser.getCurrentUrl(), /sessions\/[a-zA-Z0-9]{24}\/chat/, "should be on session chat");
                //expect(browser.getCurrentUrl(), "url should match regex pattern").to.eventually.match(/sessions\/[a-zA-Z0-9]{24}\/chat/);
            });
        });
    });
});
