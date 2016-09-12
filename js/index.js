$(document).ready(function(){

	var $iFigure = $('figure');
	
	var $wWindow = $("body").width(),  // wiondow width
		  $containerH = $('.container').outerHeight(), // container height
			$iFigureW = $('figure').eq(0).outerWidth(),  // 每个卡片的宽度
			$iFigureH = $('figure').eq(0).outerHeight();  // 每个卡片的高度


	function getRandom(minNum,maxNum){
		return parseInt(Math.random() * (maxNum - minNum) + minNum);
	}

	outOfOrder();

	function outOfOrder(){
		
		for (var i = 0; i < $iFigure.length; i++) {

			var randomLeft = getRandom(-$iFigureW, $wWindow);
			var randomTop = getRandom(-$iFigureH, $containerH);
			var randomDeg = getRandom(-45,45);

			$iFigure.eq(i).css({
				'left': randomLeft,
				'top': randomTop,
				WebkitTransform: 'rotate(' + randomDeg + 'deg)',
				'-moz-transform': 'rotate(' + randomDeg + 'deg)'
			});

		}

	}

	$('#switch-icon li').click(function(){
		$(this).addClass('active').siblings('li').removeClass('active');

		outOfOrder();

	});

});