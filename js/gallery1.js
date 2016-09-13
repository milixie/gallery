$(function(){
	// 点击蒙层表层开始展示散列画廊
	model.viewMask.click(function(){
		model.setInOrder(model.iFigure);
		$(".wrap-mask").css('zIndex', -1);  // 蒙层消失
		$('#switch-icon').css('zIndex', 3);
	});

	$('#switch-icon li').click(function(){

		if ($(this).hasClass('active')) {
			return ;
		}
		$(this).addClass('active').siblings('li').removeClass('active');
		model.setInOrder(model.iFigure);
	});
});