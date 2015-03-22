<!-- You can use either the "$" to state "this is jQuery" or use "jQuery".  "$" is the most common practice. -->
<!-- jQuery(document).ready(  function() -->
$(document).ready(
	function()
	{
		//history scripts
			$(".linkHistoryOfLOW").click(function()
			{
				$(".historyOfLOW").show();
				$(".historyOfSDWines").hide();
			});
			
			$(".linkHistoryOfSDWines").click(function()
			{
				$(".historyOfLOW").hide();
				$(".historyOfSDWines").show();
			});

		//photo gallery scripts

			$(".photoGalleryWhiteGrapes").click(function()
			{
				$(".galleryWhiteGrapes").show();
				$(".galleryRedGrapes").hide();
				$(".galleryProcessing").hide();
				$(".galleryWineProducts").hide();
			});
						
			$(".photoGalleryRedGrapes").click(function()
			{
				$(".galleryWhiteGrapes").hide();
				$(".galleryRedGrapes").show();
				$(".galleryProcessing").hide();
				$(".galleryWineProducts").hide();
			});
						
			$(".photoGalleryProcessing").click(function()
			{
				$(".galleryWhiteGrapes").hide();
				$(".galleryRedGrapes").hide();
				$(".galleryProcessing").show();
				$(".galleryWineProducts").hide();
			});
						
			$(".photoGalleryWineProducts").click(function()
			{
				$(".galleryWhiteGrapes").hide();
				$(".galleryRedGrapes").hide();
				$(".galleryProcessing").hide();
				$(".galleryWineProducts").show();
			});
						
			$(".redGrapesImg1").hover(function()
			{
				$(".redGrapesImg1Text").show();
				$(".redGrapesImg2Text").hide();
				$(".redGrapesImg3Text").hide();
				$(".redGrapesImg4Text").hide();
				$(".redGrapesImg5Text").hide();
				$(".redGrapesImg6Text").hide();
			});
						
			$(".redGrapesImg2").hover(function()
			{
				$(".redGrapesImg1Text").hide();
				$(".redGrapesImg2Text").show();
				$(".redGrapesImg3Text").hide();
				$(".redGrapesImg4Text").hide();
				$(".redGrapesImg5Text").hide();
				$(".redGrapesImg6Text").hide();
			});
						
			$(".redGrapesImg3").hover(function()
			{
				$(".redGrapesImg1Text").hide();
				$(".redGrapesImg2Text").hide();
				$(".redGrapesImg3Text").show();
				$(".redGrapesImg4Text").hide();
				$(".redGrapesImg5Text").hide();
				$(".redGrapesImg6Text").hide();
			});
						
			$(".redGrapesImg4").hover(function()
			{
				$(".redGrapesImg1Text").hide();
				$(".redGrapesImg2Text").hide();
				$(".redGrapesImg3Text").hide();
				$(".redGrapesImg4Text").show();
				$(".redGrapesImg5Text").hide();
				$(".redGrapesImg6Text").hide();
			});
						
			$(".redGrapesImg5").hover(function()
			{
				$(".redGrapesImg1Text").hide();
				$(".redGrapesImg2Text").hide();
				$(".redGrapesImg3Text").hide();
				$(".redGrapesImg4Text").hide();
				$(".redGrapesImg5Text").show();
				$(".redGrapesImg6Text").hide();
			});
						
			$(".redGrapesImg6").hover(function()
			{
				$(".redGrapesImg1Text").hide();
				$(".redGrapesImg2Text").hide();
				$(".redGrapesImg3Text").hide();
				$(".redGrapesImg4Text").hide();
				$(".redGrapesImg5Text").hide();
				$(".redGrapesImg6Text").show();
			});
						
			$(".processingImg1").hover(function()
			{
				$(".processingImg1Text").show();
				$(".processingImg2Text").hide();
				$(".processingImg3Text").hide();
				$(".processingImg4Text").hide();
				$(".processingImg5Text").hide();
				$(".processingImg6Text").hide();
				$(".processingImg7Text").hide();
				$(".processingImg8Text").hide();
			});
						
			$(".processingImg2").hover(function()
			{
				$(".processingImg1Text").hide();
				$(".processingImg2Text").show();
				$(".processingImg3Text").hide();
				$(".processingImg4Text").hide();
				$(".processingImg5Text").hide();
				$(".processingImg6Text").hide();
				$(".processingImg7Text").hide();
				$(".processingImg8Text").hide();
			});
						
			$(".processingImg3").hover(function()
			{
				$(".processingImg1Text").hide();
				$(".processingImg2Text").hide();
				$(".processingImg3Text").show();
				$(".processingImg4Text").hide();
				$(".processingImg5Text").hide();
				$(".processingImg6Text").hide();
				$(".processingImg7Text").hide();
				$(".processingImg8Text").hide();
			});
						
			$(".processingImg4").hover(function()
			{
				$(".processingImg1Text").hide();
				$(".processingImg2Text").hide();
				$(".processingImg3Text").hide();
				$(".processingImg4Text").show();
				$(".processingImg5Text").hide();
				$(".processingImg6Text").hide();
				$(".processingImg7Text").hide();
				$(".processingImg8Text").hide();
			});
						
			$(".processingImg5").hover(function()
			{
				$(".processingImg1Text").hide();
				$(".processingImg2Text").hide();
				$(".processingImg3Text").hide();
				$(".processingImg4Text").hide();
				$(".processingImg5Text").show();
				$(".processingImg6Text").hide();
				$(".processingImg7Text").hide();
				$(".processingImg8Text").hide();
			});
						
			$(".processingImg6").hover(function()
			{
				$(".processingImg1Text").hide();
				$(".processingImg2Text").hide();
				$(".processingImg3Text").hide();
				$(".processingImg4Text").hide();
				$(".processingImg5Text").hide();
				$(".processingImg6Text").show();
				$(".processingImg7Text").hide();
				$(".processingImg8Text").hide();
			});
						
			$(".processingImg7").hover(function()
			{
				$(".processingImg1Text").hide();
				$(".processingImg2Text").hide();
				$(".processingImg3Text").hide();
				$(".processingImg4Text").hide();
				$(".processingImg5Text").hide();
				$(".processingImg6Text").hide();
				$(".processingImg7Text").show();
				$(".processingImg8Text").hide();
			});
						
			$(".processingImg8").hover(function()
			{
				$(".processingImg1Text").hide();
				$(".processingImg2Text").hide();
				$(".processingImg3Text").hide();
				$(".processingImg4Text").hide();
				$(".processingImg5Text").hide();
				$(".processingImg6Text").hide();
				$(".processingImg7Text").hide();
				$(".processingImg8Text").show();
			});
			
	});


