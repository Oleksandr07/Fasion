$(function(){

	$('.fancybox').fancybox({
		padding: 0,
		margin: 0,

		width: '100%',
        height: '100%',
        autoSize: false,

		openEffect: 'fade',
		closeEffect: 'fade',

		openSpeed: 400,
		closeSpeed: 400,
		helpers: {
			overlay: {
				css : {'background':'#fff'},
				locked: true
			},
			title: false,
		},
		afterShow: function(){
			sliderPortfolio.reloadSlider();
			sliderPolaroid.reloadSlider();
		}
	});

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
		$('.head-nav-current').removeClass('active');
		$('.sub-menu').height(0);
	});


	$('#wm_alpha-menu li a').on('click',function(){
		$('html,body').animate({scrollTop:$($(this).attr('href')).offset().top - 100},800);
		return false;
	});

	$('#models-ticker').bxSlider({
		maxSlides: 4,
		slideWidth: 294,
		slideHeight: 250,
		slideMargin: 0,
		ticker: true,
		speed: 70000
	});
	$('#bxslider-portfolio').bxSlider({
		maxSlides: 4,
		slideWidth: 294,
		slideHeight: 250,
		slideMargin: 0,
		nextSelector: '.portfolio-next',
  		prevSelector: '.portfolio-prev',
  		pager: false,
  		auto: true,
	});	

			var sliderPortfolio = $('#bxslider-portfolio-modal').bxSlider({
				minSlides: 2,
				maxSlides: 2,
				slideWidth: 500,
				slideMargin: 0,
				nextSelector: '.modal-portfolio-next',
		  		prevSelector: '.modal-portfolio-prev',
		  		pager: false,
			});	
			var sliderPolaroid = $('#bxslider-polaroid-modal').bxSlider({
				minSlides: 2,
				maxSlides: 2,
				slideWidth: 500,
				slideMargin: 0,
				nextSelector: '.modal-polaroid-next',
				prevSelector: '.modal-polaroid-prev',
				pager: false,
			});			

	$('#bxslider-polaroids').bxSlider({
		maxSlides: 4,
		slideWidth: 294,
		slideHeight: 250,
		slideMargin: 0,
		nextSelector: '.polaroids-next',
  		prevSelector: '.polaroids-prev',
  		pager: false,
  		auto: true,
	});


	var wow = new WOW(
	  {
	    boxClass:     'wow',      // animated element css class (default is wow)
	    animateClass: 'animated', // animation css class (default is animated)
	    offset:       0,          // distance to the element when triggering the animation (default is 0)
	    mobile:       false,       // trigger animations on mobile devices (default is true)
	    live:         true,       // act on asynchronously loaded content (default is true)
	    callback:     function(box) {
	      // the callback is fired every time an animation is started
	      // the argument that is passed in is the DOM node being animated
	    },
	    scrollContainer: null // optional scroll container selector, otherwise use window
	  }
	);
	wow.init();
	
	$(window).load(function () {

		$('#blog-container').masonry({
			gutter: 0,
			itemSelector: '.type-post',
		});

	});


});