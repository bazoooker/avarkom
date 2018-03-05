

	var swiper = new Swiper('.swiper-container', {
	  slidesPerView: 2,
	  spaceBetween: 20,
	  navigation: {
	    nextEl: '.swiper-button-next',
	    prevEl: '.swiper-button-prev',
	  },
	  breakpoints: {	    
	    768: {
	      slidesPerView: 1,
	      spaceBetween: 10
	    }
	  }
	});

	$('.form-action').mask('+7(000)000-00-00');

	// $(".hero_top").paroller({ factor: '0.5', type: 'foreground', direction: 'vertical' });


