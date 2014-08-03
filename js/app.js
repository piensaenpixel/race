$(function() {
	var $heart = $('#heart strong'), counter = 1;
	var $pace = $('#pace strong'), counter = 1;
	var $elevation = $('#elevation strong'), counter = 1;
	
	setInterval(function(){
		$heart.removeClass('active');
		$heart.eq(counter++ % $heart.length).addClass('active');	
	}, 4000);

	setInterval(function(){
		$pace.removeClass('active');
		$pace.eq(counter++ % $pace.length).addClass('active');	
	}, 1000);

	setInterval(function(){
		$elevation.removeClass('active');
		$elevation.eq(counter++ % $elevation.length).addClass('active');	
	}, 4000);

});