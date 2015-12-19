var fs = require("fs");

return function (context, callback) {
    console.log('testing webtask');
    var fileNames;
    fs.readdir(".", function(err, files) {
    	fileNames = files;
    });
    return callback(null, {result : "testing"});
}