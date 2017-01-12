var TwitterPackage = require('twitter');

var secret = require("./secret");

var Twitter = new TwitterPackage(secret);

console.log("Hello World!");
