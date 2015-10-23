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
	var height_img=$(window).height();
	$(".num:eq("+num_img+")").css({background: 'blue',transform: 'scale(1.32)'});
	$(".num").click(function(event) {
		num_img=$(this).parent().index();
		$(".section").animate({
			top:-height_img*$(this).parent().index()+'px',
		},1200);
		$(".num").css({background: '',transform: 'scale(1)'});
		$(this).css({background: 'blue',transform: 'scale(1.32)'});
	});
	$(".num").mouseover(function(event) {
		$(this).css({transform: 'scale(1.32)'});
	});
	$(".num").mouseout(function(event) {
		$(this).css({transform: 'scale(1)'});
		$(".num:eq("+num_img+")").css({transform: 'scale(1.32)'});
	});
	$(document).bind('mousewheel',function(event, delta){
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
				alert("已经是顶部了")
			}
			else if(num_img==($(".num").size()-1)&&wheel){
				alert("已经是最后了")
			}
		}
	});
	$(window).resize(function(event) {
		height_img=$(window).height();
		$(".section,.fullpage").css({height: height_img});
		$(".section").css({top:-height_img*num_img});
	});
});
