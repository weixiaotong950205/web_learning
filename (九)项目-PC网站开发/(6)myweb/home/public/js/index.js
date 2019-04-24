//这个是index.html的特效文件
$(function(){
	$('.top .right .myjiuxian .top').mouseenter(function(){//(1)最顶部-登录小灰条-样式
		$(this).css({'background':'#fff'});
		$(this).next().show();//让我的酒仙-下拉菜单显示出来
		$(this).find('.caret').css({'transform':'rotate(180deg)'});//鼠标滑上去，让那个小三角变成倒着的三角
	});

	$('.top .right .myjiuxian').mouseleave(function(){//(1)最顶部样式
		$(this).find('.down').hide();//将下拉菜单隐藏起来
		$(this).find('.top').css({'background':'#F2F2F2'});
		$(this).find('.caret').css({'transform':'rotate(0deg)'});//移走的时候，小三角又变成了0deg
	});

	$('.navmain .center ul li').first().css({'background':'#B40C10'});//(4)幻灯片上侧的导航条-特效
	$('.navmain .center ul li').mouseenter(function(){//只有鼠标指的块变色，别的都不变色
		$('.navmain .center ul li').css({'background':'#990000'});
		$(this).css({'background':'#B40C10'});
	});

	//上面最大-幻灯片-保证运行(5)
	$('[data-toggle="carousel"]').carousel()


    // 这里是为了找出(6)幻灯片左侧导航-rightdiv的定位
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

	//这里是(7)幻灯片下面-标签页-特效---鼠标放到谁身上，谁多个on，多特效
	      //(7)幻灯片下标签页-左大div-大标签页
	$('.contentFirst .indexTabNav ul li').mouseenter(function(){
		$('.contentFirst .indexTabNav ul li').removeClass('on');//左上导航条-先把所有人身上的class-on去掉；注意on前面没有.
		$(this).addClass('on');//就在这个人身上加个on

		idx=$(this).index('.contentFirst .indexTabNav ul li');//鼠标移到哪个左上-标签页身上，先知道他在所有人里面排第几，
		//alert(idx);得到这是第几个标签页，去找对应号码的左下-图文显示，其他的图文都隐藏
		$('.contentFirst .indexTabConWrap').hide();
		$('.contentFirst .indexTabConWrap').eq(idx).show();
	});

	$('.contentFirst .indexTabConWrap').first().show();//(7)标签页：让第一个左下内容默认显示


	      //(7)幻灯片下标签页-右大div-右上-小标签页
	$('.contentFirst .indexTabNewNav li').mouseenter(function(){//(7)右div-小标签页-头部li
		$('.contentFirst .indexTabNewNav li').removeClass('on');//鼠标移到谁身上，就加上个属性on
		$(this).addClass('on');

		x=$(this).index('.contentFirst .indexTabNewNav li');//当鼠标往小标签页-头部移动时，找到这是第几个标签页头部
		//alert(x);
		$('.contentFirst .indexTabNewCon').hide();
		$('.contentFirst .indexTabNewCon').eq(x).show();

	})
    $('.contentFirst .indexTabNewCon').hide();/* 默认让体部先都隐藏，当鼠标点击标签页头部时，显示对应的标签页体部 */
	$('.contentFirst .indexTabNewCon').first().show();//(7)右div-小标签页-体部--默认只让第一个显示

	      //(7)幻灯片下标签页-右大div-右中-小幻灯片1
	$('[data-toggle="carousel"]').carousel()
	      //(7)幻灯片下标签页-右大div-右下-小幻灯片2
	$('[data-toggle="carousel"]').carousel()


	//(9)优惠推荐-幻灯片实现
	$('.raceBox .rightNavBox span').click(function(){//鼠标点到标题行右面小点点身上，就加上个属性on，小点点变成红色
		//关联起点点与三块幻灯片的关系
		dian=$(this).index('.raceBox .rightNavBox span');//找点点排第几
		s=-dian*v;//点击右上点点，找到该往左移多少px！！！,关联起点点与幻灯片
		//alert(s);
		$('.raceBox .raceBoxs').animate({
			'margin-left':s+'px'
		})
		//$('.raceBox .raceBoxs').css({'margin-left':s+'px'});//视图向左==.raceBoxs=3600px-往右移动了1200px
			//这样是快速的右移，要缓慢右移-animate
			
		//alert(1);
		$('.raceBox .rightNavBox span').removeClass('on');//先都移除on属性
		$(this).addClass('on');//只在鼠标点到的小点点上加上on属性
	});


	//(9)点击大长条幻灯片右侧的箭头，幻灯片1200px区域右移；
	s=0;//这上下的s/v都是一样的，要通用，要不‘点点’与‘幻灯片’不连贯了
	v=1193;//实际是198*6=1193px
	left=-2386;//往右点击最大的距离=1193*2=2386
	$('.raceBox .raceRight').click(function(){
		//alert(1);
		s-=v;
		if(s<=left){
			s=left;//右移最多只能移动两次，因为一共就三个大块的幻灯片
		}

		n=-s/v;//n是想让点击左右箭头时，上面点点会变红移动；
		//alert(n);//得到1,2
		$('.raceBox .rightNavBox span').removeClass('on');
		$('.raceBox .rightNavBox span').eq(n).addClass('on');//点箭头时，相应的点点也变红，别的点点不红

		$('.raceBox .raceBoxs').animate({//这样会达到缓慢右移的效果
			'margin-left':s+'px'
		},200);
		//$('.raceBox .raceBoxs').css({'margin-left':s+'px'});//视图向右移动==.raceBoxs=3600px---往左移动了1200px
	      //这样是一下子就右移，要慢慢的移动-用animate
	});
	$('.raceBox .raceLeft').click(function(){//点击大长条幻灯片左侧的箭头，幻灯片左移
		s+=v;
		if(s>=0){
			s=0;
		}
		n=-s/v;//这里重复上面
		//alert(n);//得到1,0
		$('.raceBox .rightNavBox span').removeClass('on');
		$('.raceBox .rightNavBox span').eq(n).addClass('on');

		$('.raceBox .raceBoxs').animate({//这样会达到缓慢左移的效果
			'margin-left':s+'px'
		},200);
		//$('.raceBox .raceBoxs').css({'margin-left':s+'px'});//视图向左==.raceBoxs=3600px---往右移动了1200px
			//同样这样是一下子就左移，要慢慢的移动
	});

});