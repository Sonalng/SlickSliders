$(document).ready(function () {
	$(".slick-slider").slick({
		autoplay: true,
		autoplaySpeed: 3000,
		arrows: true
	});

	$('.multiple-items').slick({
		infinite: true,
		autoplay: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplaySpeed: 3000

	});

	//On Scroll Functionality
	$(window).scroll(() => {
		var windowTop = $(window).scrollTop();
		windowTop > 100 ? $('nav').addClass('navShadow') : $('nav').removeClass('navShadow');
		windowTop > 100 ? $('ul').css('top', '100px') : $('ul').css('top', '160px');
	});

	//Click Logo To Scroll To Top
	$('#logo').on('click', () => {
		$('html,body').animate({
			scrollTop: 0
		}, 500);
	});

	//Smooth Scrolling Using Navigation Menu
	$('a[href*="#"]').on('click', function (e) {
		$('html,body').animate({
			scrollTop: $($(this).attr('href')).offset({
				top: 100
			})
		}, 500);
		e.preventDefault();
	});

	//Toggle Menu
	$('#menu-toggle').on('click', () => {
		$('#menu-toggle').toggleClass('closeMenu');
		$('ul').toggleClass('showMenu');

		$('li').on('click', () => {
			$('ul').removeClass('showMenu');
			$('#menu-toggle').removeClass('closeMenu');
		});
	});


});