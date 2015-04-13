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
						
			$(".redGrapesMalbec").hover(function()
			{
				$(".redGrapesImgMalbecText").show();
				$(".redGrapesSangioveseText").hide();
				$(".redGrapesBarberaText").hide();
				$(".redGrapesMerlotText").hide();
				$(".redGrapesSyrahText").hide();
				$(".redGrapesGenericText").hide();
				$(".redGrapesBlackWidowText").show();
			});
						
			$(".redGrapesSangiovese").hover(function()
			{
				$(".redGrapesImgMalbecText").hide();
				$(".redGrapesSangioveseText").show();
				$(".redGrapesBarberaText").hide();
				$(".redGrapesMerlotText").hide();
				$(".redGrapesSyrahText").hide();
				$(".redGrapesGenericText").hide();
				$(".redGrapesBlackWidowText").show();
			});
						
			$(".redGrapesOnVine").hover(function()
			{
				$(".redGrapesImgMalbecText").hide();
				$(".redGrapesSangioveseText").hide();
				$(".redGrapesBarberaText").hide();
				$(".redGrapesMerlotText").hide();
				$(".redGrapesSyrahText").hide();
				$(".redGrapesGenericText").show();
				$(".redGrapesBlackWidowText").show();
			});
						
			$(".redGrapesHavingFun").hover(function()
			{
				$(".redGrapesImgMalbecText").hide();
				$(".redGrapesSangioveseText").hide();
				$(".redGrapesBarberaText").hide();
				$(".redGrapesMerlotText").hide();
				$(".redGrapesSyrahText").hide();
				$(".redGrapesGenericText").show();
				$(".redGrapesBlackWidowText").show();
			});
						
			$(".redGrapesGrapePicking").hover(function()
			{
				$(".redGrapesImgMalbecText").hide();
				$(".redGrapesSangioveseText").hide();
				$(".redGrapesBarberaText").hide();
				$(".redGrapesMerlotText").hide();
				$(".redGrapesSyrahText").hide();
				$(".redGrapesGenericText").show();
				$(".redGrapesBlackWidowText").show();
			});
						
			$(".redGrapesInHand").hover(function()
			{
				$(".redGrapesImgMalbecText").hide();
				$(".redGrapesSangioveseText").hide();
				$(".redGrapesGenericText").show();
				$(".redGrapesBarberaText").hide();
				$(".redGrapesMerlotText").hide();
				$(".redGrapesSyrahText").hide();
				$(".redGrapesGenericText").show();
				$(".redGrapesBlackWidowText").show();
			});
						
			$(".redGrapesBlackWidow").hover(function()
			{
				$(".redGrapesImgMalbecText").hide();
				$(".redGrapesSangioveseText").hide();
				$(".redGrapesBarberaText").hide();
				$(".redGrapesMerlotText").hide();
				$(".redGrapesSyrahText").hide();
				$(".redGrapesGenericText").show();
				$(".redGrapesBlackWidowText").show();
			});
						
			$(".redGrapesBarbera").hover(function()
			{
				$(".redGrapesImgMalbecText").hide();
				$(".redGrapesSangioveseText").hide();
				$(".redGrapesBarberaText").show();
				$(".redGrapesMerlotText").hide();
				$(".redGrapesSyrahText").hide();
				$(".redGrapesGenericText").show();
				$(".redGrapesBlackWidowText").hide();
			});
						
			$(".redGrapesMerlot").hover(function()
			{
				$(".redGrapesImgMalbecText").hide();
				$(".redGrapesSangioveseText").hide();
				$(".redGrapesBarberaText").hide();
				$(".redGrapesMerlotText").show();
				$(".redGrapesSyrahText").hide();
				$(".redGrapesGenericText").show();
				$(".redGrapesBlackWidowText").hide();
			});
						
			$(".redGrapesSyrah").hover(function()
			{
				$(".redGrapesImgMalbecText").hide();
				$(".redGrapesSangioveseText").hide();
				$(".redGrapesBarberaText").hide();
				$(".redGrapesMerlotText").hide();
				$(".redGrapesSyrahText").show();
				$(".redGrapesGenericText").show();
				$(".redGrapesBlackWidowText").hide();
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

$(window).ready(function(){
	// width() returns value in pixels
	var ws = $(window).width();

	if(ws < 500) 
	{
		$("#sidePanelImage").hide();
		$("#totcImg").show();

	}
	else
	{
		$("#sidePanelImage").show();
		$("#totcImg").hide();
	}

	$(window).resize(function(){
		ws = $(window).width();
			if(ws < 500) 
			{
				$("#sidePanelImage").hide();
				$("#totcImg").show();
			}
			else 
			{
				$("#sidePanelImage").show();
				$("#totcImg").hide();
			}

	});
})


