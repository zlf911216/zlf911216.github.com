
	var op_message=false;//控制左边导航栏开关(文章)
	var op_travel=false;//控制左边导航栏开关(游记)
	var op_click=false;//控制左边导航栏开关(鼠标点击)
	var time_to_leftOpen=null;//控制左边导航栏开关
	var time_to_leftClose=null;//控制左边导航栏开关
	var time_middle_s=null;//中间时间(秒)
	function time_middle_word(){//中间时间(秒)
		var mydate = new Date();
		var time_s=mydate.getSeconds(); 
		$(".active_word").html(time_s);
	}
	time_middle_s=setInterval(time_middle_word,100);//中间时间(秒)
		var mydate = new Date();
		var time_s=mydate.getSeconds(); 
		$(".active_word").html(time_s);
	$(".active_word").hide();//中间时间(秒)隐藏
		var mydate = new Date();
		var time_s=mydate.getSeconds(); 
		$(".active_word").html(time_s);
	$(".circle_open").mousedown(function(ev){//移动解锁
		var offset = $(".circle_open").offset();
		var x = ev.pageX - offset.left;
		var y = ev.pageY - offset.top;
		$(document).bind("mousemove",function(ev){
			$(".circle_open").stop();
			var x_1=ev.pageX - x;
			var y_1 = ev.pageY - y;
			$(".circle_open").get(0).style.left=x_1+26+'px';
			$(".circle_open").get(0).style.top=y_1+26+'px';
		});
		$(".circle_open").mouseup(function(event) {
			$(document).unbind("mousemove");
			$(".circle_open").get(0).releaseCapture&&oDiv.releaseCapture();
			if($(".circle_open").get(0).offsetLeft<=$(".circle_tw").get(0).offsetLeft-$(".circle_open").get(0).offsetWidth
			||$(".circle_open").get(0).offsetTop<=$(".circle_tw").get(0).offsetTop-$(".circle_open").get(0).offsetHeight){
				$(".circle_th,.circle_tw,.circle_on,.circle_open,.word").hide();
				$(".circle_final,.lock,.message,.travel,.search,.active_word,.left_menu_btn_2,.left_menu_btn").show(650);
				$(".circle_open").animate({
					left: "50%",
					top: "50%"
				},30);
			}
			else if($(".circle_open").get(0).offsetLeft>=$(".circle_tw").get(0).offsetLeft+$(".circle_tw").get(0).offsetWidth
			||$(".circle_open").get(0).offsetTop>=$(".circle_tw").get(0).offsetTop+$(".circle_tw").get(0).offsetHeight){
				$(".circle_th,.circle_tw,.circle_on,.circle_open,.word").hide();
				$(".circle_final,.lock,.message,.travel,.search,.active_word,.left_menu_btn_2,.left_menu_btn").show(650);
				$(".circle_open").animate({
					left: "50%",
					top: "50%"
				},30);
			}
			else{
				$(".circle_open").animate({
					left: "50%",
					top: "50%"
				});
			}
		});
		$(".circle_open").get(0).setCapture&&oDiv.setCapture();
		return false;
	});
	$(".lock").mouseover(function(event) {//鼠标移入(锁定)
		clearInterval(time_middle_s)
		$(".active_word").html('锁定');
		$(".lock_1").show();
		$(".lock_2").show();						
	});
	$(".lock").mouseout(function(event) {//鼠标移出(锁定)
		time_middle_s=setInterval(time_middle_word,100);
		$(".lock_1").hide();
		$(".lock_2").hide();
	});
	$(".lock").click(function(event) {//点击锁定
		op_message=false;
		op_travel=false;
		op_click=false;
		$(".left_menu_btn_2").html(">>");
		$(".list_one").slideUp(600);
		$(".list_two").slideUp(600);
		$(".circle_th,.circle_tw,.circle_on,.circle_open,.word").show(400);
		$(".circle_final,.lock,.message,.travel,.search,.active_word,.left_menu_btn_2,.left_menu_btn").hide();
		$(".left_menu").animate({left: -238+'px'},400);	
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
	});
	$(".message").mouseover(function(event) {//鼠标移入(文章)
		clearInterval(time_middle_s)
		$(".active_word").html('文章');
		$(".message_1").show();
		$(".message_2").show();
	});
	$(".message").mouseout(function(event) {//鼠标移出(文章)
		time_middle_s=setInterval(time_middle_word,100);
		$(".message_1").hide();
		$(".message_2").hide();
	});
	$(".message").click(function(event) {//控制左边导航栏开关(文章)
		if(op_message){
			$(".left_menu").animate({left: -238+'px'},400);
			$(".list_one").slideUp(600);
			$(".list_two").slideUp(600);
			op_message=false;
			$(".left_menu_btn_2").html(">>");
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
			$(".list_one").slideUp(600);	
			$(".list_two").slideDown(600);
			op_message=true;
			op_travel=false;
			op_click=true;
			$(".left_menu_btn_2").html("<<");
			$(".left_menu_btn,.left_menu,.left_menu_btn_2").unbind('mouseover');
			$(".left_menu_btn,.left_menu,.left_menu_btn_2").unbind('mouseout');	
		}	
	});
	$(".travel").mouseover(function(event) {//鼠标移入(游记)
		clearInterval(time_middle_s)
		$(".active_word").html('游记');
		$(".travel_1").show();
		$(".travel_2").show();
	});
	$(".travel").mouseout(function(event) {//鼠标移出(游记)
		time_middle_s=setInterval(time_middle_word,100);
		$(".travel_1").hide();
		$(".travel_2").hide();
	});
	$(".travel").click(function(event) {////控制左边导航栏开关(游记)
		if(op_travel){
			$(".left_menu").animate({left: -238+'px'},400);
			$(".list_one").slideUp(600);
			$(".list_two").slideUp(600);	
			op_travel=false;
			$(".left_menu_btn_2").html(">>");
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
			op_travel=true;
			op_message=false;
			op_click=true;
			$(".left_menu_btn_2").html("<<");
			$(".left_menu_btn,.left_menu,.left_menu_btn_2").unbind('mouseover');
			$(".left_menu_btn,.left_menu,.left_menu_btn_2").unbind('mouseout');
			$(".list_one").slideDown(600);	
			$(".list_two").slideUp(600);
		}	
	});
	$(".search").mouseover(function(event) {//鼠标移入(搜寻)
		clearInterval(time_middle_s);
		$(".active_word").html('搜索');
		$(".search_1").show();
		$(".search_2").show();
	});
	$(".search").mouseout(function(event) {//鼠标移出(搜寻)
		time_middle_s=setInterval(time_middle_word,100);
		$(".search_1").hide();
		$(".search_2").hide();
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
