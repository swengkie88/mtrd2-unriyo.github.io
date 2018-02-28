$(document).ready(function() {

	function slide(num) {
		if ($('.slider').css('marginLeft') == '-5400px' )
			$('.slider').css('marginLeft', '0px');
		else
			$('.slider').animate({marginLeft: num});
	}

	var autoslide = setInterval(function(){
		slide('-=900px');
	}, 2000);

});
$(document).ready(function(){
	$('.button-collapse').sideNav();
});
	

	// var index = 0,
	// 	items = $('.slider div'),
	// 	total = items.length;
		// var item = $('.slider div').eq(index);
		// items.fadeOut();
		// item.fadeIn();

	// $('.slider div').cycle({
	// 	fx: 'fade';
	// 	speed: 3000;
	// 	timeout: 2000;
	// 	pause: 1;
	// });
	// 
	// 
		// index += 1;
		// if (index > total -1 ) index = 0;