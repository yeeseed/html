$(function() {
	//页首左栏图片切换
	$('.msg_pic ol li').click(function() {

//		let target = $('.msg_pic ul li').filter(function(i, elem) {
//			return $(elem).is(':visible');
//		});
		var target = null;
		$('.msg_pic ul li').map(function(i,elem){
			if($(elem).is(':visible'))
				target = $(elem);
		});

		target.fadeOut();
		$('.msg_pic ul li').eq($(this).index()).fadeIn();
		$('.msg_pic ol li').removeClass('active');
		$(this).addClass('active');
	});

	//页首左栏列表放大
	$('#huashan li').mouseover(function() {
		$('#huashan li').removeClass('active');
		$(this).addClass('active');
	});

	//页脚图片滚动
	$('.pic_img li').click(function() {
		if($(this).index() === 0) {
			$(this).parent().eq(0).animate({
				'left': 0
			}, changeOpacity);
		} else if($(this).index() === $('.pic_img li').length - 1) {
			$(this).parent().eq(0).animate({
				'left': (-320 - $(this).outerWidth(true) * ($(this).index() - 2)) + 'px'
			}, changeOpacity);
		} else {
			$(this).parent().eq(0).animate({
				'left': (-320 - $(this).outerWidth(true) * ($(this).index() - 1)) + 'px'
			}, changeOpacity);
		}

	});

	function changeOpacity() {
		var l = $('.pic_img').offset().left;
		$('.pic_img li').map(function(i, elem) {
			$(elem).offset().left >= l && $(elem).offset().left + $(elem).innerWidth() <= l + 1000 ?
				$(elem).css('opacity', 1) :
				$(elem).css('opacity', 0.5);
		});
	}

	//页脚面板切换
	$('#footer_title li').click(function() {
		$('#footer_text p').hide();
		$('#footer_text p').eq($(this).index()).show();
		$('#footer_title li').removeClass('active');
		$(this).addClass('active');
	});
	
	//返回顶部
	$('#totop').click(function(){
		$(document).scrollTop(0);
	});

})