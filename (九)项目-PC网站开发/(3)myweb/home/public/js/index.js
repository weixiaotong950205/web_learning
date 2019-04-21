//这个是index.html的特效文件
$(function(){
	$('.top .right .myjiuxian .top').mouseenter(function(){//最顶部样式
		$(this).css({'background':'#fff'});
		$(this).next().show();//让我的酒仙-下拉菜单显示出来
		$(this).find('.caret').css({'transform':'rotate(180deg)'});//鼠标滑上去，让那个小三角变成倒着的三角
	});

	$('.top .right .myjiuxian').mouseleave(function(){//最顶部样式
		$(this).find('.down').hide();//将下拉菜单隐藏起来
		$(this).find('.top').css({'background':'#F2F2F2'});
		$(this).find('.caret').css({'transform':'rotate(0deg)'});//移走的时候，小三角又变成了0deg
	});

	$('.navmain .center ul li').first().css({'background':'#B40C10'});//幻灯片上册的导航条-特效
	
	$('.navmain .center ul li').mouseenter(function(){//只有鼠标指的块变色，别的都不变色
		$('.navmain .center ul li').css({'background':'#990000'});
		$(this).css({'background':'#B40C10'});
	});

	$('[data-toggle="carousel"]').carousel()//幻灯片运行
});