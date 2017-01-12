var TwitterPackage = require('twitter');

var secret = require("./secret");

var Twitter = new TwitterPackage(secret);

Twitter.stream('statuses/filter', {track: '#testingbotshasha'}, function(stream) {

  stream.on('data', function(tweet) {

    console.log(tweet.text);

    var statusObj = {status: "Hi @" + tweet.user.screen_name + ", thanks for programming me."}

    Twitter.post('statuses/update', statusObj,  function(error, tweetReply, response){

      if(error){
        console.log(error);
      }

      console.log(tweetReply.text);
    });
  });

  stream.on('error', function(error) {
    console.log(error);
  });
});
