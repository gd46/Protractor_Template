var Navigation = require('../../spec/util/navigation.js');

describe("Create Session", function(){
	var nav = new Navigation();
	beforeEach(function(){
		browser.ignoreSynchronization = false;
	});
	it("Default", function(){
		nav.gotoSessionPage();
		expect(browser.getCurrentUrl()).toBe(browser.baseUrl + '/#/sessions/user');
	});
});