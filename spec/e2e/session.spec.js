var Navigation = require('../../spec/util/navigation.js');

describe("Session", function(){
	var nav = new Navigation();
	beforeEach(function(){
			browser.ignoreSynchronization = true;
			browser.get(browser.baseUrl);
	     	browser.findElement(by.model('email')).sendKeys("theresa.jacobs47@monimus.com");
	     	browser.findElement(by.model('password')).sendKeys("password");
	     	browser.findElement(by.xpath('//*[@id="main-content-wrapper"]/div/div/div/div[1]/div/div/section/div[2]/form/button')).click();
	});
	describe("Create", function(){
		//var nav = new Navigation();
		// beforeEach(function(){
		// 	browser.ignoreSynchronization = true;
		// 	browser.get(browser.baseUrl);
	 //     	browser.findElement(by.model('email')).sendKeys("theresa.jacobs47@monimus.com");
	 //     	browser.findElement(by.model('password')).sendKeys("password");
	 //     	browser.findElement(by.xpath('//*[@id="main-content-wrapper"]/div/div/div/div[1]/div/div/section/div[2]/form/button')).click();
		// });
		it("Default", function(){
			browser.sleep(2000);
			nav.gotoSessionPage();
			expect(browser.getCurrentUrl()).toBe(browser.baseUrl + '/#/sessions/user');
		});
	});
});


