$(function(){

	$('#wm_back-to-top').on('click',function(){
		$('html,body').animate({scrollTop:$($(this).attr('href')).offset().top},800);
		return false;
	});

	$('.head-nav-current a').click(function() {
		var $parent = $(this).parents('li');
		if (!$parent.hasClass('active')) {
			$parent.addClass('active');
			$parent.find('.sub-menu').height('42px');
		} 
		else {
			$parent.removeClass('active');
			$parent.find('.sub-menu').height(0);
		}
		return false;
	});
	$(window).resize(function() {
		$('.sub-menu').height(0);
	});

	$('#models-ticker').bxSlider({
		maxSlides: 4,
		slideWidth: 294,
		slideHeight: 250,
		slideMargin: 0,
		ticker: true,
		speed: 40000
	});
	$('#bxslider-portfolio').bxSlider({
		maxSlides: 4,
		slideWidth: 294,
		slideHeight: 250,
		slideMargin: 0,
		nextSelector: '.portfolio-next',
  		prevSelector: '.portfolio-prev',
  		pager: false
	});
	$('#bxslider-polaroids').bxSlider({
		maxSlides: 4,
		slideWidth: 294,
		slideHeight: 250,
		slideMargin: 0,
		nextSelector: '.polaroids-next',
  		prevSelector: '.polaroids-prev',
  		pager: false
	});


	$('.slides-wrapper').imageslider({
		slideItems: '.my-slider-item',
		slideContainer: '.js-slides',
		slideDistance: 5,
		slideDuratin: 800,
		resizable: true,
		pause: true
	});
});