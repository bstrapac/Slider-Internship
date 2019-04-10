$('.btn_right').on('click', () => 
{
	$( ".slider_up li:first" ).appendTo( ".slider_up");
	$( ".slider_down li:first" ).appendTo( ".slider_down");
});
$('.btn_left').on('click', () => 
{
	$( ".slider_up li:last" ).prependTo( ".slider_up");
	$( ".slider_down li:last" ).prependTo( ".slider_down");
});