function getLocation(place) {

    // Run an initial search to identify the artist unique Spotify ID
    var queryURL = "https://api.teleport.org/api/cities/?search=" + place;
    console.log(queryURL)

    $.ajax({
        url: queryURL,
        method: 'GET'
    }).done(function(response) {
        console.log(response);
        //array of respones
        var responseArray = response._embedded['city:search-results']
        var responseArrayLength = responseArray.length;

        for (i = 0; i < responseArrayLength; i++) {
        	console.log('hello')
            var cityChoices = response._embedded['city:search-results'][i].matching_alternate_names[0].name;
            // return
            console.log(cityChoices)
            showList(cityChoices);
        }

    });
}

function showList(city) {
    var x = document.getElementById("listCities");
    var option = document.createElement("option");
    option.text = city;
    x.add(option);
}



$(document).ready(function() {

    $('#selectLocation').on('click', function() {
    // $('#selectLocation').keyup(function() {
        // Grab the location
        var location = $('#location').val().trim();
        console.log(location);

        // Run the location Function (Passing in the location as an argument)
        getLocation(location);

        return false;
    });
});
