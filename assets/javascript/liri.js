console.log("The bot is starting!");

// This is an import statement. 
var Twit = require("twit");
var config = require("./config");
console.log(config);

// Use OAuth to authenticate, creating a new Twit object
var T = new Twit(config);

var params = {
	q: 'Mr_Stinky_Feet since:2017-01-24',
	count: 20
};

T.get('search/tweets', params, gotData);

function gotData(err, data, response) {
	var tweets = data.statuses;
	for (var i = 0; i < tweets.length; i++) {
	console.log(tweets[i].text);
};
    


var spotify = require('spotify');
 
spotify.search({ type: 'track', query: 'the sign' }, function(err, data) {
    if ( err ) {
        console.log('Error occurred: ' + err);
        return;
    }
 
    // Do something with 'data' 
});
    
    
    
var omdb = require('omdb');
 
omdb.search('', function(err, movies) {
    if(err) {
        return console.error(err);
    }
 
    if(movies.length < 1) {
        return console.log('No movies were found!');
    }
 
    movies.forEach(function(movie) {
        console.log('%s (%d)', movie.title, movie.year);
    });
 
});
 
omdb.get({ title: 'Mr.      Nobody', year: 2009 }, true, function(err, movie) {
    if(err) {
        return console.error(err);
    }
 
    if(!movie) {
        return console.log('Movie not found!');
    }
 
    console.log('%s (%d) %d/10', movie.title, movie.year, movie.imdb.rating);
    console.log(movie.plot);
 
});