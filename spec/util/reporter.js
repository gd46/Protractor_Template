var fs = require('fs');
var path = require('path');

var Reporter = (function() {
    function Reporter() {
        // this.spec = jasmine.getEnv().currentSpec.results_.description;
        //    this.ifPassed = jasmine.getEnv().currentSpec.results_.items_[0].passed_;
        //    this.specName = this.spec.toString().split(' ').join('_');
    }
    Reporter.prototype.takeScreenShot = function(filename) {
        // If tests pass return to end program

        //if(this.ifPassed) return;
        //If tests fail use the browser function takeScreenShot to take a screenshot of the screen
        //var self = this;
        browser.takeScreenshot().then(function(png) {
            var decodedImage = new Buffer(png, 'base64');
            if (!fs.exists('./spec/screenshots/failed_tests')) {
                fs.mkdir('./spec/screenshots/failed_tests', function(error) {
                    if (error) {
                        console.log(error);
                    }
                });
            }
            var newFileName = filename.split(' ').join('_');
            var file = path.join('./spec/screenshots/failed_tests/', newFileName + '.png');
            var stream = fs.createWriteStream(file);
            stream.write(new Buffer(png, 'base64'));
            stream.end();
        });
    };
    Reporter.prototype.writeLogs = function() {
        var self = this;
        browser.manage().logs().get('browser').then(function(browserLogs) {
            // browserLogs is an array of objects with level and message fields
            if (!fs.exists('./spec/logs')) {
                fs.mkdir('./spec/logs', function(error) {
                    if (error) {
                        console.log(error);
                    }
                });
            }

            // Some messages seem to not have value set to a number, or type error.
            // Need to look at this more.
            // var errorFile = path.join('./spec/logs', 'error.log');
            // var stream = fs.createWriteStream(errorFile);
            // browserLogs.forEach(function(log) {
            //     if (log.level.value > 900) { // it's an error log
            //         stream.write("SEVERE ERROR: " + log.message + "\n");
            //     };
            // });

            // This will capture all browser console message
            var file = path.join('./spec/logs', 'error.log');
            var stream = fs.createWriteStream(file);
            browserLogs.forEach(function(log) {
                stream.write("WARNING: " + log.message + "\n");
            });
            stream.end();
        });
    };

    return Reporter;

})();

module.exports = Reporter;
