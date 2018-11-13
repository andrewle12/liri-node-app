

//Importing the necessary files 
require("dotenv").config();
var fs = require("fs");
var request = require("request");
var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var moment = require("moment");

var spotify = new Spotify(keys.spotify);






var command = process.argv[2];
var userquery ="";
for (var i=3; i<process.argv.length; i++){
    userquery+=process.argv[i]+" ";
}

if (command==="concert-this"){

};

//Catch for no input on song spotify
if (command==="spotify-this-song"&&userquery === ""){
    userquery = "The Sign ace of base";
}

if (command==="spotify-this-song"){
    spotify.search({ type: 'track', query: userquery }, function(err, data) {
        if (err) {
          return console.log('Error occurred: ' + err);
        }

      
       
      console.log("Artist: "+data.tracks.items[0].artists[0].name); 
      console.log("Name: "+data.tracks.items[0].name); 
      console.log("Preview URL: "+data.tracks.items[0].preview_url); 
      console.log("Album: "+data.tracks.items[0].album.name); 


      });

};

if (command==="movie-this"){

};

if (command==="do-what-it-says"){

};

