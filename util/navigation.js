var Navigation = (function () {
    function Navigation() {
    	this.rightSideBarNavigation = element(by.xpath("//div[@id='saiw-inner']/span[2]"));
    	this.sessionsLink = element(by.xpath("//*[@id='lp-dd-menu']/li[2]"));
    }
    Navigation.prototype.gotoSessionPage = function () {
    	this.rightSideBarNavigation.click();
    	this.sessionsLink.click();
    };

    return Navigation;

})();

module.exports = Navigation;