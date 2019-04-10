
$('.slider').on('swiperight', function(){
	$( ".slider_up li:first" ).appendTo( ".slider_up");
	$( ".slider_down li:first" ).appendTo( ".slider_down");
});
$('.slider').on('swipeleft', function(){
	$( ".slider_up li:last" ).prependTo( ".slider_up");
	$( ".slider_down li:last" ).prependTo( ".slider_down");
});