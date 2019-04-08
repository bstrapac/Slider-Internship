var slider_images =["assets/slider-image-1.jpg", 
					"assets/slider-image-2.jpg", 
					"assets/slider-image-3.jpg", 
					"assets/slider-image-4.jpg", 
					"assets/slider-image-5.jpg", 
					"assets/slider-image-6.jpg", 
					"assets/slider-image-7.jpg", 
					"assets/slider-image-8.jpg", 
					"assets/slider-image-9.jpg" ];
var slider_up = $('.slider_up');
var slider_down = $('.slider_down');
$.each(slider_images, function(){
	$('.slider_up').append('<li><div class="img"><img src="'+ this +'"></div></li>'); 
	$('.slider_down').prepend('<li><div class="img"><img src="'+ this +'"></div></li>')
});
$('.btn_right').on('click', () => 
{
	var item_up = $( ".slider_up li:first" ).appendTo( ".slider_up" );
	var item_down = $( ".slider_down li:first" ).appendTo( ".slider_down" );
});
$('.btn_left').on('click', () => 
{
	var item_up = $( ".slider_up li:last" ).prependTo( ".slider_up" );
	var item_down = $( ".slider_down li:last" ).prependTo( ".slider_down" );
});