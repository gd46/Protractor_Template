var Navigation = require('../../spec/util/navigation.js');
var Reporter = require('../../spec/util/reporter.js');

describe("Session", function(){
	var nav = new Navigation();
	beforeEach(function(){
			browser.ignoreSynchronization = true;
			browser.get(browser.baseUrl);
	     	browser.findElement(by.model('email')).sendKeys("theresa.jacobs47@monimus.com");
	     	browser.findElement(by.model('password')).sendKeys("password");
	     	browser.findElement(by.xpath('//*[@id="main-content-wrapper"]/div/div/div/div[1]/div/div/section/div[2]/form/button')).click();
	});
	afterEach(function(){
		var reports = new Reporter();
		reports.takeScreenShot();
		//reports.writeLogs();
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
			browser.sleep(2000);
			nav.gotoSessionPage();
			// element.all(by.repeater('session in sessions')).then(function(sessions) {
			// 	console.log(sessions.row(1).getText());
			//    // for(i=0;i<sessions.length;i++){
			//    // 		var tmp = element(by.repeater('session in sessions').row(i)).getText();
			//    // 		//.element(by.xpath('//*[@class="course-items"]/div/ul/li[' + i + ']/div/div[1]/div/h2/a')).getText();
			//    // 		console.log(tmp);
			//    // }
			// });

			// var test = element.all(by.repeater('session in sessions')).all(by.css(".session-name")).then(function(title){
			// 	title[1].click();
			// })
			// var test = element.all(by.repeater('session in sessions')).then(function(title){
			// 	console.log(title[1].getText());
			// 	//title[1].click();
			// })
			// var test = element.all(by.css('.session-name')).get(0);
			//   test.getText().then(function (txt) {
			//   console.log(txt);
			// });

			  
			// var test = element.all(by.repeater('session in sessions')).get(0);
			// test.getText().then(function (txt) {
			//   console.log(txt);
			// });
		expect(browser.getCurrentUrl()).toBe(browser.baseUrl + '/#/');
		});
	});
});