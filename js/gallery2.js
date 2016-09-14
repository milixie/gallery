$(function(){

	var results,
		  flag = true;
	// 点击蒙层表层开始展示散列画廊
	model.viewMask.click(function(){
		results = model.setInOrder(model.iFigure);
		$(".wrap-mask").css('zIndex', -1);  // 蒙层消失
		$('#switch-icon').css('zIndex', 3);
	});

	$('#switch-icon li').click(function(){
		var that = $(this);
		var curIndex = that.index();

		if (that.hasClass('active')) {
			if (that.hasClass('translate-btn')){
				if (flag){
					setTimeout(function(){
						model.iFigure.eq(results).addClass('current-figure');
					},100);
					model.iFigure.eq(results).css({
						WebkitTransform: 'rotateY(' + 180 + 'deg)',
						'-moz-transform': 'rotateY(' + 180 + 'deg)'
					});
					that.css({
						WebkitTransform: 'rotateY(' + 180 + 'deg) scale(' + 1.8 + ')',
						'-moz-transform': 'rotateY(' + 180 + 'deg) scale(' + 1.8 + ')'
					});
					flag = !flag;
				} else{
					setTimeout(function(){
						model.iFigure.eq(results).removeClass('current-figure');
					},100);
					model.iFigure.eq(results).css({
						WebkitTransform: 'rotateY(' + 0 + 'deg)',
						'-moz-transform': 'rotateY(' + 0 + 'deg)'
					});
					that.css({
						WebkitTransform: 'rotateY(' + 0 + 'deg) scale(' + 1.8 + ')',
						'-moz-transform': 'rotateY(' + 0 + 'deg) scale(' + 1.8 + ')'
					});
					flag = !flag;
				}
			}
			return ;
		} else {
			that.addClass('active').siblings('li').removeClass('active');
			that.css({
				WebkitTransform: 'scale(' + 1.8 + ')',
				'-moz-transform': 'scale(' + 1.8 + ')'
			});
			that.siblings('li').css({
				WebkitTransform: 'scale(' + 1 + ')',
				'-moz-transform': 'scale(' + 1 + ')'
			});
		}


		if (curIndex == 2 || curIndex == 5){
			for(var n = 0; n < model.iFigure.length; n ++){
				model.setOutOrder(model.iFigure, n, true);
			}
			setTimeout(function(){
				results = model.setInOrder(model.iFigure);
			}, 600);
		}else if (curIndex == 4){
			function getOutOrder(){
				for(var m = 0; m < model.iFigure.length; m ++){
					model.setOutOrder(model.iFigure, m, true);
				}
			}
			getOutOrder();
			var inter = setInterval(getOutOrder,600);
			setTimeout(function(){
				clearInterval(inter);
				results = model.setInOrder(model.iFigure);
			}, 1200);
		}else{
			results = model.setInOrder(model.iFigure);
		}


		// setTimeout(function(){
		// 	if (that.hasClass('active')) {
		// 		if (that.hasClass('translate-btn')){
		// 			console.log(results);
		// 			model.iFigure.eq(results).addClass('current-figure');
		// 		}
		// 		return ;
		// 	}
		// },1800);

	});
});