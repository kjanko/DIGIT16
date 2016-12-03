var toggled = false;

( function($) 
{
	$(document).ready( function() 
	{ 	
		$('#contact').hide();
		$('#social').hide();

		$('.my-tooltip').hide();
		setTimeout(function(){
			$('#section-preloader').fadeOut(1000);
		}, 2000);
		
		setTimeout(function(){
			$('.my-tooltip').slideDown(1000);
		}, 2300);
		
		var $logo = $('#logo');
		var $search = $('#search');
		var $contact =$('#mail');
		var $social = $('#location')
		
		/* contact */
		$contact.click(function()
		{
			$('#contact').removeClass('slideOutUp');
			$('#contact').show();
			$('#contact').addClass('animated');
			$('#contact').addClass('slideInDown');
		});
		
		$('.back-to-menu').click(function()
		{
			$('#contact').removeClass('slideInDown');
			$('#contact').addClass('slideOutUp');
			
			setTimeout(function(){
				$('#contact').hide();
			}, 1000);
		});
// social
		$social.click(function()
		{
			$('#social').removeClass('slideOutUp');
			$('#social').show();
			$('#social').addClass('animated');
			$('#social').addClass('slideInDown');
		});
		
		$('.back-to-menu').click(function()
		{
			$('#social').removeClass('slideInDown');
			$('#social').addClass('slideOutUp');
			
			setTimeout(function(){
				$('#social').hide();
			}, 1000);
		});
		
		
		/* search */
		$search.click(function(){
			$('#search-page').addClass('open');
			$('#search-page > input[type="search"]').focus();
		});
		
		$('#search-page .close').click(function()
		{
			$('#search-page').removeClass('open');
		});
		
		/* tooltip */
		
		$('.my-tooltip').click(function()
		{
			$('.my-tooltip').fadeOut(500);
			$logo.trigger( "click" );
		});
		
		/* logo */
		$logo.fadeIn(500);
		$logo.click
		(
			function()
			{
				$('.my-tooltip').fadeOut(500);
				if(!toggled)
				{
					$('#absolute-canvas a').css('opacity', 1);
					$('#absolute-canvas a ~ .deg45 i').css('transform', 'rotate(315deg)');
					$('#absolute-canvas a ~ .deg135 i').css('transform', 'rotate(225deg)');
					$('#absolute-canvas a ~ .deg180 i').css('transform', 'rotate(180deg)');
					$('#absolute-canvas a ~ .deg225 i').css('transform', 'rotate(135deg)');
					$('#absolute-canvas a ~ .deg315 i').css('transform', 'rotate(45deg)');
					$('#absolute-canvas .deg0').css('transform', 'translate(23vw)');
					$('#absolute-canvas .deg45').css('transform', 'rotate(45deg) translate(23vw)');
					$('#absolute-canvas .deg135').css('transform', 'rotate(135deg) translate(23vw)');
					$('#absolute-canvas .deg180').css('transform', 'rotate(180deg) translate(23vw)');
					$('#absolute-canvas .deg225').css('transform', 'rotate(225deg) translate(23vw)');
					$('#absolute-canvas .deg315').css('transform', 'rotate(315deg) translate(23vw)');
					toggled = true;
				}
				else
				{
					$('#absolute-canvas a').css('opacity', 0);
					$('#absolute-canvas a ~ .deg45 i').css('transform', 'rotate(315deg)');
					$('#absolute-canvas a ~ .deg135 i').css('transform', 'rotate(225deg)');
					$('#absolute-canvas a ~ .deg180 i').css('transform', 'rotate(180deg)');
					$('#absolute-canvas a ~ .deg225 i').css('transform', 'rotate(135deg)');
					$('#absolute-canvas a ~ .deg315 i').css('transform', 'rotate(45deg)');
					$('#absolute-canvas .deg0').css('transform', 'translate(0)');
					$('#absolute-canvas .deg45').css('transform', 'rotate(0) translate(0)');
					$('#absolute-canvas .deg135').css('transform', 'rotate(0) translate(0)');
					$('#absolute-canvas .deg180').css('transform', 'rotate(0) translate(0)');
					$('#absolute-canvas .deg225').css('transform', 'rotate(0) translate(0)');
					$('#absolute-canvas .deg315').css('transform', 'rotate(0) translate(0)');
					toggled = false;
				}
			}
		);
	});
})( jQuery );