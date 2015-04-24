var Navigation = require('../../spec/util/navigation.js');
var Reporter = require('../../spec/util/reporter.js');

describe("Session", function(){
	var nav = new Navigation();
	beforeEach(function(){
			browser.ignoreSynchronization = true;
			// browser.get(browser.baseUrl);
	  //    	browser.findElement(by.model('email')).sendKeys("theresa.jacobs47@monimus.com");
	  //    	browser.findElement(by.model('password')).sendKeys("password");
	  //    	browser.findElement(by.xpath('//*[@id="main-content-wrapper"]/div/div/div/div[1]/div/div/section/div[2]/form/button')).click();
	});
	afterEach(function(){
		var reports = new Reporter();
		//reports.takeScreenShot();
		reports.writeLogs();
	})
	// describe("Create", function(){
	// 	it("Default", function(){
	// 		browser.sleep(2000);
	// 		nav.gotoSessionPage();
	// 		expect(browser.getCurrentUrl()).toBe(browser.baseUrl + '/#/sessions/user');
	// 	});
	// });
	describe("Click", function(){
		it("Session title", function(){
			var count = 0;
			browser.sleep(2000);
			nav.gotoSessionPage();
			
			// Both are able to get to the first session title in the list and click it
			// var test = element.all(by.repeater('session in sessions')).get(0).all(by.xpath("//*[@class='session-name']/h2/a")).get(0);
			var test = element.all(by.xpath("//*[@class='session-name']/h2/a"));
			test.then(function(elements){
				count = elements.length;
			})
			var num = Math.floor((Math.random() * count) + 1);
			browser.sleep(2000);
			test.get(0).click();
			browser.sleep(5000);

			
		expect(browser.getCurrentUrl()).toContain(browser.baseUrl + '/#/sessions');
		});
	});
});