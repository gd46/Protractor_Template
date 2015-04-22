/**
 * User class
 */
var userEmails = require('./data/userEmails.json');

var Users = (function(){
  'use strict';

  function Users (){}

  //Returns user
  Users.prototype.getRandomUserEmail = function(){
    var num = (Math.random() * (userEmails.emails.length - 0) + 0) - 1;
    var num = Math.round(num);
    return userEmails.emails[num];
  }

  return Users;
})();

module.exports = Users;
