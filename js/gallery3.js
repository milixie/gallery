var data = [{
	'index': 1,
	'header': 'Paner me',
	'img': '1.jpg',
	'detail': 'What might be right for you may not be right for some. And we know Flipper lives in a world full of wonder flying there-under under the sea.'
},{
	'index': 2,
	'header': 'Banner',
	'img': '2.jpg',
	'detail': 'And we know Flipper lives in a world full of wonder flying there-under under the sea.What might be right for you may not be right for some.'
},{
	'index': 3,
	'header': 'Red play',
	'img': '3.jpg',
	'detail': 'Plase we know Flipper lives in a world full of wonder .What might be right for you may not be right for some.flying there-under under the sea'
},{
	'index': 4,
	'header': 'Hello Banner',
	'img': '4.jpg',
	'detail': 'The life is good so you can fly there-under under the sea.What might be right for you may not be right for some and never say give up.'
},{
	'index': 5,
	'header': 'What me',
	'img': '5.jpg',
	'detail': 'What might be right for you may not be right for some. And we know Flipper lives in a world full of wonder flying there-under under the sea.'
},{
	'index': 6,
	'header': 'Yellow',
	'img': '6.jpg',
	'detail': 'And we know Flipper lives in a world full of wonder flying there-under under the sea.What might be right for you may not be right for some.'
},{
	'index': 7,
	'header': 'Hello play',
	'img': '7.jpg',
	'detail': 'Plase we know Flipper lives in a world full of wonder .What might be right for you may not be right for some.flying there-under under the sea'
},{
	'index': 8,
	'header': 'Run gids',
	'img': '8.jpg',
	'detail': 'The life is good so you can fly there-under under the sea.What might be right for you may not be right for some and never say give up.'
},{
	'index': 9,
	'header': 'Bob english',
	'img': '9.jpg',
	'detail': 'What might be right for you may not be right for some. And we know Flipper lives in a world full of wonder flying there-under under the sea.'
},{
	'index': 10,
	'header': 'Banner',
	'img': '10.jpg',
	'detail': 'And we know Flipper lives in a world full of wonder flying there-under under the sea.What might be right for you may not be right for some.'
},{
	'index': 11,
	'header': 'Red play',
	'img': '11.jpg',
	'detail': 'Plase we know Flipper lives in a world full of wonder .What might be right for you may not be right for some.flying there-under under the sea'
},{
	'index': 12,
	'header': 'Hello Banner',
	'img': '12.jpg',
	'detail': 'The life is good so you can fly there-under under the sea.What might be right for you may not be right for some and never say give up.'
},{
	'index': 13,
	'header': 'Paner header',
	'img': '13.jpg',
	'detail': 'What might be right for you may not be right for some. And we know Flipper lives in a world full of wonder flying there-under under the sea.'
},{
	'index': 14,
	'header': 'Banner',
	'img': '14.jpg',
	'detail': 'And we know Flipper lives in a world full of wonder flying there-under under the sea.What might be right for you may not be right for some.'
},{
	'index': 15,
	'header': 'Origin play',
	'img': '15.jpg',
	'detail': 'Plase we know Flipper lives in a world full of wonder .What might be right for you may not be right for some.flying there-under under the sea'
},{
	'index': 16,
	'header': 'Yes Banner',
	'img': '16.jpg',
	'detail': 'The life is good so you can fly there-under under the sea.What might be right for you may not be right for some and never say give up.'
},]


$(function(){

	var wrapW = $('.wrap').outerWidth();
	var wrapH = $('.wrap').outerHeight();

	// 2.遍历data数据，将数据填充到HTML中
	var str = '', ulStr = '';
	for(i in data) {
		str += '<div class="photo photo-front" id="photo_' + data[i].index + '">' + 
				'<div class="photo-wrap">' + 
					'<div class="side side-front">' +
						'<img src="img/'+ data[i].img + '">' + 
						'<h2>' + data[i].header + '</h2>' + 
					'</div>' + 
				'<div class="side side-back">' + 
					'<p class="detail">'+ data[i].detail + '</p>' + 
				'</div>' + 
			'</div>' +
		'</div>';
		ulStr += '<li id="li_' + data[i].index + '" class="turn-front"><i></i></li>';
	}
	var wrapHtml = (str + '<ul id="switch">' + ulStr + '</ul>');
	$('.wrap').html(wrapHtml);

	// 6 定位ul的位置
	var ulSwitch = $('#switch');
	ulWidth = ulSwitch.width();
	ulSwitch.css({
		'marginLeft': -ulWidth / 2 
	})

	// 3让其中任意一个置于中间位置，并且分成左右两栏
	function getRandom(min, max) {
		var x = parseInt(Math.random() * (max - min) + min);
		return x;
	}

	var iPhotoW = $('.photo').width(),
			iPhotoH = $('.photo').height(),
			randomX = getRandom(0,15),
			arr = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
			
	// 4 乱序函数
	function outOrder(centerEleIndex){
		var sortArr = unSort();
		for(var m = 0; m < data.length; m++){
			var randomDeg = getRandom(-45, 45);

			if (sortArr[m] == centerEleIndex){
				$('.photo').eq(centerEleIndex).addClass('photo-center');
				$('#switch li').eq(centerEleIndex).addClass('current-li');
			} else {
				$('.photo').eq(sortArr[m]).removeClass('photo-center');
				$('#switch li').eq(sortArr[m]).removeClass('current-li');
				if (m < data.length / 2){
					$('.photo').eq(sortArr[m]).css({
						'left': getRandom(- iPhotoW / 2,(wrapW - 3 * iPhotoW)/2),
						'top': getRandom(- iPhotoH / 2,wrapH - iPhotoH / 2),
						WebkitTransform: 'rotate('+ randomDeg +'deg)',
						'-moz-transform': 'rotate('+ randomDeg +'deg)'
					});
				} else {
					$('.photo').eq(sortArr[m]).css({
						'left': getRandom((wrapW + iPhotoW) / 2, wrapW - iPhotoW / 2),
						'top': getRandom(- iPhotoH / 2,wrapH - iPhotoH / 2),
						WebkitTransform: 'rotate('+ randomDeg +'deg)',
						'-moz-transform': 'rotate('+ randomDeg +'deg)'
					});
				}
			}
		}
	}

	function unSort(){
		var len = arr.length;
		for(var i = 0; i < len; i ++){
			var r = parseInt(Math.random() * len);
			var temp = arr[r];
			arr[r] = arr[i];
			arr[i] = temp;
		}
		return arr;
	}

	outOrder(randomX);

	//1 翻转函数
	function turnPan(ele, front, back){
		if (ele.hasClass(front)){
			ele.addClass(back).removeClass(front);
		} else {
			ele.addClass(front).removeClass(back);
		}
	}

	$('.photo').click(function(){
		if ($(this).index() == randomX) {
			turnPan($(this), 'photo-front', 'photo-back');
			turnPan($('#switch li').eq(randomX), 'turn-front', 'turn-back');
		} else {
			randomX = $(this).index();
			outOrder($(this).index());
		}
	});

	// 5 控制按钮
	$('#switch li').click(function(){
		if ($(this).index() == randomX){
			turnPan($('.photo').eq(randomX), 'photo-front', 'photo-back');
			turnPan($(this), 'turn-front', 'turn-back');
		} else {
			randomX = $(this).index();
			outOrder($(this).index());
		}
	});

	$(window).resize(function(){
		wrapW = $('.wrap').outerWidth();
		randomX = getRandom(0,15);
		outOrder(randomX);
	});
});