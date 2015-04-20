var fs = require('fs');
var path = require('path');

var Reporter = (function () {
    function Reporter() {
    	this.spec = jasmine.getEnv().currentSpec.results_.description;
        this.ifPassed = jasmine.getEnv().currentSpec.results_.items_[0].passed_;
        this.specName = this.spec.toString().split(' ').join('_');
    }
    Reporter.prototype.takeScreenShot = function () {
        // If tests pass return to end program
    	if(this.ifPassed) return;
        //If tests fail use the browser function takeScreenShot to take a screenshot of the screen
        var self = this;
        browser.takeScreenshot().then(function(png){
            var decodedImage = new Buffer(png, 'base64');
            var file = path.join('./spec/screenshots/failed_tests/', self.specName + '.png');
            var stream = fs.createWriteStream(file);
            stream.write(new Buffer(png, 'base64'));
            stream.end();
        });
    };
    Reporter.prototype.writeLogs = function () {
        browser.manage().logs().get('browser').then(function(browserLogs){
            var stream = fs.createFileStream('../logs/' + this.specName + '.log', browserLogs);
            stream.write(new Buffer(log, 'base64'));
            stream.end();
        });
    };
    
    return Reporter;

})();

module.exports = Reporter;