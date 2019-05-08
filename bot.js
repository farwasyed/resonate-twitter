console.log('the bot is working');

var Twit = require('twit');

var config = require('./config');
// console.log(config);

var T = new Twit(config);
var Tid = '59952732';

var stream = T.stream('statuses/filter', {
  follow: Tid
});

console.log('Waiting for tweets, Id: ' + Tid);

stream.on('tweet', function (tweet){
  console.log(tweet);
});
//
// var tweet = {
//   status: '#coding Tweeting from node.js'
// }

// T.post('statuses/update', tweet, tweeted);
//
// function tweeted(err, data, response) {
//   if(err){
//     console.log("something went wrong!!")
//   } else {
//     console.log("it worked!");
//   }
// }

// var params = {
//   q: 'tech',
//   count: 2
// }
// T.get('search/tweets', params, gotData);
//
//
// function gotData(err, data, response) {
//   var tweets = data.statuses;
//   for(var i=0; i < tweets.length; i++){
//     console.log(tweets[i].text);
//   }
// }
