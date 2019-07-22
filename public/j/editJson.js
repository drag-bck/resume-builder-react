var jsonDATA = JSON.stringify(obj);

var fs = require('fs');
fs.writeFile("resume.json",obj , function(err, result) {
    if(err) console.log('error', err);
});