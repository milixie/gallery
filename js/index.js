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

		var contentIndex = parseInt(Math.random() * ($iFigure.length - 1));
		for (var i = 0; i < $iFigure.length; i++) {

			if (i == contentIndex){
				var contentLeft = ($wWindow - $iFigureW)/2;
				var contentTop = ($containerH - $iFigureH)/2;
				$iFigure.eq(i).css({
					'left': contentLeft,
					'top': contentTop,
					zIndex: 2,
					WebkitTransform: 'rotate(' + 0 + 'deg)',
					'-moz-transform': 'rotate(' + 0 + 'deg)'
				});
			} else {
				var randomLeft = getRandom(-$iFigureW, $wWindow);
				var randomTop = getRandom(-$iFigureH, $containerH);
				var randomDeg = getRandom(-45,45);

				if ( randomLeft > ($wWindow - 3 * $iFigureW) / 2 &&　randomLeft < ($wWindow + $iFigureW) / 2 ){
					randomTop = parseInt(Math.random() + 0.5) ? getRandom(-$iFigureH, ($containerH - 3 * $iFigureH) / 2) : getRandom(($containerH + $iFigureH) / 2 , $containerH);
				}

				$iFigure.eq(i).css({
					'left': randomLeft,
					'top': randomTop,
					zIndex: 1,
					WebkitTransform: 'rotate(' + randomDeg + 'deg)',
					'-moz-transform': 'rotate(' + randomDeg + 'deg)'
				});
				
			}


		}

	}

	$('#switch-icon li').click(function(){
		if ($(this).hasClass('active')) {
			return ;
		}

		console.log(222);

		$(this).addClass('active').siblings('li').removeClass('active');

		outOfOrder();

	});

});