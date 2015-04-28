var SessionPage = (function() {
    function SessionPage() {
        //this.newSession = "//*[@id='left-menu']/li[1]/a/div/div";
        this.newSession = element(by.xpath("//*[@id='left-menu']/li[1]/a/div"));
        this.sessionName = element(by.xpath("//*[@id=\"main-content-inner\"]/div/div/div/div[1]/div[1]/input"));
        this.skillCovered = element(by.xpath("//*[@id=\"main-content-inner\"]/div/div/div/div[1]/div[2]/div/div/ul/li/input"));
    };

    SessionPage.prototype.createNewSession = function() {
        this.newSession.click();
    };

    SessionPage.prototype.typeSessionName = function(title) {
        this.sessionName.sendKeys(title);
    }

    SessionPage.prototype.typeSessionSkill = function(skill) {
        this.skillCovered.sendKeys(skill);
        browser.sleep(2000);
    }


    return SessionPage;

})();

module.exports = SessionPage;
