# Liri Node Application

# Required to run application

* You need to supply your own `.env` file consisting of a Spotify ID and a Spotify secret for the app to have Spotify functionality
* Be sure to run npm install to download the necessary node modules before running the application

# Accepted inputs

* spotify-this-song
* concert-this
* movie-this
* do-what-it-says

The application can accept any one of the above inputs followed by a space and search term. The search term can contain spaces between multiple words.

![node input](/images/Capture.PNG)



# Description

* The node Liri application is a text interpretor that can accept song, artist, and movie title inputs and retrieve information from Spotify, Bands in Town, and OMDB (Online Movie Database).

##spotify-this-song

*Retrieves data from the Spotify API
*Requires a Spotify ID and Secret in a .env file

![spotify input 1](/images/Capture1.PNG)


*No song input defaults to a search for "The Sign" by Ace of Base

![spotify input 2](/images/Capture2.PNG)

##concert-this

*Retrieves data from the Bands in Town API
*Lists up to 5 events that the band or artist has performed

![bands input 1](/images/Capture3.PNG)

*No artist input defaults to a message asking for input

![bands input 2](/images/Capture4.PNG)



