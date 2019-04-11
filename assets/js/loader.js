var slider_images =['assets/img/slider-image-1.jpg', 
					'assets/img/slider-image-2.jpg', 
					'assets/img/slider-image-3.jpg', 
					'assets/img/slider-image-4.jpg', 
					'assets/img/slider-image-5.jpg', 
					'assets/img/slider-image-6.jpg', 
					'assets/img/slider-image-7.jpg', 
					'assets/img/slider-image-8.jpg', 
					'assets/img/slider-image-9.jpg'];
var slider_up = $('.slider_up');
var slider_down = $('.slider_down');
$.each(slider_images, function(){
	$('.slider_up').append('<li><div class="img"><img src="'+ this +'"></div></li>'); 
	$('.slider_down').prepend('<li><div class="img"><img src="'+ this +'"></div></li>')
});
$(window).on('load resize', () => {
	var body = document.getElementsByTagName('body')[0];
	var s1 = document.createElement('script');
	s1.className = 'loaded_script';
	s1.src = 'assets/js/mobile.js';	
	if ($(window).width() > 640) {	
		$('.loaded_script').remove();
	}
	else{
		$('.loaded_script').remove();
		body.appendChild(s1);
	}
});
/*$(window).on('load resize', () => {
	if ($(window).width() > 640) {	
		$('.loaded_script').attr("src", "assets/js/script.js");
	}
	else{
		$('.loaded_script').attr("src","assets/js/mobile.js" );	
	}
});*/