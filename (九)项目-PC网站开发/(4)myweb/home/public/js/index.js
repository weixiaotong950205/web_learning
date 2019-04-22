//这个是index.html的特效文件
$(function(){
	$('.top .right .myjiuxian .top').mouseenter(function(){//最顶部-登录小灰条-样式
		$(this).css({'background':'#fff'});
		$(this).next().show();//让我的酒仙-下拉菜单显示出来
		$(this).find('.caret').css({'transform':'rotate(180deg)'});//鼠标滑上去，让那个小三角变成倒着的三角
	});

	$('.top .right .myjiuxian').mouseleave(function(){//最顶部样式
		$(this).find('.down').hide();//将下拉菜单隐藏起来
		$(this).find('.top').css({'background':'#F2F2F2'});
		$(this).find('.caret').css({'transform':'rotate(0deg)'});//移走的时候，小三角又变成了0deg
	});

	$('.navmain .center ul li').first().css({'background':'#B40C10'});//幻灯片上侧的导航条-特效
	$('.navmain .center ul li').mouseenter(function(){//只有鼠标指的块变色，别的都不变色
		$('.navmain .center ul li').css({'background':'#990000'});
		$(this).css({'background':'#B40C10'});
	});

	//上面最大-幻灯片-保证运行
	$('[data-toggle="carousel"]').carousel()


    // 这里是为了找出rightdiv的定位
	kuan=$('.leftmenu li').width();//计算leftmenu li的宽度
	x=$('.leftmenu li').first().position().left+kuan;//相对于leftmenu li中第一个块的坐标+父的宽度==rightdiv的定位；不是第一个话，rightdiv的位置会随鼠标滑动上下变化
	y=$('.leftmenu li').first().position().top;
	//alert(x+'-'+y);这样每一个rightdiv(一共六个)都定位到190-0
	$('.leftmenu li').mouseenter(function(){//鼠标移到左侧导航，就左侧出现红色边框，并且保持整体大块不往右边移动
		$(this).find('.leftnav').show();
		$(this).find('.rightdiv').show().css({'left':x+'px','top':y+'px'});//改变rightdiv的定位坐标--默认不出现，移上去才show;注意rightdiv一定要是绝对定位；
	});

	$('.leftmenu li').mouseleave(function(){
		$(this).find('.leftnav').hide();
		$(this).find('.rightdiv').hide();
	});
});