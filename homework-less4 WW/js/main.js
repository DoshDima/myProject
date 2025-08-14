 

$(function(){

  $(".header__nav__list a, .footer__logo-link").on("click", function (e) {

		e.preventDefault();

		var id  = $(this).attr('href'),

			top = $(id).offset().top;
		
		$('body,html').animate({scrollTop: top}, 1500);
	});

  Fancybox.bind('[data-fancybox="gallery"]', {
    
  });
  
  $('.slider__inner').slick({
    arrows:false,
    dots: true,
  });

  $('.menu__mobile').on('click', function(){
    $('.header__nav__list').toggleClass('header__nav__list-active');
  });

  var mixer = mixitup('.gallery__gallery');
  

});