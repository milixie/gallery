$(document).ready(function(){

	var iFigure = $('figure'),  // get images figure array
			wWindow = $("body").width(),  // wiondow width
		  containerH = $('.container').outerHeight(), // container height
			iFigureW = $('figure').eq(0).outerWidth(),  // 每个卡片的宽度
			iFigureH = $('figure').eq(0).outerHeight(),  // 每个卡片的高度
		 	viewMask = $('.container-mask');  //get mask btn

	// get random number between minNum and maxNum
	function getRandom(minNum,maxNum){
		return parseInt(Math.random() * (maxNum - minNum) + minNum);
	}

	// 初始化整个乱序图片
	for (var x = 0; x < iFigure.length; x ++ ) {
		outOfOrder(x, true);
	}

	// 点击蒙层表层开始展示散列画廊
	viewMask.click(function(){
		inOrder();
		$(".container-mask").css('zIndex', -1);  // 蒙层消失
	});

	function outOfOrder(index, isFirst) {
		var randomLeft = getRandom(-iFigureW, wWindow);
		var randomTop = getRandom(-iFigureH, containerH);
		var randomDeg = getRandom(-45,45);

		if (!isFirst){  // 如果不是第一次进入页面，则图片画廊有一张在中心位置
			if ( randomLeft > (wWindow - 3 * iFigureW) / 2 &&　randomLeft < (wWindow + iFigureW) / 2 ){
				randomTop = parseInt(Math.random() + 0.5) ? getRandom(-iFigureH, (containerH - 3 * iFigureH) / 2) : getRandom((containerH + iFigureH) / 2 , containerH);
			}
		}

		iFigure.eq(index).css({
			'left': randomLeft,
			'top': randomTop,
			zIndex: 1,
			WebkitTransform: 'rotate(' + randomDeg + 'deg)',
			'-moz-transform': 'rotate(' + randomDeg + 'deg)'
		});
	}

	// 画廊有一张是在中心位置，其他都是乱序排列--排序函数
	function inOrder(){

		var contentIndex = parseInt(Math.random() * (iFigure.length - 1));
		for (var i = 0; i < iFigure.length; i++) {

			if (i == contentIndex){
				var contentLeft = (wWindow - iFigureW)/2;
				var contentTop = (containerH - iFigureH)/2;
				iFigure.eq(i).css({
					'left': contentLeft,
					'top': contentTop,
					zIndex: 2,
					WebkitTransform: 'rotate(' + 0 + 'deg)',
					'-moz-transform': 'rotate(' + 0 + 'deg)'
				});
			} else {
				outOfOrder(i, false);
			}
		}

	}

	$('#switch-icon li').click(function(){
		if ($(this).hasClass('active')) {
			return ;
		}
		$(this).addClass('active').siblings('li').removeClass('active');
		inOrder();
	});

});