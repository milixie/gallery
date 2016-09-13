$('#switch-icon li').click(function(){

	if ($(this).hasClass('active')) {
		return ;
	}
	$(this).addClass('active').siblings('li').removeClass('active');
	model.setInOrder(model.iFigure);
});