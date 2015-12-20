var fs = require("fs");

return function (context, callback) {
	fs.readdir(".", function(err, files) {
    });
    return callback(null, {result : "hello1237"});
}