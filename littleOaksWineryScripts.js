<!-- You can use either the "$" to state "this is jQuery" or use "jQuery".  "$" is the most common practice. -->
<!-- jQuery(document).ready(  function() -->
$(document).ready(
	function()
	{
			$(".menuHome").click(function()
			{
				$(".contentHome").show();
				$(".contentHistory").hide();
				$(".contentGallery").hide();
				$(".contentProducts").hide();
				$(".contentWineClub").hide();
				$(".contentAbout").hide();
				$(".contentContactUs").hide();
				$(".sidePanelHomeLinks" ).show();
				$(".sidePanelHistoryLinks" ).hide();
			});
								
			$(".menuHistory").click(function()
			{
				$(".contentHome").hide();
				$(".contentHistory").show();
				$(".contentGallery").hide();
				$(".contentProducts").hide();
				$(".contentWineClub").hide();
				$(".contentAbout").hide();
				$(".contentContactUs").hide();
				$( ".sidePanelHomeLinks" ).hide();
				$( ".sidePanelHistoryLinks" ).show();
			});
								
			$(".menuGallery").click(function()
			{
				$(".contentHome").hide();
				$(".contentHistory").hide();
				$(".contentGallery").show();
				$(".contentProducts").hide();
				$(".contentWineClub").hide();
				$(".contentAbout").hide();
				$(".contentContactUs").hide();
				$( ".sidePanelHomeLinks" ).show();
				$( ".sidePanelHistoryLinks" ).hide();
			});
						
			$(".menuProducts").click(function()
			{
				$(".contentHome").hide();
				$(".contentHistory").hide();
				$(".contentGallery").hide();
				$(".contentProducts").show();
				$(".contentWineClub").hide();
				$(".contentAbout").hide();
				$(".contentContactUs").hide();
			});
						
			$(".menuWineClub").click(function()
			{
				$(".contentHome").hide();
				$(".contentHistory").hide();
				$(".contentGallery").hide();
				$(".contentProducts").hide();
				$(".contentWineClub").show();
				$(".contentAbout").hide();
				$(".contentContactUs").hide();
			});
						
			$(".menuContactUs").click(function()
			{
				$(".contentHome").hide();
				$(".contentHistory").hide();
				$(".contentGallery").hide();
				$(".contentProducts").hide();
				$(".contentWineClub").hide();
				$(".contentAbout").hide();
				$(".contentContactUs").show();
			});
	});


