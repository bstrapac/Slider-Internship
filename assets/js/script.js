$('.btn_right').on('click', () => 
{
	var image_up = $( ".slider_up li:first" );
	var image_down = $( ".slider_down li:first" );
	var image_width= image_up.width();
	image_up.detach().appendTo( ".slider_up");
	image_down.detach().appendTo( ".slider_down");
	$('.slider_up').css({
		position: 'relative',
		right: image_width
	}).animate(
		{
			right: 0
		}, 500
	);
	$('.slider_down').css({
		position: 'relative',
		right: image_width
	}).animate(
		{
			right: 0
		}, 500
	);
});
$('.btn_left').on('click', () => 
{
	var image_up = $( ".slider_up li:last" );
	var image_down = $( ".slider_down li:last" );
	var image_width= image_up.width();
	image_up.prependTo( ".slider_up");
	image_down.detach().prependTo( ".slider_down");
	$('.slider_up').css({
		position: 'relative'
	}).animate(
		{
			right: image_width
		}, 500, () => {
			$('.slider_up').css({right: 0})
		});
	$('.slider_down').css({
		position: 'relative'
	}).animate(
		{
			right: image_width
		}, 500, () => {
			$('.slider_down').css({right: 0})
			});
});