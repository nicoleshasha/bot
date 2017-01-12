var TwitterPackage = require('twitter');

var secret = require("./secret");

var Twitter = new TwitterPackage(secret);
//
// Twitter.post('statuses/update', {status: 'Testing'},  function(error, tweet, response){
//   if(error){
//     console.log(error);
//   }
//   console.log(tweet);  // Tweet body.
//   console.log(response);  // Raw response object.
// });

Twitter.stream('statuses/filter', {track: '#TestReadBot'}, function(stream) {
  stream.on('data', function(tweet) {
    console.log(tweet.text);
  });

  stream.on('error', function(error) {
    console.log(error);
  });
});
