
$(document).ready(function()
{

	// HTML5 Placeholder Workaround (Search)
	if(!Modernizr.input.placeholder)
	{
		$('[placeholder]').focus(function() 
		{
		  var input = $(this);
		  if (input.val() == input.attr('placeholder')) 
		  {
			input.val('');
			input.removeClass('placeholder');
		   }
		   
		}).blur(function() 
		{
		  	var input = $(this);
		  	if (input.val() == '' || input.val() == input.attr('placeholder')) 
			{
				input.addClass('placeholder');
				input.val(input.attr('placeholder'));
			}
		}).blur();
		
		$('[placeholder]').parents('form').submit(function() 
			{
			  $(this).find('[placeholder]').each(function() {
				var input = $(this);
				if (input.val() == input.attr('placeholder')) {
				  input.val('');
			 }
		  })
		});
	
	}
	
	// Home Slider
	$('#slider').nivoSlider(
		{
			directionNav: false,
			controlNav: false,
			pauseTime : 4000,
			boxCols	: 10,
			slices	: 18,
			boxRows	: 6,
			randomStart	: true
		}
	);
	
	// Board of Directors
	$('.bd').fancybox({
		width: '600',
		centerOnScroll	: true	
	});


});