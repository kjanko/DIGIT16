var toggled = false;

( function($) 
{
	$(document).ready( function() 
	{ 
		var $logo = $('#logo');
		var $search = $('#search');
		
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