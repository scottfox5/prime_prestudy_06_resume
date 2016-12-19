$(document).ready(function(){
	$('div').hide();
	$('button').click(function(){
		$('div').fadeIn('slow');
		$('button').remove();
	});
});
