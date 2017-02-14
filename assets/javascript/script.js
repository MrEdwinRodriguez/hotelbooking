console.log('hello')

// "https://api.teleport.org/api/cities/?search=New york"




		$('#selectLocation').on('click', function(){

		// Grab the location
		var artist = $('#location').val().trim();
		console.log(artist);

		// Run the Artist Player Function (Passing in the Artist as an Argument)
		// getArtistTrack(artist);

		return false;
	});
