// request = require('request');

return function (context, callback) {
	console.dir("test");
	console.debug("test1");
	console.log("test");
    return callback(null, {result : context.webhook.repository.full_name});
}