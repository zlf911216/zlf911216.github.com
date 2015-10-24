$.ajax({
		url: 'travel_1_json/new_add.json',
		type: 'GET',
		dataType:'json',
		data: {param1: 'value1'},
})
.done(function(mess) {//建立图片和左侧导航栏按钮
	$(".fullpage").height($(window).height())
	for (num in mess){
			var new_message=document.createElement("div");
			new_message.className='section';
			var new_message_img=document.createElement("div");
			new_message_img.className='under_img';
			new_message.style.background='url('+mess[num][0]+')';
			new_message.style.backgroundRepeat='no-repeat';
			new_message.style.backgroundSize='100% 100%';
			new_message.style.backgroundAttachment='fixed';
			new_message.style.height=$(window).height()+'px';
			var new_message_word=document.createElement("div");
			new_message_word.innerHTML=mess[num][1];
			new_message_word.className='word';
			new_message.appendChild(new_message_img);
			new_message.appendChild(new_message_word);
			var btn_box=document.createElement("div");
			btn_box.className='num_box';
			var btn=document.createElement("div");
			btn.className='num';
			btn_box.appendChild(btn);
			$(".right_num").append(btn_box);
			$(".fullpage").append(new_message);
		}
})
.fail(function() {
	console.log("error");
})
.always(function() {//图片随页面大小变化而变化导航栏加点击事件&整页滚动
	var num_img=0;
	var wheel=true;
	var op_message=false;//控制左边导航栏开关(文章)
	var op_travel=false;//控制左边导航栏开关(游记)
	var op_click=false;//控制左边导航栏开关(鼠标点击)
	var time_to_leftOpen=null;//控制左边导航栏开关
	var time_to_leftClose=null;//控制左边导航栏开关
	var height_img=$(window).height();
	$(".num:eq("+num_img+")").css({background: 'blue',transform: 'scale(1.32)'});//鼠标点击移出右侧导航栏
	$(".num").click(function(event) {//点击右侧按钮换图
		num_img=$(this).parent().index();
		$(".section").animate({
			top:-height_img*$(this).parent().index()+'px',
		},1200);
		$(".num").css({background: '',transform: 'scale(1)'});
		$(this).css({background: 'blue',transform: 'scale(1.32)'});
	});
	$(".num").mouseover(function(event) {$(this).css({transform: 'scale(1.32)'});//鼠标移入移出右侧导航栏
	});
	$(".num").mouseout(function(event) {$(this).css({transform: 'scale(1)'});//鼠标移入移出右侧导航栏
	});
	$(document).bind('mousewheel',function(event, delta){//翻页事件
		if(delta<0&&num_img<($(".num").size()-1)&&wheel==true&&!event.ctrlKey){
			$(".section").animate({
				top:'-='+height_img+'px',
			},1200)
			num_img+=1;
			wheel=false;
			$(".num").css({background: '',transform: 'scale(1)'});
			setTimeout(function(){
				$(".num:eq("+num_img+")").css({background: 'blue',transform: 'scale(1.32)'});
			},1000)
			setTimeout(function(){
				wheel=true;
			},2000)
		}
		else if(delta>0&&num_img>0&&wheel==true&&!event.ctrlKey){
			$(".section").animate({
				top:'+='+height_img+'px',
			},1200)
			num_img-=1;
			wheel=false;
			$(".num").css({background: '',transform: 'scale(1)'});
			setTimeout(function(){
				$(".num:eq("+num_img+")").css({background: 'blue',transform: 'scale(1.32)'});
			},1000)
			setTimeout(function(){
				wheel=true;
			},2000)
		}
		else{
			if(num_img==0&&wheel){
				$(".all_box,.alert_box,.alert_top,.alert_word").show();
				$(".alert_word").html("已经是顶部了");
				wheel=false;
				$(document).bind("click",function(){
					$(".all_box,.alert_box,.alert_top,.alert_word").hide();
					wheel=true;
					$(document).unbind('click');
				})
				document.onselectstart=function(){
   					return false;
				}
			}
			else if(num_img==($(".num").size()-1)&&wheel){
				$(".all_box,.alert_box,.alert_top,.alert_word").show();
				$(".alert_word").html("已经是最后了");
				wheel=false;
				$(document).bind("click",function(){
					$(".all_box,.alert_box,.alert_top,.alert_word").hide();
					wheel=true;
					$(document).unbind('click');
				})
				document.onselectstart=function(){
   					return false;
				}
			}
		}
	});
	$(window).resize(function(event) {//图片随口变化
		height_img=$(window).height();
		$(".section,.fullpage").css({height: height_img});
		$(".section").css({top:-height_img*num_img});
	});
	$(".left_menu_btn,.left_menu_btn_2").click(function(event) {//左侧点击(打开/关闭)导航栏
		clearTimeout(time_to_leftOpen);
		clearTimeout(time_to_leftClose);
		if(op_click){
			$(".left_menu").animate({left: -238+'px'},400);
			$(".left_menu_btn_2").html(">>");
			$(".list_one").slideUp(600);
			$(".list_two").slideUp(600);
			op_travel=false;
			op_message=false;
			op_click=false;
			$(".left_menu_btn,.left_menu,.left_menu_btn_2").bind("mouseover",function(event) {
				clearTimeout(time_to_leftClose);
				clearTimeout(time_to_leftOpen);
				time_to_leftOpen=setTimeout(function(){
					$(".left_menu").animate({left: -230+'px'},400);
				},170)
			});
			$(".left_menu_btn,.left_menu,.left_menu_btn_2").bind("mouseout",function(event) {
				clearTimeout(time_to_leftOpen);
				clearTimeout(time_to_leftClose);
				time_to_leftClose=setTimeout(function(){
					$(".left_menu").animate({left: -238+'px'},400);
				},170)
			});
		}
		else{
			$(".left_menu").animate({left: 0},500);
			$(".left_menu_btn_2").html("<<");
			op_click=true;
			$(".left_menu_btn,.left_menu,.left_menu_btn_2").unbind('mouseover');
			$(".left_menu_btn,.left_menu,.left_menu_btn_2").unbind('mouseout');
		}
	});
	$(".menu_message_one").click(function(event) {//左侧点击(打开/关闭)导航栏内菜单(游记)
		$(".list_one").slideToggle(600);
		$(".list_two").slideUp(600);
	});
	$(".menu_message_two").click(function(event) {//左侧点击(打开/关闭)导航栏内菜单(文章)
		$(".list_two").slideToggle(600);
		$(".list_one").slideUp(600);
	});
	$(".left_menu_btn,.left_menu,.left_menu_btn_2").bind("mouseover",function(event) {//左侧导航栏鼠标移入效果
		clearTimeout(time_to_leftClose);
		clearTimeout(time_to_leftOpen);
		time_to_leftOpen=setTimeout(function(){
			$(".left_menu").animate({left: -230+'px'},400);
		},170)
	});
	$(".left_menu_btn,.left_menu,.left_menu_btn_2").bind("mouseout",function(event) {//左侧导航栏鼠标移出效果
		clearTimeout(time_to_leftOpen);
		clearTimeout(time_to_leftClose);
		time_to_leftClose=setTimeout(function(){
			$(".left_menu").animate({left: -238+'px'},400);
		},170)	
	});
});
