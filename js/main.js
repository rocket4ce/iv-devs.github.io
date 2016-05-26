$(document).ready(function(){
  $('.galeria-img').owlCarousel({
  	items:1,
  	autoplay: true,
  	autoplayTimeout: 2000,
  	loop: true
  });
  //$('.amigos').owlCarousel();

	$("header").sticky({topSpacing:0});
});