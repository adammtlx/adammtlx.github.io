return function (context, callback) {
    console.log('testing webtask');
    return callback(null, {result : "success"});
}