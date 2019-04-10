
$('.slider').on('swiperight', function(){
	var image_up = $( ".slider_up li:first" );
	var image_down = $( ".slider_down li:first" );
	var image_width= image_up.width();
	$('.slider_up').css({
		position: 'relative'
	}).animate(
		{
			right: 0
		}, "slow"
	);
	$('.slider_down').css({
		position: 'relative',
		right: item_width
	}).animate(
		{
			right: 0
		}, "slow"
	);
	image_up.detach().appendTo( ".slider_up");
	image_down.detach().appendTo( ".slider_down");
});
$('.slider').on('swipeleft', function(){
	var image_up = $( ".slider_up li:last" );
	var image_down = $( ".slider_down li:last" );
	var image_width= image_up.width();
	$('.slider_up').css({
		position: 'relative'
	}).animate(
		{
			left: image_width
		}, "slow"
	);
	$('.slider_down').css({
		position: 'relative'
	}).animate(
		{
			left: image_width
		}, "slow"
	);
	image_up.detach().prependTo( ".slider_up");
	image_down.detach().prependTo( ".slider_down");
});