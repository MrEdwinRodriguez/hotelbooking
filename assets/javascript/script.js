

function getLocation(place) {

    // Run an initial search to identify the artist unique Spotify ID
    var queryURL = "https://api.teleport.org/api/cities/?search=" + place;
    console.log(queryURL)

    $.ajax({
        url: queryURL,
        method: 'GET'
    }).done(function(response) {

        // Prints the entire object to console
        console.log(response);
        console.log(response._embedded['city:search-results'][0].matching_alternate_names[0].name)

        // var artistID = response.artists.items[0].id;

        // Then we build a SECOND URL to query another Spotify endpoint (this one for the tracks)
        // var queryURLTracks = "https://api.spotify.com/v1/artists/" + artistID + "/top-tracks?country=US";

        // We then run a second AJAX call to get the tracks associated with that Spotify ID
        // $.ajax({ url: queryURLTracks, method: 'GET' }).done(function(trackResponse) {

            // Gets the tracks
            // console.log(trackResponse);

            // Builds a Spotify player playing the top song associated with the artist. (NOTE YOU NEED TO BE LOGGED INTO SPOTIFY)
            // var player = '<iframe src="https://embed.spotify.com/?uri=spotify:track:' + trackResponse.tracks[0].id + '" frameborder="0" allowtransparency="true"></iframe>';

            // Appends the new player into the HTML
            // $("#playerDiv").append(player)
        // })
    });
}





$('#selectLocation').on('click', function() {

    // Grab the location
    var location = $('#location').val().trim();
    console.log(location);

    // Run the location Function (Passing in the location as an argument)
    getLocation(location);

    return false;
});
