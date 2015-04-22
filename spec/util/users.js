/**
 * User class
 */

var userEmails = require('./data/userEmails.json');

var Users = {

  //This returns a random email
  getRandomUserEmail: function(){
    var num = (Math.random() * (userEmails.emails.length - 0) + 0) - 1;
    var num = Math.round(num);
    return userEmails.emails[num];
  }
};

module.exports = Users;