$(function(){

	var results;
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
				console.log(results);
			}
			return ;
		}

		that.addClass('active').siblings('li').removeClass('active');

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