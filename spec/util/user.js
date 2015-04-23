/**
 * User class
 */
var userEmails = require('./data/userEmails.json');

var User = (function(){
  'use strict';

  function User (){}

  //Returns user
  User.prototype.getRandomUserByEmail = function(){
    var num = (Math.random() * (userEmails.emails.length - 0) + 0) - 1;
    var num = Math.round(num);
    return userEmails.emails[num];
  }

  return User;
})();

module.exports = User;
