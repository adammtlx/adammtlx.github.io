module.exports = function(context, callback) {
  // context.webhook contains the webhook payload provided by GitHub
  // context.data contains URL query and webtask token parameters
  console.log("testing webtask from github hook");
  callback(null, {result : "success"});
}