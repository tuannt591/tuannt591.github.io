 $(function(){
 	
 	// ---click menu---
 	$('.navbar ul li:nth-child(1) a').click(function() {
 		$('.navbar ul li').removeClass('active');
 		$('.navbar ul li:nth-child(1)').addClass('active');

 		$('.content .content-detail').removeClass('hienthi')
 		$('.content .content-detail:nth-child(1)').addClass('hienthi')
 		return false;
 	});

 	$('.navbar ul li:nth-child(2) a').click(function() {
 		$('.navbar ul li').removeClass('active');
 		$('.navbar ul li:nth-child(2)').addClass('active');

 		$('.content .content-detail').removeClass('hienthi')
 		$('.content .content-detail:nth-child(2)').addClass('hienthi')
 		return false;
 	});

 	$('.navbar ul li:nth-child(3) a').click(function() {
 		$('.navbar ul li').removeClass('active');
 		$('.navbar ul li:nth-child(3)').addClass('active');

 		$('.content .content-detail').removeClass('hienthi')
 		$('.content .content-detail:nth-child(3)').addClass('hienthi')
 		return false;
 	});

 	$('.navbar ul li:nth-child(4) a').click(function() {
 		$('.navbar ul li').removeClass('active');
 		$('.navbar ul li:nth-child(4)').addClass('active');

 		$('.content .content-detail').removeClass('hienthi')
 		$('.content .content-detail:nth-child(4)').addClass('hienthi')
 		return false;
 	});

 	// ---click filter---
 	$('.porfolio-filter ul li:nth-child(1)').click(function() {
 		$('.porfolio-filter ul li').removeClass('active');
 		$(this).addClass('active');
 	});
 	$('.porfolio-filter ul li:nth-child(2)').click(function() {
 		$('.porfolio-filter ul li').removeClass('active');
 		$(this).addClass('active');
 	});
 	$('.porfolio-filter ul li:nth-child(3)').click(function() {
 		$('.porfolio-filter ul li').removeClass('active');
 		$(this).addClass('active');
 	});
 	$('.porfolio-filter ul li:nth-child(4)').click(function() {
 		$('.porfolio-filter ul li').removeClass('active');
 		$(this).addClass('active');
 	});


 	$('.porfolio-filter ul li').click(function() {
 		dulieu = $(this).data('porfolio');
 		$('.porfolio-item .row').isotope({
 			filter: dulieu
 		})
 	});

 	// ---fancybox---
 	$('.img-link').fancybox();

 	// ---scroll-skill---
 	$(window).scroll(function() {
 			$('.percent-photoshop').addClass('_photoshop')
 			$('.percent-illustrator').addClass('_illustrator')
 			$('.percent-html').addClass('_html')
 			$('.percent-graphic').addClass('_graphic')
 			$('.percent-web').addClass('_web')
 			$('.percent-bootstrap').addClass('_bootstrap')

 					
 	});
				
 	// ---counter-skill---
 	$('.skill .value').counterUp({           
        time: 3000
    });	 	
})  
 