/**
 * Extracts email and returns a json file only containng emails. This is 
 * only used to extract from the user.json file. The file structure is intended 
 * for:  
 * https://github.com/mykabam/showdme/blob/master/migrations/data/import-profiles.json
 */

var fs = require('fs');
var users = require('./users.json');

var userIndex;
var userEmails = [];
var userEmailIndex = 0;
var userEmailContent;

//Will loops though the users
for(userIndex in users){
  userEmails[userEmailIndex] = users[userIndex].email;
  userEmailIndex++;
}

console.log('Emails in array');
console.log(userEmails);

//Create content to be written out
var userEmailContent = '{\"emails\": [';

for (var i = 0; i < userEmails.length; i++){
  
  if(i ==  userEmails.length -1){
    userEmailContent += '\"'+userEmails[i]+'\"';
  }else{
    userEmailContent += '\"'+userEmails[i]+'\",';
  }
}

userEmailContent += ']}';

fs.writeFile('userEmails.json', userEmailContent, function(err){
  if(err) throw err;
});