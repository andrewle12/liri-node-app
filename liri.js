//Importing the necessary files
require("dotenv").config();
var fs = require("fs");
var request = require("request");
var keys = require("./keys.js");
var Spotify = require("node-spotify-api");
var moment = require("moment");
var spotify = new Spotify(keys.spotify);

//Capturing user input
var command = process.argv[2];
var userquery = "";
for (var i = 3; i < process.argv.length; i++) {
  userquery += process.argv[i] + " ";
}

//                                       **Functionality for Liri**

//Catch for no input on concert query
if (command === "concert-this"&&userquery===""){
    throw("Please enter a band or artist name");
}

//Bands in town API

if (command === "concert-this") {
  
  userquery = userquery.trim();
  var queryURL =
    "https://rest.bandsintown.com/artists/" +
    userquery +
    "/events?app_id=a9e44493bf1e4fc6448bdf5970c4dc0e&date=all";

  request(queryURL, function(error, response, body) {
    if (error) {
      console.log("error:", error);
    }

    newBody = JSON.parse(body);
    var date;


    if (newBody.length > 4) {
      for (var i = 0; i < 5; i++) {
           date = newBody[i].datetime;
        console.log("\n Venue: " + newBody[i].venue.name);
        console.log(
          "\n Location: " +
            newBody[i].venue.city +
            ", " +
            newBody[i].venue.country
        );
        date = moment(date, "YYYY-MM-DD").format("MM/DD/YYYY");
        console.log("\n Date: " + date);
        console.log("------------------------");
      }
    }
    if (newBody.length <= 4) {
      for (var i = 0; i < newBody.length; i++) {
        date = newBody[i].datetime;
        console.log("\n Venue: " + newBody[i].venue.name);
        console.log(
          "\n Location: " +
            newBody[i].venue.city +
            ", " +
            newBody[i].venue.country
        );
        date = moment(date, "YYYY-MM-DD").format("MM/DD/YYYY");
        console.log("\n Date: " + date);
        console.log("------------------------");
      }
    }
  
  });
}

//Catch for no input on song spotify

if (command === "spotify-this-song" && userquery === "") {
  userquery = "The Sign ace of base";
}

//Spotify API
if (command === "spotify-this-song") {
  spotify.search({ type: "track", query: userquery }, function(err, data) {
    if (err) {
      return console.log("Error occurred: " + err);
    }

    console.log("\nArtist: " + data.tracks.items[0].artists[0].name);
    console.log("Name: " + data.tracks.items[0].name);
    console.log("Preview URL: " + data.tracks.items[0].preview_url);
    console.log("Album: " + data.tracks.items[0].album.name);
  });
}

//OMDB API
if (command === "movie-this") {
}

//Notepad command
if (command === "do-what-it-says") {
}
