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

			$("#photoGalleryWhiteGrapes").click(function()
			{
				$("#galleryWhiteGrapes").show();
				$("#galleryRedGrapes").hide();
				$("#galleryProcessing").hide();
				$("#galleryWineProducts").hide();
			});
						
			$("#photoGalleryRedGrapes").click(function()
			{
				$("#galleryWhiteGrapes").hide();
				$("#galleryRedGrapes").show();
				$("#galleryProcessing").hide();
				$("#galleryWineProducts").hide();

				$("#redGrapesImgMalbecText").hide();
				$("#redGrapesSangioveseText").hide();
				$("#redGrapesBarberaText").hide();
				$("#redGrapesMerlotText").hide();
				$("#redGrapesSyrahText").hide();
				$("#redGrapesGenericText").show();
				$("#redGrapesBlackWidowText").show();
			});
						
			$("#photoGalleryProcessing").click(function()
			{
				$("#galleryWhiteGrapes").hide();
				$("#galleryRedGrapes").hide();
				$("#galleryProcessing").show();
				$("#galleryWineProducts").hide();
				
				$("#processingStep1Text").hide();
				$("#processingStep2Text").hide();
				$("#processingStep3Text").hide();
				$("#processingStep4Text").hide();
				$("#processingStep5Text").hide();
				$("#processingStep6Text").hide();
				$("#processingStep7Text").hide();
				$("#processingStep8Text").hide();
				$("#processingStepDefaultText").show();
			});
						
			$("#photoGalleryWineProducts").click(function()
			{
				$("#galleryWhiteGrapes").hide();
				$("#galleryRedGrapes").hide();
				$("#galleryProcessing").hide();
				$("#galleryWineProducts").show();
			});
						
			$("#redGrapesMalbec").hover(function()
			{
				$("#redGrapesImgMalbecText").show();
				$("#redGrapesSangioveseText").hide();
				$("#redGrapesBarberaText").hide();
				$("#redGrapesMerlotText").hide();
				$("#redGrapesSyrahText").hide();
				$("#redGrapesGenericText").hide();
				$("#redGrapesBlackWidowText").show();
			});
						
			$("#redGrapesSangiovese").hover(function()
			{
				$("#redGrapesImgMalbecText").hide();
				$("#redGrapesSangioveseText").show();
				$("#redGrapesBarberaText").hide();
				$("#redGrapesMerlotText").hide();
				$("#redGrapesSyrahText").hide();
				$("#redGrapesGenericText").hide();
				$("#redGrapesBlackWidowText").show();
			});
						
			$("#redGrapesOnVine").hover(function()
			{
				$("#redGrapesImgMalbecText").hide();
				$("#redGrapesSangioveseText").hide();
				$("#redGrapesBarberaText").hide();
				$("#redGrapesMerlotText").hide();
				$("#redGrapesSyrahText").hide();
				$("#redGrapesGenericText").show();
				$("#redGrapesBlackWidowText").show();
			});
						
			$("#redGrapesHavingFun").hover(function()
			{
				$("#redGrapesImgMalbecText").hide();
				$("#redGrapesSangioveseText").hide();
				$("#redGrapesBarberaText").hide();
				$("#redGrapesMerlotText").hide();
				$("#redGrapesSyrahText").hide();
				$("#redGrapesGenericText").show();
				$("#redGrapesBlackWidowText").show();
			});
						
			$("#redGrapesGrapePicking").hover(function()
			{
				$("#redGrapesImgMalbecText").hide();
				$("#redGrapesSangioveseText").hide();
				$("#redGrapesBarberaText").hide();
				$("#redGrapesMerlotText").hide();
				$("#redGrapesSyrahText").hide();
				$("#redGrapesGenericText").show();
				$("#redGrapesBlackWidowText").show();
			});
						
			$("#redGrapesInHand").hover(function()
			{
				$("#redGrapesImgMalbecText").hide();
				$("#redGrapesSangioveseText").hide();
				$("#redGrapesGenericText").show();
				$("#redGrapesBarberaText").hide();
				$("#redGrapesMerlotText").hide();
				$("#redGrapesSyrahText").hide();
				$("#redGrapesGenericText").show();
				$("#redGrapesBlackWidowText").show();
			});
						
			$("#redGrapesBlackWidow").hover(function()
			{
				$("#redGrapesImgMalbecText").hide();
				$("#redGrapesSangioveseText").hide();
				$("#redGrapesBarberaText").hide();
				$("#redGrapesMerlotText").hide();
				$("#redGrapesSyrahText").hide();
				$("#redGrapesGenericText").show();
				$("#redGrapesBlackWidowText").show();
			});
						
			$("#redGrapesBarbera").hover(function()
			{
				$("#redGrapesImgMalbecText").hide();
				$("#redGrapesSangioveseText").hide();
				$("#redGrapesBarberaText").show();
				$("#redGrapesMerlotText").hide();
				$("#redGrapesSyrahText").hide();
				$("#redGrapesGenericText").show();
				$("#redGrapesBlackWidowText").hide();
			});
						
			$("#redGrapesMerlot").hover(function()
			{
				$("#redGrapesImgMalbecText").hide();
				$("#redGrapesSangioveseText").hide();
				$("#redGrapesBarberaText").hide();
				$("#redGrapesMerlotText").show();
				$("#redGrapesSyrahText").hide();
				$("#redGrapesGenericText").show();
				$("#redGrapesBlackWidowText").hide();
			});
						
			$("#redGrapesSyrah").hover(function()
			{
				$("#redGrapesImgMalbecText").hide();
				$("#redGrapesSangioveseText").hide();
				$("#redGrapesBarberaText").hide();
				$("#redGrapesMerlotText").hide();
				$("#redGrapesSyrahText").show();
				$("#redGrapesGenericText").show();
				$("#redGrapesBlackWidowText").hide();
			});
						
			$("#processingStep1").hover(function()
			{
				$("#processingStep1Text").show();
				$("#processingStep2Text").hide();
				$("#processingStep3Text").hide();
				$("#processingStep4Text").hide();
				$("#processingStep5Text").hide();
				$("#processingStep6Text").hide();
				$("#processingStep7Text").hide();
				$("#processingStep8Text").hide();
				$("#processingStepDefaultText").hide();
			});
						
			$("#processingStep2").hover(function()
			{
				$("#processingStep1Text").hide();
				$("#processingStep2Text").show();
				$("#processingStep3Text").hide();
				$("#processingStep4Text").hide();
				$("#processingStep5Text").hide();
				$("#processingStep6Text").hide();
				$("#processingStep7Text").hide();
				$("#processingStep8Text").hide();
				$("#processingStepDefaultText").hide();
			});
						
			$("#processingStep3").hover(function()
			{
				$("#processingStep1Text").hide();
				$("#processingStep2Text").hide();
				$("#processingStep3Text").show();
				$("#processingStep4Text").hide();
				$("#processingStep5Text").hide();
				$("#processingStep6Text").hide();
				$("#processingStep7Text").hide();
				$("#processingStep8Text").hide();
				$("#processingStepDefaultText").hide();
			});
						
			$("#processingStep4").hover(function()
			{
				$("#processingStep1Text").hide();
				$("#processingStep2Text").hide();
				$("#processingStep3Text").hide();
				$("#processingStep4Text").show();
				$("#processingStep5Text").hide();
				$("#processingStep6Text").hide();
				$("#processingStep7Text").hide();
				$("#processingStep8Text").hide();
				$("#processingStepDefaultText").hide();
			});
						
			$("#processingStep5").hover(function()
			{
				$("#processingStep1Text").hide();
				$("#processingStep2Text").hide();
				$("#processingStep3Text").hide();
				$("#processingStep4Text").hide();
				$("#processingStep5Text").show();
				$("#processingStep6Text").hide();
				$("#processingStep7Text").hide();
				$("#processingStep8Text").hide();
				$("#processingStepDefaultText").hide();
			});
						
			$("#processingStep6").hover(function()
			{
				$("#processingStep1Text").hide();
				$("#processingStep2Text").hide();
				$("#processingStep3Text").hide();
				$("#processingStep4Text").hide();
				$("#processingStep5Text").hide();
				$("#processingStep6Text").show();
				$("#processingStep7Text").hide();
				$("#processingStep8Text").hide();
				$("#processingStepDefaultText").hide();
			});
						
			$("#processingStep7").hover(function()
			{
				$("#processingStep1Text").hide();
				$("#processingStep2Text").hide();
				$("#processingStep3Text").hide();
				$("#processingStep4Text").hide();
				$("#processingStep5Text").hide();
				$("#processingStep6Text").hide();
				$("#processingStep7Text").show();
				$("#processingStep8Text").hide();
				$("#processingStepDefaultText").hide();
			});
						
			$("#processingStep8").hover(function()
			{
				$("#processingStep1Text").hide();
				$("#processingStep2Text").hide();
				$("#processingStep3Text").hide();
				$("#processingStep4Text").hide();
				$("#processingStep5Text").hide();
				$("#processingStep6Text").hide();
				$("#processingStep7Text").hide();
				$("#processingStep8Text").show();
				$("#processingStepDefaultText").hide();
			});
			
	});


