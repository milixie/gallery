
function ViewGallery(){
	var _self = this;
	_self.iFigure = $('figure');
	_self.windowWidth = $(window).width();
	_self.wrapH = $('.wrap').outerHeight(), // wrap height
	_self.figureWidth = _self.iFigure.eq(0).outerWidth(),  // 每个卡片的宽度
	_self.figureHeight = _self.iFigure.eq(0).outerHeight(),  // 每个卡片的高度
 	_self.viewMask = $('.wrap-mask');  //get mask btn

 	_self.getRandom = function (minNum,maxNum){
		return parseInt(Math.random() * (maxNum - minNum) + minNum);
	}

 	_self.setOutOrder = function(obj, index, isFirst) {
 		var randomLeft = _self.getRandom(-_self.figureWidth, _self.windowWidth);
 		var randomTop = _self.getRandom(-_self.figureHeight, _self.wrapH);
 		var randomDeg = _self.getRandom(-45,45);

 		if (!isFirst){  // 如果不是第一次进入页面，则图片画廊有一张在中心位置
 			if ( randomLeft > (_self.windowWidth - 3 * _self.figureWidth) / 2 &&　randomLeft < (_self.windowWidth + _self.figureWidth) / 2 ){
 				randomTop = parseInt(Math.random() + 0.5) ? _self.getRandom(-_self.figureHeight, (_self.wrapH - 3 * _self.figureHeight) / 2) : _self.getRandom((_self.wrapH + _self.figureHeight) / 2 , _self.wrapH);
 			}
 		}

 		obj.eq(index).css({
 			'left': randomLeft,
 			'top': randomTop,
 			zIndex: 1,
 			WebkitTransform: 'rotate(' + randomDeg + 'deg)',
 			'-moz-transform': 'rotate(' + randomDeg + 'deg)'
 		});
 	}

	_self.setInOrder = function(obj){
		var contentIndex = parseInt(Math.random() * (obj.length - 1));
		for (var i = 0; i < obj.length; i++) {

			if (i == contentIndex){
				var contentLeft = (_self.windowWidth - _self.figureWidth)/2;
				var contentTop = (_self.wrapH - _self.figureHeight)/2;
				obj.eq(i).css({
					'left': contentLeft,
					'top': contentTop,
					zIndex: 2,
					WebkitTransform: 'rotate(' + 0 + 'deg)',
					'-moz-transform': 'rotate(' + 0 + 'deg)'
				});
				obj.eq(i).children('a').css('cursor', 'pointer').attr({'href': 'http://www.17sucai.com/' , 'target': '_blank'});
			} else {
				_self.setOutOrder(obj, i, false);
				obj.eq(i).children('a').css('cursor', 'default' ).attr({'href': '#' , 'target': '_self'});
			}
		}
		return contentIndex;
	}
}

var model = new ViewGallery();

$(document).ready(function(){
	// 初始化整个乱序图片
	for (var x = 0; x < model.iFigure.length; x ++ ) {
		model.setOutOrder(model.iFigure, x ,true);
	}

	$(window).resize(function(){
		model.windowWidth = $("body").width();  // 重新获取window的宽度
		model.setInOrder(model.iFigure);
	});

});
