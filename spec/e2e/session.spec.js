var Navigation = require('../../spec/util/navigation.js');
var Reporter = require('../../spec/util/reporter.js');
var chai = require('chai');
var expect = chai.expect;

describe("Session", function(){
	browser.ignoreSynchronization = true;
	describe("Click session title", function(){
		it("should click a session title", function(){
			var nav = new Navigation();
			nav.gotoSessionPage();
			browser.sleep(2000);
			//expect(browser.getCurrentUrl()).to.contain(browser.baseUrl + '/#/sessions');
		})
	})
})
// describe("Session", function(){
// 	var nav = new Navigation();
// 	// beforeEach(function(){
// 	// 		browser.ignoreSynchronization = false;
// 	// 		// browser.get(browser.baseUrl);
// 	//   //    	browser.findElement(by.model('email')).sendKeys("theresa.jacobs47@monimus.com");
// 	//   //    	browser.findElement(by.model('password')).sendKeys("password");
// 	//   //    	browser.findElement(by.xpath('//*[@id="main-content-wrapper"]/div/div/div/div[1]/div/div/section/div[2]/form/button')).click();
// 	// });
// 	// afterEach(function(){
// 	// 	//var reports = new Reporter();
// 	// 	//reports.takeScreenShot();
// 	// 	//reports.writeLogs();
// 	// })
// 	// describe("Create", function(){
// 	// 	it("Default", function(){
// 	// 		browser.sleep(2000);
// 	// 		nav.gotoSessionPage();
// 	// 		expect(browser.getCurrentUrl()).toBe(browser.baseUrl + '/#/sessions/user');
// 	// 	});
// 	// });
// 	describe("Click", function(){
// 		it("Session title", function(){
// 			var count = 0;
// 			//browser.sleep(2000);
// 			nav.gotoSessionPage();
			
// 			// Both are able to get to the first session title in the list and click it
// 			// var test = element.all(by.repeater('session in sessions')).get(0).all(by.xpath("//*[@class='session-name']/h2/a")).get(0);
// 			var test = element.all(by.xpath("//*[@class='session-name']/h2/a"));
// 			test.then(function(elements){
// 				count = elements.length;
// 			})
// 			var num = Math.floor((Math.random() * count) + 1);
// 			//browser.sleep(2000);
// 			// var scrollIntoView = function(element){
// 			// 	arguements[0].scrollIntoView();
// 			// };
// 			// var element = test.get(num);
// 			// browser.executeScript(scrollIntoView, element);
// 			test.get(0).click();
// 			//browser.sleep(5000);

			
// 		expect(browser.getCurrentUrl()).to.contain(browser.baseUrl + '/#/sessions');
// 		});
// 	});
// });