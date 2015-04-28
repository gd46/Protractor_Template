var SessionPage = (function() {
    function SessionPage() {
        //this.newSession = "//*[@id='left-menu']/li[1]/a/div/div";
        this.newSession = element(by.xpath("//*[@id='left-menu']/li[1]/a/div"));
    };

    SessionPage.prototype.createNewSession = function() {
        this.newSession.click();
    }

    return SessionPage;

})();

module.exports = SessionPage;
