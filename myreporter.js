/**
 * Module dependencies.
 */

var Base = require('./node_modules/mocha/lib/reporters/base'),
    cursor = Base.cursor,
    color = Base.color;

var fs = require('fs');
var path = require('path');
var Reporter = require('./spec/util/reporter.js');
var reports = new Reporter();
// var reports = new Reporter();
/**
 * Expose `Spec`.
 */

exports = module.exports = MyReporter;

/**
 * Initialize a new `Spec` test reporter.
 *
 * @param {Runner} runner
 * @api public
 */

function MyReporter(runner) {
    Base.call(this, runner);

    var self = this,
        stats = this.stats,
        indents = 0,
        n = 0;

    function indent() {
        return Array(indents).join('  ')
    }

    runner.on('start', function() {
        console.log();
    });

    runner.on('suite', function(suite) {
        ++indents;
        console.log(color('suite', '%s%s'), indent(), suite.title);
    });

    runner.on('suite end', function(suite) {
        --indents;
        if (1 == indents) console.log();
    });

    runner.on('pending', function(test) {
        var fmt = indent() + color('pending', '  - %s');
        console.log(fmt, test.title);
    });

    // For every test pass
    runner.on('pass', function(test) {
        if ('fast' == test.speed) {
            var fmt = indent() + color('checkmark', '  ' + Base.symbols.ok) + color('pass', ' %s');
            cursor.CR();
            console.log(fmt, test.title);
        } else {
            var fmt = indent() + color('checkmark', '  ' + Base.symbols.ok) + color('pass', ' %s') + color(test.speed, ' (%dms)');
            cursor.CR();
            console.log(fmt, test.title, test.duration);
        }
    });

    // For every test fail
    runner.on('fail', function(test, err) {
        cursor.CR();
        console.log(indent() + color('fail', '  %d) %s'), ++n, test.title);
        reports.takeScreenShot(test.title);
    });

    // Once tests finish 
    runner.on('end', function(test) {
        self.epilogue.bind(self);
        reports.writeLogs();
    });
}

/**
 * Inherit from `Base.prototype`.
 */

MyReporter.prototype.__proto__ = Base.prototype;
