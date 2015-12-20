var fs = require("fs");

return function (context, callback) {
	var fileNames;
	fs.readdir(".", function(err, files) {
		fileNames = files;
    });
    return callback(null, {result : "hello1238"});
}