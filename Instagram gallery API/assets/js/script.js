$(function(){
	
	// Configure the Spectragram plugin. Follow the instructions
	// in the tutorial on how to generate an access token
	jQuery.fn.spectragram.accessData = {
		accessToken: '287392478.296f406.9c4b6b1c385c4947ae73b5da4a704f76',
		clientID: '296f4067227a434b90389a14275b2731'
	};
	
	// Run a search about 'coffee' on instagram 
	// and display the results
	$('#gallery').spectragram('getUserFeed',{
		
		query: 'anne55n',
		
        
          full_name: 'anne55n',
		
		max:9
	});
	
	$('#gravityButton').click(function(e){
		e.preventDefault();
		
		// Turn on the gravity!
		$('body').jGravity({
			target: '#gallery li',
			ignoreClass: 'ignoreMe',
			weight: 25,
			depth: 5,
			drag: true
		});
		
		// Disabling clicking on the photos (so they can
		// be dragged without redirecting the browser)
		$('#gallery li').click(function(e){
			e.preventDefault()
		});
		
		// Remove some of the elements as they get in the way
		$('footer, #gravityButton').remove();
	});
	
});
