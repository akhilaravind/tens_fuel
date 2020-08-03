AOS.init({
	duration: 1200,
	easing: 'slide',
});

jQuery(document).ready(function ($) {
	"use strict";
	var siteMenuClone = function () {
		$('.js-clone-nav').each(function () {
			var $this = $(this);
			$this.clone().attr('class', 'site-nav-wrap').appendTo('.site-mobile-menu-body');
		});
		setTimeout(function () {

			var counter = 0;
			$('.site-mobile-menu .has-children').each(function () {
				var $this = $(this);

				$this.prepend('<span class="arrow-collapse collapsed">');

				$this.find('.arrow-collapse').attr({
					'data-toggle': 'collapse',
					'data-target': '#collapseItem' + counter,
				});

				$this.find('> ul').attr({
					'class': 'collapse',
					'id': 'collapseItem' + counter,
				});

				counter++;

			});

		}, 1000);

		$('body').on('click', '.arrow-collapse', function (e) {
			var $this = $(this);
			if ($this.closest('li').find('.collapse').hasClass('show')) {
				$this.removeClass('active');
			} else {
				$this.addClass('active');
			}
			e.preventDefault();

		});

		$(window).resize(function () {
			var $this = $(this),
				w = $this.width();

			if (w > 768) {
				if ($('body').hasClass('offcanvas-menu')) {
					$('body').removeClass('offcanvas-menu');
				}
			}
		})

		$('body').on('click', '.js-menu-toggle', function (e) {
			var $this = $(this);
			e.preventDefault();

			if ($('body').hasClass('offcanvas-menu')) {
				$('body').removeClass('offcanvas-menu');
				$this.removeClass('active');
			} else {
				$('body').addClass('offcanvas-menu');
				$this.addClass('active');
			}
		})

		$(document).mouseup(function (e) {
			var container = $(".site-mobile-menu");
			if (!container.is(e.target) && container.has(e.target).length === 0) {
				if ($('body').hasClass('offcanvas-menu')) {
					$('body').removeClass('offcanvas-menu');
				}
			}
		});
	};
	siteMenuClone();

	var siteCarousel = function () {

		if ($('.our-service-carousel').length > 0) {
			$('.our-service-carousel').owlCarousel({
				center: false,
				items: 1,
				loop: true,
				stagePadding: 0,
				margin: 0,
				autoplay: true,
				nav: true,
				navText: ['<span class="icon-arrow_back">', '<span class="icon-arrow_forward">'],
				responsive: {
					600: {
						margin: 20,
						nav: true,
						items: 2
					},
					1000: {
						margin: 30,
						stagePadding: 0,
						nav: true,
						items: 3
					},
					1200: {
						margin: 30,
						stagePadding: 0,
						nav: true,
						items: 3
					}
				}
			});
		}

	};
	siteCarousel();

	var siteStellar = function () {
		$(window).stellar({
			responsive: true,
			parallaxBackgrounds: true,
			parallaxElements: true,
			horizontalScrolling: false,
			hideDistantElements: false,
			scrollProperty: 'scroll'
		});
	};
	siteStellar();

	var bannerCarousel = function () {
		$("#owl-demo").owlCarousel({
			items: 1,
			lazyLoad: true,
			navigation: false
		});
	};
	bannerCarousel()

	var siteSticky = function () {
		$(".js-sticky-header").sticky({ topSpacing: 0 });
	};
	siteSticky();

	var OnePageNavigation = function () {
		var navToggler = $('.site-menu-toggle');
		$("body").on("click", ".main-menu li a[href^='#'], .smoothscroll[href^='#'], .site-mobile-menu .site-nav-wrap li a", function (e) {
			e.preventDefault();
			var hash = this.hash;
			$('html, body').animate({
				'scrollTop': $(hash).offset().top
			}, 600, 'easeInOutCirc', function () {
				window.location.hash = hash;
			});
		});
	};
	OnePageNavigation();

	var siteScroll = function () {
		$(window).scroll(function () {
			var st = $(this).scrollTop();
			if (st > 100) {
				$('.js-sticky-header').addClass('shrink');
			} else {
				$('.js-sticky-header').removeClass('shrink');
			}
		})
	};
	siteScroll();

	var carouselInit = function () {
		var total = $('.carousel-item').length;
		var current = 0;
		$('#moveRight').on('click', function () {
			var next = current;
			current = current + 1;
			setSlide(next, current);
		});
		$('#moveLeft').on('click', function () {
			var prev = current;
			current = current - 1;
			setSlide(prev, current);
		});
		function setSlide(prev, next) {
		}
	};
	carouselInit();
	$('.custom-carousel').carousel({
		interval: 5000,
		pause: "false",
		cycle: true
	});
});
