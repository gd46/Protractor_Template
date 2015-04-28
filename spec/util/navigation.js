var Navigation = (function () {
    function Navigation() {
    	this.rightSideBarNavigation = element(by.xpath("//div[@id='saiw-inner']/span[2]"));
    	this.sessionsLink = element(by.xpath("//*[@id='lp-dd-menu']/li[2]"));
    }
    Navigation.prototype.gotoSessionPage = function () {
    	browser.sleep(2000);
    	this.rightSideBarNavigation.click();
    	browser.sleep(2000);
    	this.sessionsLink.click();
    	browser.sleep(5000);
    };
    Navigation.prototype.scrollIntoView = function () {
        // var scrollIntoView = function(element){
            //  arguements[0].scrollIntoView();
            // };
            // var element = test.get(num);
            // browser.executeScript(scrollIntoView, element);
    }

    return Navigation;

})();

module.exports = Navigation;