require("dotenv").config();

var keys = require("./keys.js");

var spotify = new Spotify(keys.spotify);





// commands the app needs to take in 
// concert-this
// spotify-this-song
// movie-this
// do-what-it-says